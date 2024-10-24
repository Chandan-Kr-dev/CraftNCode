import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen register-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form className="max-w-md w-full space-y-8 register-login p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl my-2 flex justify-center items-center py-2 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">Register</h2>
          <p className="mt-2 text-sm text-gray-400">
            Signup now and get full access to our app.
          </p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`peer w-full form-border    px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="First name"
            />
            <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 ">
              Firstname
            </label>
            {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`peer w-full border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Last name"
            />
            <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
              Lastname
            </label>
            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`peer w-full  form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Email"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 ">
            Email
          </label>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`peer w-full form-border px-0 py-2 form-border placeholder:text-transparent focus:border-blue-600 focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 form-border">
            Password
          </label>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`peer form-border w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-blue-600 focus:outline-none ${errors.confirmPassword ? 'border-red-500' : ''}`}
            placeholder="Confirm password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
            Confirm password
          </label>
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full transform rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;