import AuthForm from "./AuthForm";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const { signup, isLoading } = useSignup();

  function handleSignup(data) {
    signup(data);
  }

  return (
    <AuthForm onSubmit={handleSignup} isLogin={false} isLoading={isLoading} />
  );
}
