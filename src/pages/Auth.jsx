import Illustration from "../assets/LoginIllustration.svg";
import LoginForm from "../features/auth/LoginForm";
import SignupForm from "../features/auth/SignupForm";

// eslint-disable-next-line react/prop-types
export default function Login({ isLogin }) {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <div className="hidden md:block">
        <img src={Illustration} alt="illustration" />
      </div>
      <div className="w-1/2">{isLogin ? <LoginForm /> : <SignupForm />}</div>
    </div>
  );
}
