import SignUpForm from "@/components/forms/SignUpForm";

function Signup() {
  return (
    <>
      <img
        src="/Images/nature-background.avif"
        alt="Signup nature background"
        className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 object-cover"
      />
      <SignUpForm />
    </>
  );
}

export default Signup;
