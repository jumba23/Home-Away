import { createClient } from "@supabase/supabase-js";

const bucket = "home-away";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(url, key);

const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
};
