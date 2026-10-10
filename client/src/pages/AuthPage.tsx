import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#f6f1e7] py-10 px-4">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-[#ede3cf] overflow-hidden">
        {/* URVAA brand introduction */}
        <div className="hidden md:flex flex-col md:w-1/2 items-center justify-center p-8 bg-gradient-to-br from-[#185e33]/5 to-[#e5c158]/10 border-r border-[#ede3cf]">
          <img src="/logo.png" alt="URVAA — Delivering the Authentic Rural Aura" className="h-36 w-36 mb-4 object-contain" />
          <h1 className="text-3xl font-extrabold text-center mb-2 text-[#185e33] font-serif">
            URVAA
          </h1>
          <p className="text-gray-600 text-center text-sm mb-6 max-w-xs leading-relaxed font-medium">
            Delivering the Authentic Rural Aura. Discover regional products and the stories behind them.
          </p>
          <div className="mt-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur">
            One Village – One Product
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          {isSignUp ? <Signup /> : <Login />}
          <div className="mt-6 text-center">
            <button
              className="text-sm font-bold text-[#185e33] hover:text-[#134b28] transition duration-300 underline underline-offset-4"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
