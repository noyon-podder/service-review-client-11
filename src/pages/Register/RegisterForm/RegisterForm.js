import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const RegisterForm = () => {
  const handleRegisterForm = event => {
    event.preventDefault();

    const form = event.target;
    const name =form.fullName.value;
    const photo = form.displayPhoto.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  }
  return (
    <>
      <Navbar />
      <div className="bg-white max-w-6xl mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left lg:w-1/2">
              <img
                src={
                  "https://img.freepik.com/premium-vector/law-firm-common-lawyer-company-flat-design_8251-464.jpg?w=2000"
                }
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegisterForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullName"
                    className="input input-bordered"
                required  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter photo URL"
                    name="displayPhoto"
                    className="input input-bordered"
                required  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="input input-bordered"
                required  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter  password"
                    name="password"
                    className="input input-bordered"
                required  />
                  <span className="text-sm text-gray-600 mt-3">
                    Already have an account
                    <Link
                      to="/login"
                      className="text-indigo-600 text-bold ml-2"
                    >
                      Login
                    </Link>
                  </span>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-warning font-bold">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
