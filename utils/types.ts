export type actionFunction = (
  prevData: any,
  formData: FormData
) => Promise<{ message: string }>;
