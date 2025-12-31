-- Create table for contact form leads
CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa TEXT,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_leads
FOR INSERT
WITH CHECK (true);

-- No select/update/delete policies - leads are only accessible via service role
-- This protects the data from being read by unauthorized users

-- Add comment for documentation
COMMENT ON TABLE public.contact_leads IS 'Stores contact form submissions from the website';