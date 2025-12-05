# ✅ Lista kontrolna - Sprawdzenie zmian

## 🚀 Jak sprawdzić czy wszystko działa:

### 1. **Rok w stopce (dynamiczny)**
- Otwórz stronę główną: `http://localhost:3000`
- Przewiń na dół do stopki
- Sprawdź czy widzisz aktualny rok (powinien być automatyczny, nie 2024)
- ✅ Powinno być: `© 2025 Zwrot Ekspert` (lub aktualny rok)

### 2. **Robots.txt dla Google**
- Otwórz w przeglądarce: `http://localhost:3000/robots.txt`
- ✅ Powinno pokazać:
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Disallow: /out/
  
  User-agent: Googlebot
  Allow: /
  Disallow: /api/
  Disallow: /out/
  
  Sitemap: https://www.zwrotekspert.pl/sitemap.xml
  ```

### 3. **Sitemap.xml z podstronami**
- Otwórz w przeglądarce: `http://localhost:3000/sitemap.xml`
- ✅ Powinno zawierać:
  - Strona główna (`/`)
  - `/uslugi/zwrot-prowizji`
  - `/uslugi/konsolidacja-kredytow`
  - `/uslugi/sankcja-kredytu-darmowego`
  - `/polityka-prywatnosci`
  - `/regulamin`
  - `/cookies`

### 4. **Podstrony usług**
Sprawdź czy działają i są dostępne:

- **Zwrot prowizji:**
  - URL: `http://localhost:3000/uslugi/zwrot-prowizji`
  - ✅ Powinna się załadować strona z pełną treścią
  - ✅ Powinien być link "Powrót do usług"

- **Konsolidacja kredytów:**
  - URL: `http://localhost:3000/uslugi/konsolidacja-kredytow`
  - ✅ Powinna się załadować strona z pełną treścią

- **Sankcja kredytu darmowego:**
  - URL: `http://localhost:3000/uslugi/sankcja-kredytu-darmowego`
  - ✅ Powinna się załadować strona z pełną treścią

### 5. **Linki z kafelków usług**
- Otwórz stronę główną: `http://localhost:3000`
- Przewiń do sekcji "Nasze usługi"
- Kliknij przycisk "Dowiedz się więcej" na kafelkach:
  - ✅ "Zwroty Prowizji" → powinien prowadzić do `/uslugi/zwrot-prowizji`
  - ✅ "Konsolidacje Kredytów" → powinien prowadzić do `/uslugi/konsolidacja-kredytow`
  - ✅ "Sankcja Kredytu Darmowego" → powinien prowadzić do `/uslugi/sankcja-kredytu-darmowego`

### 6. **Mapa Google**
- Otwórz stronę główną: `http://localhost:3000`
- Przewiń do sekcji "Lokalizacja" (na dole strony)
- ✅ Powinna być widoczna mapa Google
- ✅ Mapa powinna pokazywać adres: ul. Zachodnia 43, Chełm
- ✅ Powinien być link "Otwórz w Google Maps"

### 7. **Sprawdzenie w konsoli przeglądarki**
- Otwórz DevTools (F12)
- Przejdź do zakładki "Console"
- ✅ Nie powinno być błędów związanych z mapą Google
- ✅ Nie powinno być błędów związanych z komponentami

### 8. **Sprawdzenie SEO (opcjonalnie)**
- Kliknij prawym przyciskiem na stronie → "Zobacz źródło strony"
- Sprawdź czy w `<head>` są poprawne meta tagi
- Sprawdź czy są structured data (JSON-LD)

---

## 🔍 Dodatkowe sprawdzenie po wdrożeniu na produkcję:

### Google Search Console
1. Zaloguj się do Google Search Console
2. Prześlij sitemap: `https://www.zwrotekspert.pl/sitemap.xml`
3. Sprawdź czy Google widzi wszystkie strony

### Test robots.txt online
- Użyj narzędzia: https://www.google.com/webmasters/tools/robots-testing-tool
- Wpisz URL: `https://www.zwrotekspert.pl/robots.txt`
- ✅ Powinien pokazać, że Google może indeksować strony

### Test sitemap online
- Użyj narzędzia: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Wpisz URL: `https://www.zwrotekspert.pl/sitemap.xml`
- ✅ Powinien pokazać wszystkie strony jako poprawne

---

## 📝 Szybki test - wszystkie linki na raz:

Otwórz w przeglądarce (po kolei):
1. ✅ `http://localhost:3000` - strona główna
2. ✅ `http://localhost:3000/robots.txt` - robots.txt
3. ✅ `http://localhost:3000/sitemap.xml` - sitemap
4. ✅ `http://localhost:3000/uslugi/zwrot-prowizji` - podstrona 1
5. ✅ `http://localhost:3000/uslugi/konsolidacja-kredytow` - podstrona 2
6. ✅ `http://localhost:3000/uslugi/sankcja-kredytu-darmowego` - podstrona 3

Jeśli wszystkie się ładują bez błędów - wszystko działa! 🎉

