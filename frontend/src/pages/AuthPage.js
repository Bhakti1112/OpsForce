import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowLeft, Recycle } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
      // Handle login logic here
    } else {
      console.log('Registration attempt:', formData);
      // Handle registration logic here
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5cabd] to-[#e8ddd4] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#436369] text-white p-12 flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#436369] to-[#3a5660] opacity-90"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#d5cabd] rounded-full flex items-center justify-center mr-4">
                <Recycle className="w-6 h-6 text-[#436369]" />
              </div>
              <h1 className="text-3xl font-bold">ReWear</h1>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              {isLogin ? 'Welcome Back!' : 'Join Our Community'}
            </h2>
            
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              {isLogin 
                ? 'Continue your sustainable fashion journey. Login to access your wardrobe exchange community.'
                : 'Start your sustainable fashion journey today. Exchange, share, and discover amazing clothing with our community.'
              }
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d5cabd] rounded-full mr-3"></div>
                <span>Swap clothes with verified users</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d5cabd] rounded-full mr-3"></div>
                <span>Earn points for every exchange</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d5cabd] rounded-full mr-3"></div>
                <span>Reduce textile waste together</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            
            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center mb-8">
              <div className="w-16 h-16 bg-[#d5cabd] rounded-full flex items-center justify-center mr-4">
                <Recycle className="w-8 h-8 text-[#436369]" />
              </div>
              <h1 className="text-2xl font-bold text-[#436369]">ReWear</h1>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Login' : 'Create Account'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Enter your credentials to access your account'
                  : 'Fill in your details to join our community'
                }
              </p>
            </div>

            {/* Auth Form */}
            <div className="space-y-6">
              
              {/* Registration Fields */}
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                        placeholder="Enter your city/location"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#436369] hover:text-[#3a5660] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Registration only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#436369] w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369] transition-colors"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#436369] hover:text-[#3a5660] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="flex justify-end">
                  <button
                    onClick={() => console.log('Forgot password clicked')}
                    className="text-[#436369] hover:text-[#3a5660] text-sm font-medium transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#436369] text-white py-3 rounded-lg font-medium hover:bg-[#3a5660] transition-colors focus:ring-2 focus:ring-[#436369] focus:ring-offset-2"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#d5cabd]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="w-full inline-flex justify-center py-3 px-4 border border-[#d5cabd] rounded-lg bg-white text-gray-700 hover:bg-[#d5cabd] hover:text-[#436369] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2">Google</span>
                  </button>

                  <button
                    onClick={() => handleSocialLogin('facebook')}
                    className="w-full inline-flex justify-center py-3 px-4 border border-[#d5cabd] rounded-lg bg-white text-gray-700 hover:bg-[#d5cabd] hover:text-[#436369] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Toggle between Login/Register */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-[#436369] hover:text-[#3a5660] font-medium transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;