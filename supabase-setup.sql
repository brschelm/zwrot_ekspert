-- Supabase Setup dla formularza kontaktowego
-- Skopiuj i wykonaj te komendy w SQL Editor w Supabase Dashboard

-- 1. Utworzenie tabeli contact_submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'spam')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Utworzenie indeksów dla lepszej wydajności
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_ip_address ON contact_submissions(ip_address);

-- 3. Włączenie Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Polityka RLS - tylko insert dla anonimowych użytkowników
CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- 5. Polityka RLS - tylko admin może czytać (opcjonalne)
CREATE POLICY "Allow admin read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- 6. Funkcja do automatycznego aktualizowania updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. Trigger do automatycznego aktualizowania updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 8. Utworzenie widoku dla łatwiejszego zarządzania (opcjonalne)
CREATE VIEW contact_submissions_summary AS
SELECT 
  id,
  name,
  email,
  phone,
  service,
  LEFT(message, 100) as message_preview,
  status,
  ip_address,
  created_at,
  CASE 
    WHEN created_at > NOW() - INTERVAL '1 hour' THEN 'nowy'
    WHEN created_at > NOW() - INTERVAL '24 hours' THEN 'dzisiaj'
    WHEN created_at > NOW() - INTERVAL '7 days' THEN 'w tym tygodniu'
    ELSE 'starszy'
  END as time_category
FROM contact_submissions
ORDER BY created_at DESC;

-- 9. Funkcja do sprawdzania rate limiting (opcjonalne)
CREATE OR REPLACE FUNCTION check_rate_limit(ip_addr INET, max_attempts INTEGER DEFAULT 3, window_hours INTEGER DEFAULT 24)
RETURNS BOOLEAN AS $$
DECLARE
  attempt_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO attempt_count
  FROM contact_submissions
  WHERE ip_address = ip_addr 
    AND created_at > NOW() - INTERVAL '1 hour' * window_hours;
  
  RETURN attempt_count < max_attempts;
END;
$$ LANGUAGE plpgsql;

-- 10. Komentarze do tabeli
COMMENT ON TABLE contact_submissions IS 'Zgłoszenia z formularza kontaktowego';
COMMENT ON COLUMN contact_submissions.status IS 'Status zgłoszenia: new, contacted, completed, spam';
COMMENT ON COLUMN contact_submissions.ip_address IS 'Adres IP użytkownika dla rate limiting';
COMMENT ON COLUMN contact_submissions.user_agent IS 'User agent przeglądarki użytkownika';







