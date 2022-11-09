import React from "react";
import { Link } from "react-router-dom";
// import loginImage from "../../../images/login/login.jpg";

const LoginForm = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white max-w-6xl mx-auto">
        <div className="hero-content flex justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={'https://img.freepik.com/premium-vector/law-firm-common-lawyer-company-flat-design_8251-464.jpg?w=2000'} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <span className="text-sm text-gray-600 mt-3">You are new <Link to="/register" className="text-indigo-600 text-semibold">Create an account</Link></span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning font-bold">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
