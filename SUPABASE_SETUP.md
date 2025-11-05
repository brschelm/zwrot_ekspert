# 🚀 Konfiguracja Supabase dla formularza kontaktowego

## 📋 **Kroki konfiguracji:**

### **1. Utworzenie projektu Supabase**
1. Przejdź do [supabase.com](https://supabase.com)
2. Zaloguj się i utwórz nowy projekt
3. Wybierz region (najlepiej blisko Polski)
4. Poczekaj na utworzenie projektu

### **2. Pobranie kluczy API**
1. W Dashboard → Settings → API
2. Skopiuj:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### **3. Utworzenie pliku .env.local**
W głównym katalogu projektu utwórz plik `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Rate Limiting (opcjonalne)
NEXT_PUBLIC_RATE_LIMIT_MAX_REQUESTS=3
NEXT_PUBLIC_RATE_LIMIT_WINDOW_MS=86400000
```

### **4. Utworzenie tabeli w Supabase**
1. W Dashboard → SQL Editor
2. Skopiuj i wykonaj zawartość pliku `supabase-setup.sql`
3. Sprawdź czy tabela `contact_submissions` została utworzona

### **5. Testowanie formularza**
1. Uruchom projekt: `pnpm dev`
2. Przejdź do sekcji kontaktowej
3. Wypełnij i wyślij formularz
4. Sprawdź w Supabase Dashboard → Table Editor → contact_submissions

## 🔧 **Funkcjonalności formularza:**

### **✅ Ochrona przed spamem:**
- **Captcha matematyczny** - proste działanie matematyczne
- **Rate limiting** - max 3 próby dziennie na IP
- **Blokada** - automatyczne blokowanie po przekroczeniu limitu

### **✅ Zapisywanie danych:**
- **Wszystkie pola** formularza
- **IP address** użytkownika
- **User agent** przeglądarki
- **Timestamp** utworzenia
- **Status** zgłoszenia

### **✅ Bezpieczeństwo:**
- **Row Level Security (RLS)** włączone
- **Tylko insert** dla anonimowych użytkowników
- **Walidacja** po stronie klienta i serwera

## 📊 **Zarządzanie zgłoszeniami:**

### **W Supabase Dashboard:**
1. **Table Editor** → `contact_submissions` - wszystkie zgłoszenia
2. **SQL Editor** → `contact_submissions_summary` - widok podsumowania
3. **Authentication** → możliwość dodania admina do zarządzania

### **Statusy zgłoszeń:**
- `new` - nowe zgłoszenie
- `contacted` - skontaktowano się z klientem
- `completed` - sprawa zakończona
- `spam` - oznaczone jako spam

## 🚨 **Rozwiązywanie problemów:**

### **Błąd "Supabase error":**
- Sprawdź czy klucze API są poprawne
- Sprawdź czy tabela została utworzona
- Sprawdź czy RLS jest skonfigurowane

### **Formularz nie działa:**
- Sprawdź console w przeglądarce
- Sprawdź czy `.env.local` jest w głównym katalogu
- Restart serwera po dodaniu zmiennych środowiskowych

### **Captcha nie działa:**
- Sprawdź czy JavaScript jest włączony
- Sprawdź czy nie ma błędów w console

## 🔄 **Aktualizacja formularza:**

Aby użyć nowego formularza, zamień w `app/page.tsx`:

```tsx
// Zamiast:
import { ContactForm } from "@/components/contact-form"

// Użyj:
import { ContactFormEnhanced } from "@/components/contact-form-enhanced"

// I w komponencie:
<ContactFormEnhanced />
```

## 📧 **Powiadomienia email (opcjonalne):**

Aby otrzymywać powiadomienia o nowych zgłoszeniach:
1. Skonfiguruj **Edge Functions** w Supabase
2. Użyj **Resend** lub **SendGrid** do wysyłania emaili
3. Utwórz **Database Webhook** na INSERT

---

**Gotowe! 🎉** Twój formularz kontaktowy jest teraz w pełni funkcjonalny z Supabase!















