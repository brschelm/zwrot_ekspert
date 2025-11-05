-- Utwórz tabelę dla zgłoszeń kontaktowych
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(100),
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  newsletter BOOLEAN NOT NULL DEFAULT false,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'spam')),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Utwórz indeksy dla lepszej wydajności
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Włącz Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Utwórz politykę dla anonimowych użytkowników (tylko INSERT)
CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Utwórz politykę dla autentykowanych użytkowników (SELECT, UPDATE)
CREATE POLICY "Allow authenticated select and update" ON contact_submissions
  FOR ALL TO authenticated
  USING (true);

-- Utwórz funkcję do automatycznego aktualizowania updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Utwórz trigger dla automatycznego aktualizowania updated_at
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();