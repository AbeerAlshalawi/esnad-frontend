import AuthForm from "./AuthForm";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const { login, isLoading } = useLogin();

  function handleLogin(data) {
    login(data);
  }

  return (
    <AuthForm onSubmit={handleLogin} isLogin={true} isLoading={isLoading} />
  );
}
