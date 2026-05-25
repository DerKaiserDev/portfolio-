/*
  # Create contact_messages table

  ## Purpose
  Stores messages submitted via the portfolio contact form.

  ## Tables
  - `contact_messages`
    - `id` (uuid, primary key, auto-generated)
    - `name` (text, required) - sender's name
    - `email` (text, required) - sender's email address
    - `message` (text, required) - message body
    - `created_at` (timestamptz, auto-set) - submission timestamp

  ## Security
  - RLS enabled: table is locked by default
  - INSERT policy: anyone (including anonymous visitors) can submit a contact message
  - No SELECT policy for anon — only authenticated owners can read messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name <> '' AND
    email <> '' AND
    message <> ''
  );
