import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLogin ? 'Login to SecureNotes' : 'Register New Account'}
        </h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
