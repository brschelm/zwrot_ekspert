# 🔧 Konfiguracja zmiennych środowiskowych w Vercel

## 📋 **Wymagane zmienne środowiskowe:**

### **1. Przejdź do panelu Vercel:**
1. Otwórz: https://vercel.com/dashboard
2. Wybierz projekt **`zwrot-ekspert`**
3. Kliknij **Settings** → **Environment Variables**

### **2. Dodaj następujące zmienne:**

#### **✅ WYMAGANE (dla formularza kontaktowego):**

**`RESEND_API_KEY`**
- **Wartość:** Twój klucz API z Resend (znajdziesz w: https://resend.com/api-keys)
- **Środowiska:** ✅ Production, ✅ Preview, ✅ Development

**`RESEND_FROM_EMAIL`**
- **Wartość:** `noreply@zwrotekspert.pl` (lub inny email z zweryfikowanej domeny)
- **Środowiska:** ✅ Production, ✅ Preview, ✅ Development

#### **📧 OPCJONALNE (dla emaili):**

**`RESEND_NOTIFICATION_EMAIL`**
- **Wartość:** `kontakt@zwrotekspert.pl` (email na który przychodzą powiadomienia)
- **Środowiska:** ✅ Production, ✅ Preview, ✅ Development
- **Uwaga:** Jeśli nie ustawisz, domyślnie użyje `kontakt@zwrotekspert.pl`

#### **🗄️ OPCJONALNE (dla Supabase - zapis zgłoszeń do bazy):**

**`NEXT_PUBLIC_SUPABASE_URL`**
- **Wartość:** Twój URL projektu Supabase (np. `https://xxxxx.supabase.co`)
- **Środowiska:** ✅ Production, ✅ Preview, ✅ Development
- **Uwaga:** Jeśli projekt jest zapauzowany, możesz pominąć - formularz i tak będzie działał

**`NEXT_PUBLIC_SUPABASE_ANON_KEY`**
- **Wartość:** Twój anon key z Supabase
- **Środowiska:** ✅ Production, ✅ Preview, ✅ Development
- **Uwaga:** Jeśli projekt jest zapauzowany, możesz pominąć - formularz i tak będzie działał

---

## 📝 **Jak dodać zmienną:**

1. Kliknij **"Add New"**
2. Wpisz **Name** (np. `RESEND_API_KEY`)
3. Wpisz **Value** (wklej wartość)
4. Zaznacz **Production**, **Preview**, **Development**
5. Kliknij **"Save"**
6. Powtórz dla każdej zmiennej

---

## ✅ **Po dodaniu wszystkich zmiennych:**

1. Przejdź do **Deployments**
2. Znajdź najnowszy deployment (lub kliknij **"Redeploy"**)
3. Wybierz **"Redeploy"** → **"Use existing Build Cache"**
4. Poczekaj na zakończenie buildu

---

## 🔍 **Gdzie znaleźć wartości:**

### **Resend API Key:**
1. Zaloguj się na https://resend.com
2. Przejdź do **API Keys** w menu
3. Skopiuj klucz (lub utwórz nowy)

### **Supabase (jeśli używasz):**
1. Zaloguj się na https://supabase.com
2. Wybierz projekt
3. Przejdź do **Settings** → **API**
4. Skopiuj:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## ⚠️ **WAŻNE:**
- Po dodaniu zmiennych **NIE ZAPOMNIJ** o redeploy!
- Vercel nie aktualizuje zmiennych w już wdrożonych wersjach automatycznie
- Zmienne będą dostępne dopiero po następnym deploymencie

