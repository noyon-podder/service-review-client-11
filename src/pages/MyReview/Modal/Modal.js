import React from "react";

const Modal = ({review}) => {
  return (
    <div>
      

      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full mt-5"
                  defaultValue={review?.author}
                  name="name"
                  disabled
                />
          <input
                  type="text"
                  defaultValue={review.message}
                  className="input input-bordered w-full mt-5"
                  name="message"
                />
        </div>
      </div>
    </div>
  );
};

export default Modal;
