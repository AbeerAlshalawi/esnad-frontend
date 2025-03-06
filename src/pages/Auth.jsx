import Illustration from "../assets/LoginIllustration.svg";
import LoginForm from "../features/auth/LoginForm";
import SignupForm from "../features/auth/SignupForm";

// eslint-disable-next-line react/prop-types
export default function Login({ isLogin }) {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <div className="z-0 -ml-20 hidden md:block">
        <img src={Illustration} alt="illustration" />
      </div>
      <div className="z-10 basis-1/3">
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
