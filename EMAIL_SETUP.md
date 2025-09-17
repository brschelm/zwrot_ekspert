# 📧 Konfiguracja powiadomień email - Resend

## 🚀 **Kroki konfiguracji:**

### **1. Utworzenie konta Resend**
1. Przejdź do [resend.com](https://resend.com)
2. Zarejestruj się (darmowe 3000 emaili/miesiąc)
3. Zweryfikuj swoją domenę `zwrotekspert.pl` (opcjonalne)

### **2. Pobranie API Key**
1. W Dashboard → API Keys
2. Kliknij "Create API Key"
3. Nazwij klucz: "Zwrot Ekspert Website"
4. Skopiuj wygenerowany klucz

### **3. Dodanie klucza do .env.local**
Dodaj do pliku `.env.local`:

```env
# Resend Email Service
RESEND_API_KEY=re_your_api_key_here

# Supabase (jeśli jeszcze nie masz)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### **4. Weryfikacja domeny (opcjonalne)**
1. W Resend Dashboard → Domains
2. Dodaj domenę `zwrotekspert.pl`
3. Dodaj rekordy DNS w panelu domeny
4. Po weryfikacji możesz używać `kontakt@zwrotekspert.pl`

## 📧 **Co się dzieje po wypełnieniu formularza:**

### **1. Email do Ciebie (powiadomienie):**
- **Od:** `noreply@zwrotekspert.pl`
- **Do:** `kontakt@zwrotekspert.pl`
- **Temat:** `🚨 Nowe zgłoszenie kontaktowe - [Imię]`
- **Zawartość:** Wszystkie dane klienta + wiadomość

### **2. Email do klienta (potwierdzenie):**
- **Od:** `noreply@zwrotekspert.pl`
- **Do:** Email klienta
- **Temat:** `✅ Dziękujemy za zgłoszenie - Zwrot Ekspert`
- **Zawartość:** Potwierdzenie + następne kroki

### **3. Zapis w bazie danych:**
- **Supabase:** Tabela `contact_submissions`
- **Status:** `new`
- **Wszystkie dane:** Imię, email, telefon, usługa, wiadomość
- **Metadane:** IP, User Agent, timestamp

## 🔧 **Funkcjonalności:**

### **✅ Automatyczne powiadomienia:**
- Natychmiastowy email do Ciebie
- Potwierdzenie dla klienta
- Profesjonalne szablony HTML

### **✅ Zapisywanie w bazie:**
- Wszystkie zgłoszenia w Supabase
- Statusy: new, contacted, completed, spam
- Historia wszystkich kontaktów

### **✅ Ochrona przed spamem:**
- Captcha matematyczny
- Rate limiting (3 próby/dzień)
- Walidacja po stronie serwera

## 🚨 **Rozwiązywanie problemów:**

### **Błąd "Resend API Key":**
- Sprawdź czy klucz jest poprawny w `.env.local`
- Restart serwera po dodaniu zmiennych
- Sprawdź czy klucz ma odpowiednie uprawnienia

### **Emaile nie docierają:**
- Sprawdź folder spam
- Zweryfikuj domenę w Resend
- Sprawdź logi w Resend Dashboard

### **Błąd bazy danych:**
- Sprawdź konfigurację Supabase
- Sprawdź czy tabela `contact_submissions` istnieje
- Sprawdź czy RLS jest skonfigurowane

## 📊 **Monitoring:**

### **W Resend Dashboard:**
- Statystyki wysłanych emaili
- Status dostarczenia
- Błędy wysyłania

### **W Supabase Dashboard:**
- Wszystkie zgłoszenia w tabeli
- Statusy i historie
- Możliwość eksportu danych

---

**Gotowe! 🎉** Twój formularz teraz wysyła emaile i zapisuje dane!




