# 🌐 Konfiguracja domeny zwrotekspert.pl w Vercel

## 📋 **Krok po kroku:**

### **1. Dodaj domenę w Vercel:**

1. Otwórz: https://vercel.com/dashboard
2. Wybierz projekt **`zwrot-ekspert`**
3. Przejdź do **Settings** → **Domains**
4. Kliknij **"Add Domain"**
5. Wpisz: `zwrotekspert.pl` → kliknij **"Add"**
6. Wpisz też: `www.zwrotekspert.pl` → kliknij **"Add"**
7. Vercel pokaże Ci **rekordy DNS do dodania**

---

### **2. Skonfiguruj DNS w home.pl:**

1. Zaloguj się do panelu **home.pl**
2. Przejdź do zarządzania **DNS** dla `zwrotekspert.pl`
3. **Usuń stare rekordy** (jeśli są) dla `@` i `www`
4. Dodaj **nowe rekordy** zgodnie z instrukcjami Vercel:

#### **Opcja A: CNAME (zalecane przez Vercel)**

**Dla głównej domeny (`zwrotekspert.pl`):**
- **Typ:** `CNAME`
- **Nazwa:** `@` (lub pusta, zależy od panelu)
- **Wartość:** `cname.vercel-dns.com.` (z kropką na końcu!)
- **TTL:** `3600` (domyślne)

**Dla subdomeny www (`www.zwrotekspert.pl`):**
- **Typ:** `CNAME`
- **Nazwa:** `www`
- **Wartość:** `cname.vercel-dns.com.` (z kropką na końcu!)
- **TTL:** `3600` (domyślne)

#### **Opcja B: Rekord A (jeśli CNAME nie działa dla root)**

Jeśli home.pl nie pozwala na CNAME dla `@`, użyj rekordu A:

**Dla głównej domeny (`zwrotekspert.pl`):**
- **Typ:** `A`
- **Nazwa:** `@`
- **Wartość:** IP podane przez Vercel (np. `76.76.21.21` - sprawdź w Vercel!)
- **TTL:** `3600`

**Uwaga:** IP może się zmieniać, więc CNAME jest lepsze.

---

### **3. Poczekaj na propagację DNS:**

- ⏱️ **Czas propagacji:** 5-60 minut (czasem do 24h)
- ✅ **Sprawdź status** w Vercel Dashboard → Domains
- 🔒 **Certyfikat SSL** zostanie automatycznie wygenerowany przez Vercel

---

### **4. Sprawdź po propagacji:**

1. ✅ Otwórz `https://zwrotekspert.pl` - powinno działać
2. ✅ Otwórz `https://www.zwrotekspert.pl` - powinno działać
3. ✅ Sprawdź czy HTTPS działa (zielona kłódka)
4. ✅ Przetestuj formularz kontaktowy
5. ✅ Sprawdź czy wszystkie obrazy się ładują

---

### **5. Sprawdzenie statusu:**

**W Vercel Dashboard:**
- Przejdź do **Settings** → **Domains**
- Sprawdź status każdej domeny:
  - ✅ **Valid Configuration** = wszystko OK
  - ⏳ **Pending** = czeka na propagację DNS
  - ❌ **Error** = sprawdź rekordy DNS

**Sprawdzenie DNS online:**
- Użyj narzędzia: https://dnschecker.org
- Sprawdź czy rekordy CNAME są już propagowane

---

## ⚠️ **Częste problemy:**

### **Problem 1: CNAME nie działa dla root (`@`)**
**Rozwiązanie:** Użyj rekordu A zamiast CNAME (sprawdź IP w Vercel)

### **Problem 2: "Invalid Configuration"**
**Rozwiązanie:** 
- Sprawdź czy wartość CNAME ma kropkę na końcu: `cname.vercel-dns.com.`
- Sprawdź czy nie ma innych rekordów dla `@` lub `www`

### **Problem 3: DNS nie propaguje się**
**Rozwiązanie:**
- Poczekaj do 24h
- Wyczyść cache DNS: `ipconfig /flushdns` (Windows)
- Sprawdź na https://dnschecker.org

### **Problem 4: Certyfikat SSL nie działa**
**Rozwiązanie:** 
- Vercel generuje certyfikat automatycznie po propagacji DNS
- Poczekaj 10-15 minut po propagacji DNS

---

## 🔗 **Przydatne linki:**

- Dokumentacja Vercel: https://vercel.com/docs/concepts/projects/domains
- Sprawdzenie DNS: https://dnschecker.org
- Panel home.pl: https://home.pl

---

## ✅ **Checklist:**

- [ ] Dodałem `zwrotekspert.pl` w Vercel
- [ ] Dodałem `www.zwrotekspert.pl` w Vercel
- [ ] Skonfigurowałem rekordy DNS w home.pl
- [ ] Poczekałem na propagację DNS (5-60 min)
- [ ] Sprawdziłem status w Vercel Dashboard
- [ ] Przetestowałem `https://zwrotekspert.pl`
- [ ] Przetestowałem `https://www.zwrotekspert.pl`
- [ ] Sprawdziłem czy HTTPS działa
- [ ] Przetestowałem formularz kontaktowy


