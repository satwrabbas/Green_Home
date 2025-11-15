// app/lib/supabase/client.ts

import { createClient } from '@supabase/supabase-js';

// تأكد من أن أسماء المتغيرات هنا تطابق تمامًا ما كتبته في ملف .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);