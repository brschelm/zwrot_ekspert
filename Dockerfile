# Dockerfile dla strony Zwrot Ekspert
FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików package.json i pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalacja pnpm
RUN npm install -g pnpm

# Instalacja zależności
RUN pnpm install --frozen-lockfile

# Kopiowanie kodu źródłowego
COPY . .

# Budowanie aplikacji
RUN pnpm build

# Ekspozycja portu
EXPOSE 3000

# Uruchomienie aplikacji
CMD ["pnpm", "start"]


