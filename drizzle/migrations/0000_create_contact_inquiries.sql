CREATE TABLE public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  machine TEXT,
  message TEXT NOT NULL
);
GRANT ALL ON TABLE public.contact_inquiries TO service_role;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role manages contact inquiries"
  ON public.contact_inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);