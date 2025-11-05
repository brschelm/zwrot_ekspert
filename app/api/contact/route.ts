import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient, ContactSubmission } from '@/lib/supabase'
import { Resend } from 'resend'

// Lazy initialization - Resend tylko gdy jest potrzebny
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('⚠️ UWAGA: RESEND_API_KEY nie jest ustawiony! Emails nie będą wysyłane.')
    return null
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, consent, newsletter } = body

    // Walidacja wymaganych pól
    if (!name || !email || !phone || !message || !consent) {
      return NextResponse.json(
        { error: 'Wszystkie wymagane pola muszą być wypełnione' },
        { status: 400 }
      )
    }

    // Przygotuj dane do zapisania
    const contactData: ContactSubmission = {
      name,
      email,
      phone,
      service,
      message,
      consent,
      newsletter,
      ip_address: request.ip || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown',
      status: 'new'
    }

    // Zapisz do Supabase (opcjonalne - nie blokuje wysyłki emaili)
    let submissionId = 'temp-' + Date.now()
    
    console.log('🗄️ ========== SUPABASE ==========')
    console.log('📧 NEXT_PUBLIC_SUPABASE_URL obecny:', !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('📧 NEXT_PUBLIC_SUPABASE_ANON_KEY obecny:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    
    // Sprawdź czy Supabase jest skonfigurowany i dostępny
    const supabase = getSupabaseClient()
    console.log('📧 Supabase client utworzony:', !!supabase)
    if (supabase) {
      try {
        const { data: dbData, error: dbError } = await supabase
          .from('contact_submissions')
          .insert([contactData])
          .select()

        if (dbError) {
          console.error('❌ Błąd Supabase (kontynuuję wysyłanie emaili):', dbError.message)
          console.error('❌ Pełny błąd:', JSON.stringify(dbError, null, 2))
          console.error('⚠️ Uwaga: Projekt może być zapauzowany - sprawdź w Supabase Dashboard')
        } else {
          submissionId = dbData[0].id
          console.log('✅ Zapisano do Supabase, ID:', submissionId)
        }
      } catch (supabaseError: any) {
        console.error('❌ Błąd CATCH połączenia z Supabase (kontynuuję wysyłanie emaili):', supabaseError.message)
        console.error('❌ Szczegóły błędu:', JSON.stringify(supabaseError, null, 2))
        console.error('⚠️ Możliwe przyczyny: projekt zapauzowany, brak internetu, lub tabela nie istnieje')
        // Kontynuujemy - maile są ważniejsze niż zapis do bazy
      }
      console.log('🗄️ ========== KONIEC SUPABASE ==========')
    } else {
      console.log('ℹ️ Supabase nie jest skonfigurowany - pomijam zapis do bazy')
      console.log('💡 Aby włączyć Supabase, ustaw w Vercel:')
      console.log('   - NEXT_PUBLIC_SUPABASE_URL')
      console.log('   - NEXT_PUBLIC_SUPABASE_ANON_KEY')
      console.log('🗄️ ========== KONIEC SUPABASE (brak konfiguracji) ==========')
    }

    // Wyślij powiadomienie email do Ciebie
    const notificationEmail = process.env.RESEND_NOTIFICATION_EMAIL || 'kontakt@zwrotekspert.pl'
    console.log('📧 ========== EMAIL POWIADOMIENIA ==========')
    console.log('🚀 Próbuję wysłać email powiadomienia do:', notificationEmail)
    console.log('📧 Resend API Key obecny:', !!process.env.RESEND_API_KEY)
    console.log('📧 RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL || 'BRAK')
    
    const resend = getResendClient()
    console.log('📧 Resend client utworzony:', !!resend)
    let emailNotificationSent = false
    let emailConfirmationSent = false
    
    if (resend) {
      console.log('📧 Wchodzę do bloku if (resend) - rozpoczynam wysyłanie powiadomienia')
      try {
        // Używaj zweryfikowanej domeny lub fallback do testowej
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@zwrotekspert.pl'
        console.log('📤 Wysyłam z adresu:', fromEmail)
        
        const emailResult = await resend.emails.send({
        from: `Zwrot Ekspert <${fromEmail}>`,
        to: [notificationEmail],
        subject: `🚨 Nowe zgłoszenie kontaktowe - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              🚨 Nowe zgłoszenie kontaktowe
            </h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Dane klienta:</h3>
              <p><strong>Imię i nazwisko:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefon:</strong> ${phone}</p>
              <p><strong>Usługa:</strong> ${service || 'Nie wybrano'}</p>
              <p><strong>Newsletter:</strong> ${newsletter ? 'Tak' : 'Nie'}</p>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Wiadomość:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #374151; margin-top: 0;">Informacje techniczne:</h4>
              <p><strong>IP:</strong> ${contactData.ip_address}</p>
              <p><strong>Data:</strong> ${new Date().toLocaleString('pl-PL')}</p>
              <p><strong>ID zgłoszenia:</strong> ${submissionId}</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                📧 Odpowiedz klientowi
              </a>
            </div>
          </div>
        `
      })
        console.log('📧 Wynik wysyłania email powiadomienia:', JSON.stringify(emailResult, null, 2))
        if (emailResult.error) {
          console.error('❌ Błąd wysyłania email powiadomienia:', emailResult.error.message)
          console.error('❌ Pełny błąd:', JSON.stringify(emailResult.error, null, 2))
          emailNotificationSent = false
        } else {
          console.log('✅ Email powiadomienia wysłany:', emailResult.data?.id)
          emailNotificationSent = true
        }
      } catch (emailError: any) {
        console.error('❌ Błąd CATCH wysyłania email powiadomienia:', emailError)
        console.error('❌ Szczegóły błędu:', JSON.stringify(emailError, null, 2))
        if (emailError.message) {
          console.error('❌ Komunikat błędu:', emailError.message)
        }
        // Nie przerywamy procesu jeśli email się nie wyśle
      }
      console.log('📧 ========== KONIEC EMAIL POWIADOMIENIA ==========')
    } else {
      console.warn('⚠️ Resend nie jest skonfigurowany - pomijam wysyłanie emaili')
      console.log('📧 ========== KONIEC EMAIL POWIADOMIENIA (brak Resend) ==========')
    }

    // Wyślij potwierdzenie do klienta
    console.log('🚀 Próbuję wysłać email potwierdzenia do:', email)
    if (resend) {
      try {
        // Używaj zweryfikowanej domeny lub fallback do testowej
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@zwrotekspert.pl'
        
        const confirmationResult = await resend.emails.send({
        from: `Zwrot Ekspert <${fromEmail}>`,
        to: [email],
        subject: '✅ Dziękujemy za zgłoszenie - Zwrot Ekspert',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              ✅ Dziękujemy za zgłoszenie!
            </h2>
            
            <p style="font-size: 18px; color: #374151;">Witaj ${name},</p>
            
            <p style="color: #374151; line-height: 1.6;">
              Dziękujemy za skontaktowanie się z nami! Otrzymaliśmy Twoje zgłoszenie dotyczące 
              <strong>${service || 'naszych usług'}</strong> i skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Co dalej?</h3>
              <ul style="color: #374151;">
                <li>Przeanalizujemy Twoją sytuację finansową</li>
                <li>Skontaktujemy się z Tobą telefonicznie lub mailowo</li>
                <li>Przedstawimy możliwe rozwiązania</li>
                <li>Rozpoczniemy proces odzyskiwania Twoich pieniędzy</li>
              </ul>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Twoje zgłoszenie:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; background: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #374151; font-weight: bold;">Potrzebujesz pilnej pomocy?</p>
              <a href="tel:+48510441307" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                📞 Zadzwoń: +48 510 441 307
              </a>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                <strong>Zwrot Ekspert</strong><br>
                Profesjonalne doradztwo w zwrotach prowizji<br>
                📧 kontakt@zwrotekspert.pl | 📞 +48 510 441 307
              </p>
            </div>
          </div>
        `
      })
        if (confirmationResult.error) {
          console.error('❌ Błąd wysyłania email potwierdzenia:', confirmationResult.error.message)
          emailConfirmationSent = false
        } else {
          console.log('✅ Email potwierdzenia wysłany:', confirmationResult.data?.id)
          emailConfirmationSent = true
        }
      } catch (emailError: any) {
        console.error('❌ Błąd wysyłania email potwierdzenia:', emailError)
        console.error('❌ Szczegóły błędu:', JSON.stringify(emailError, null, 2))
        if (emailError.message) {
          console.error('❌ Komunikat błędu:', emailError.message)
        }
        // Nie przerywamy procesu jeśli email się nie wyśle
      }
    }

    // Sprawdź czy email został wysłany
    const emailSent = emailNotificationSent || emailConfirmationSent
    
    if (!resend) {
      console.error('⚠️ RESEND_API_KEY nie jest ustawiony - emaile nie będą wysyłane!')
      return NextResponse.json({
        success: false,
        error: 'Email nie został wysłany - brak konfiguracji RESEND_API_KEY. Sprawdź zmienne środowiskowe w Vercel.',
        submissionId,
        emailSent: false
      }, { status: 500 })
    }
    
    // Jeśli email potwierdzenia został wysłany, ale powiadomienie nie - to jest OK (klient dostał potwierdzenie)
    // Ale logujemy ostrzeżenie
    if (!emailNotificationSent && emailConfirmationSent) {
      console.warn('⚠️ Email powiadomienia nie został wysłany, ale email potwierdzenia tak - sprawdź logi powyżej')
    }
    
    if (!emailNotificationSent && !emailConfirmationSent) {
      console.error('⚠️ Żaden email nie został wysłany mimo obecności RESEND_API_KEY')
      return NextResponse.json({
        success: false,
        error: 'Email nie został wysłany. Sprawdź logi w Vercel Dashboard → Functions → Logs.',
        submissionId,
        emailSent: false
      }, { status: 500 })
    }
    
    // Jeśli przynajmniej jeden email został wysłany, zwróć sukces
    return NextResponse.json({
      success: true,
      message: emailNotificationSent 
        ? 'Zgłoszenie zostało wysłane' + (submissionId.startsWith('temp-') ? ' (email wysłany, baza danych tymczasowo niedostępna)' : ' i zapisane')
        : 'Zgłoszenie otrzymane (email potwierdzenia wysłany, ale powiadomienie nie - sprawdź logi Vercel)',
      submissionId,
      emailSent: true,
      emailNotificationSent,
      emailConfirmationSent
    }, { status: 200 })

  } catch (error) {
    console.error('Błąd podczas przetwarzania formularza:', error)
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania formularza' },
      { status: 500 }
    )
  }
}
