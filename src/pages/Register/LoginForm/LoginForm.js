import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import Navbar from "../../shared/Navbar/Navbar";


const LoginForm = () => {
  const {userSignIn,} = useContext(AuthProvider);
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.status?.from?.pathname || '/' 

  // setError('');
  const handelLogInForm = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(err => {
    setErr(err.message);
    })

  }

  return (
    <div>
      <Navbar/>
      <div className="hero min-h-screen bg-white max-w-6xl mx-auto">
        <div className="hero-content flex justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={'https://img.freepik.com/premium-vector/law-firm-common-lawyer-company-flat-design_8251-464.jpg?w=2000'} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit = {handelLogInForm} className="card-body">
            <span className="text-red-600 font-semibold text-center">{err}</span>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <span className="text-sm text-gray-600 mt-3">You are new <Link to="/register" className="text-indigo-600 text-semibold">Create an account</Link></span>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
