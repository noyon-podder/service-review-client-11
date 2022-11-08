import React from "react";
import { FaMapMarkerAlt , FaPhoneAlt, FaEnvelope} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="hero  max-w-6xl mx-auto">
        <div className="hero-content grid grid-cols-2 w-full">
          <div className="text-center lg:text-left w-2/4">
            <h1 className="text-3xl font-bold text-orange-600">Contact us</h1>
           <address className="mt-10">
            <div className="flex gap-x-10">
            <p className="flex items-center"><FaMapMarkerAlt className="text-orange-600"/> <b className="ml-3">Address :</b></p>
            <span>Kushtia, Bangladesh</span>
            </div>
            <div className="flex gap-x-10 my-8">
            <p className="flex items-center"><FaPhoneAlt className="text-orange-600"/> <b className="ml-3">Phone :</b></p>
            <span>017******95</span>
            </div>
            <div className="flex gap-x-10">
            <p className="flex items-center"><FaEnvelope className="text-orange-600"/> <b className="ml-3">Email :</b></p>
            <span>web.pr@gmail.com</span>
            </div>
           </address>
          </div>
          <div className="card w-full">
            <div className="card-body">
              <div className="form-control w-full">
              <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
              <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered my-6"
                />
              </div>
              <div className="form-control">
              <textarea name="" id="" cols="30" rows="10" className="input input-bordered h-24" placeholder="Enter Your Message"></textarea>
              </div>
            
              <div className="form-control mt-6">
                <button className="btn btn-warning">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
