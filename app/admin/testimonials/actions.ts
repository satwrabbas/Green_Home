'use server';

import { createClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addTestimonial(formData: FormData) {
  const supabase = await createClient();

  console.log("--- 1. Starting Upload Process ---");

  // جلب الملف
  const imageFile = formData.get('image') as File;
  
  // طباعة معلومات الملف للتأكد أنه وصل
  console.log("File Name:", imageFile?.name);
  console.log("File Size:", imageFile?.size);
  console.log("File Type:", imageFile?.type);

  let image_url = null;

  if (imageFile && imageFile.size > 0) {
    console.log("--- 2. File found, attempting upload ---");
    
    // تنظيف اسم الملف
    const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, '_')}`;
    
    // حاول الرفع واطبع النتيجة
    // ملاحظة: تأكد أن اسم البوكيت هنا يطابق الموجود في Supabase
    // جربنا هنا كتابته بأحرف صغيرة، إذا كان عندك مختلفاً غيره
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('testimonials') 
      .upload(fileName, imageFile, { upsert: false });

    if (uploadError) {
      console.error("❌ UPLOAD ERROR:", uploadError);
      console.error("Error Message:", uploadError.message);
    } else {
      console.log("✅ Upload Success:", uploadData);
      
      const { data: publicData } = supabase.storage
        .from('testimonials')
        .getPublicUrl(fileName);
        
      image_url = publicData.publicUrl;
      console.log("🔗 Generated URL:", image_url);
    }
  } else {
    console.log("⚠️ No file detected in formData or file size is 0");
  }

  // الحفظ في قاعدة البيانات
  const data = {
    client_name: formData.get('client_name'),
    role: formData.get('role'),
    content: formData.get('content'),
    rating: Number(formData.get('rating')),
    image_url: image_url,
  };

  const { error } = await supabase.from('testimonials').insert(data);

  if (!error) {
    console.log("✅ Database Insert Success");
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
  } else {
    console.error("❌ Database Error:", error);
  }
}

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get('id');
  const supabase = await createClient();
  await supabase.from('testimonials').delete().eq('id', id);
  revalidatePath('/admin/testimonials');
  revalidatePath('/');
}