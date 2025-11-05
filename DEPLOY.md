# 🚀 Instrukcja wdrożenia na home.pl

## Przygotowanie do wdrożenia

### 1. Build produkcyjny lokalnie (test)

```bash
# Zainstaluj zależności
pnpm install

# Zbuduj projekt
pnpm build

# Sprawdź czy build działa lokalnie
pnpm start
```

### 2. Zmienne środowiskowe na produkcji

W panelu home.pl lub w pliku `.env` na serwerze dodaj:

```env
# Next.js
NODE_ENV=production

# Supabase (jeśli używasz)
NEXT_PUBLIC_SUPABASE_URL=twoj_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=twoj_klucz_supabase

# Resend (dla emaili)
RESEND_API_KEY=twoj_klucz_resend
RESEND_FROM_EMAIL=noreply@zwrotekspert.pl
RESEND_NOTIFICATION_EMAIL=kontakt@zwrotekspert.pl
```

### 3. Opcje wdrożenia na home.pl

#### Opcja A: Hosting z Node.js (jeśli home.pl wspiera)

1. **Przez panel home.pl:**
   - Zaloguj się do panelu home.pl
   - Przejdź do sekcji "Node.js" lub "Aplikacje"
   - Wgraj pliki projektu (wszystkie pliki z folderu)
   - Ustaw główny katalog na `./` (root projektu)
   - Ustaw polecenie startowe: `pnpm start` lub `node server.js`
   - Dodaj zmienne środowiskowe

2. **Przez FTP/SFTP:**
   ```bash
   # Wgraj wszystkie pliki projektu do katalogu public_html lub www
   # Upewnij się że node_modules NIE są wgrane (dodaj do .gitignore)
   ```

3. **Przez SSH (jeśli dostępne):**
   ```bash
   # Połącz się przez SSH
   ssh uzytkownik@twoj-serwer.home.pl
   
   # Przejdź do katalogu projektu
   cd public_html
   
   # Zainstaluj zależności
   npm install --production
   
   # Zbuduj projekt
   npm run build
   
   # Uruchom serwer (lub użyj PM2)
   npm start
   ```

#### Opcja B: Vercel (zalecane dla Next.js)

Home.pl może nie wspierać Node.js bezpośrednio. **Zalecam użycie Vercel** (darmowe dla Next.js):

1. **Zainstaluj Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Wdróż:**
   ```bash
   vercel
   ```

3. **Skonfiguruj domenę:**
   - W panelu Vercel dodaj domenę `zwrotekspert.pl`
   - Dodaj rekordy DNS w home.pl zgodnie z instrukcjami Vercel

#### Opcja C: Export statyczny (jeśli nie ma Node.js)

Jeśli home.pl nie wspiera Node.js, możesz wyeksportować statyczną wersję:

1. **Zmień next.config.mjs:**
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. **Zbuduj i wyeksportuj:**
   ```bash
   pnpm build
   # Pliki będą w folderze `out/`
   ```

3. **Wgraj folder `out/` na serwer przez FTP**

**UWAGA:** Export statyczny nie obsługuje formularzy kontaktowych (API routes). Musisz użyć zewnętrznego rozwiązania.

### 4. Konfiguracja DNS w home.pl

1. Przejdź do panelu home.pl → DNS
2. Upewnij się że domena `zwrotekspert.pl` wskazuje na właściwy serwer
3. Jeśli używasz Vercel, dodaj rekordy CNAME zgodnie z instrukcjami

### 5. Sprawdzenie po wdrożeniu

- [ ] Strona ładuje się poprawnie
- [ ] Wszystkie obrazy się ładują
- [ ] Formularz kontaktowy działa
- [ ] Emails są wysyłane
- [ ] Favicon wyświetla się
- [ ] SEO meta tagi są poprawne

## 🔧 Rozwiązywanie problemów

### Błąd "Module not found"
- Upewnij się że `node_modules` są zainstalowane na serwerze
- Sprawdź czy `pnpm install` został wykonany

### Błąd "Port already in use"
- Zmień port w `package.json` lub użyj PM2 do zarządzania procesami

### Formularz nie działa
- Sprawdź czy API routes są dostępne (wymagają Node.js)
- Sprawdź zmienne środowiskowe
- Sprawdź logi serwera

## 📞 Kontakt

W razie problemów sprawdź:
- Logi serwera w panelu home.pl
- Dokumentację Next.js: https://nextjs.org/docs/deployment
- Dokumentację Vercel: https://vercel.com/docs

