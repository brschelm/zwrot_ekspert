import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder-key')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, ip_address, user_agent } = body

    // Zapisywanie do Supabase (jeśli skonfigurowane)
    let dbData = null
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co') {
      const { data, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name,
          email,
          phone,
          service,
          message,
          ip_address,
          user_agent,
          status: 'new'
        }])
        .select()

      if (dbError) {
        console.error('Supabase error:', dbError)
        return NextResponse.json({ error: 'Błąd podczas zapisywania do bazy danych' }, { status: 500 })
      }
      dbData = data
    } else {
      console.log('Supabase nie skonfigurowane - pomijam zapis do bazy danych')
      dbData = [{ id: 'temp-' + Date.now() }]
    }

    // Email do Ciebie (powiadomienie) - jeśli Resend skonfigurowane
    let notificationEmail = null
    if (process.env.RESEND_API_KEY) {
      notificationEmail = await resend.emails.send({
      from: 'Zwrot Ekspert <noreply@zwrotekspert.pl>',
      to: ['kontakt@zwrotekspert.pl'],
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
          </div>

          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Wiadomość:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #374151; margin-top: 0;">Informacje techniczne:</h4>
            <p><strong>IP:</strong> ${ip_address}</p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('pl-PL')}</p>
            <p><strong>ID zgłoszenia:</strong> ${dbData[0].id}</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${email}" style="background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              📧 Odpowiedz klientowi
            </a>
          </div>

          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            To powiadomienie zostało wysłane automatycznie z formularza kontaktowego Zwrot Ekspert
          </p>
        </div>
      `
      })
    } else {
      console.log('Resend nie skonfigurowane - pomijam wysyłanie emaili')
    }

    // Email do klienta (potwierdzenie) - jeśli Resend skonfigurowane
    let confirmationEmail = null
    if (process.env.RESEND_API_KEY) {
      confirmationEmail = await resend.emails.send({
      from: 'Zwrot Ekspert <noreply@zwrotekspert.pl>',
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
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Zgłoszenie zostało wysłane i zapisane',
      submissionId: dbData[0].id
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json({ error: 'Błąd podczas wysyłania emaili' }, { status: 500 })
  }
}
