# 🚀 Wdrożenie na Vercel - Krok po kroku

## 1. Wdróż projekt na Vercel

W terminalu wykonaj:

```bash
vercel
```

Postępuj zgodnie z instrukcjami:
- **Linkowanie projektu?** → N (No, jeśli to pierwszy raz)
- **Który katalog?** → Enter (obecny katalog)
- **Override settings?** → N (No)

Vercel automatycznie:
- ✅ Wykryje Next.js
- ✅ Zbuduje projekt
- ✅ Wdroży na produkcję
- ✅ Da Ci URL typu: `zwrot-ekspert.vercel.app`

## 2. Dodaj zmienne środowiskowe

Po pierwszym wdrożeniu, dodaj zmienne środowiskowe:

### Przez CLI:
```bash
vercel env add RESEND_API_KEY
# Wklej swój klucz z Resend

vercel env add RESEND_FROM_EMAIL
# Wpisz: noreply@zwrotekspert.pl

vercel env add RESEND_NOTIFICATION_EMAIL
# Wpisz: kontakt@zwrotekspert.pl

vercel env add NEXT_PUBLIC_SUPABASE_URL
# Wpisz swój URL Supabase (jeśli używasz)

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Wpisz swój klucz Supabase (jeśli używasz)
```

### Przez Panel Vercel:
1. Idź na https://vercel.com/dashboard
2. Wybierz projekt `zwrot-ekspert`
3. Settings → Environment Variables
4. Dodaj wszystkie zmienne:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL=noreply@zwrotekspert.pl`
   - `RESEND_NOTIFICATION_EMAIL=kontakt@zwrotekspert.pl`
   - `NEXT_PUBLIC_SUPABASE_URL` (opcjonalnie)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (opcjonalnie)

**WAŻNE:** Dla każdej zmiennej ustaw:
- ✅ Production
- ✅ Preview
- ✅ Development

## 3. Połącz domenę zwrotekspert.pl

### W Panelu Vercel:
1. Idź do projektu → Settings → Domains
2. Kliknij "Add Domain"
3. Wpisz: `zwrotekspert.pl`
4. Wpisz też: `www.zwrotekspert.pl`
5. Vercel pokaże Ci rekordy DNS do dodania

### W Panelu home.pl:
1. Zaloguj się do panelu home.pl
2. Przejdź do zarządzania DNS dla `zwrotekspert.pl`
3. Dodaj rekordy zgodnie z instrukcjami Vercel:

**Typ A:**
- Nazwa: `@`
- Wartość: IP podane przez Vercel (np. `76.76.21.21`)

**LUB CNAME (zalecane):**
- Nazwa: `@`
- Wartość: `cname.vercel-dns.com.`

**CNAME dla www:**
- Nazwa: `www`
- Wartość: `cname.vercel-dns.com.`

### Sprawdzenie DNS:
Po dodaniu rekordów, poczekaj 5-60 minut na propagację DNS.

Sprawdź status w Vercel Dashboard → Domains.

## 4. Wdróż ponownie z domeną

Po połączeniu domeny:

```bash
vercel --prod
```

Lub użyj panelu Vercel → Deployments → Redeploy

## 5. Sprawdź po wdrożeniu

- [ ] Strona działa na `https://zwrotekspert.pl`
- [ ] Strona działa na `https://www.zwrotekspert.pl`
- [ ] HTTPS działa (automatycznie przez Vercel)
- [ ] Formularz kontaktowy działa
- [ ] Emails są wysyłane
- [ ] Favicon wyświetla się
- [ ] Wszystkie obrazy się ładują

## 🔧 Przydatne komendy Vercel

```bash
# Wdróż na produkcję
vercel --prod

# Podgląd zmian
vercel

# Zobacz logi
vercel logs

# Sprawdź status
vercel ls
```

## 📞 Pomoc

- Dokumentacja Vercel: https://vercel.com/docs
- Wsparcie Vercel: https://vercel.com/support

