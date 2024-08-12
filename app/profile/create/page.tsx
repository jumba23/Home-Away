import { SubmitButton } from "@/components/form/Button";
import { FormContainer } from "@/components/form/FormContainter";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return { message: "Profile created" };
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md ">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="email" name="username" label="Username" />
          </div>
          <SubmitButton text="Create Profile" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
