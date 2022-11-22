import React from "react";
import toast from "react-hot-toast";

const Modal = ({ modalData, setModalData }) => {

const {_id, email, author, message} = modalData;

  const handleSubmit  = (event) => {
    event.preventDefault();

    const updateMessage = event.target.message.value;
   
    
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({message: updateMessage})
    })
    .then( res => res.json())
    .then(data => {
      
      if(data.acknowledged){
        toast.success('Message Update SuccessFully')
        alert('message update successfully')
      }
    })

  };

  return (
    <div>
      <form onSubmit ={handleSubmit}>
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
              type="email"
              placeholder="email"
              className="input input-bordered w-full mt-5"
              defaultValue={email}
              name="name"
              disabled
            />
            <input
              type="text"
              className="input input-bordered w-full mt-5"
              defaultValue={author}
              name="name"
              disabled
            />
            <input
              type="text"
              defaultValue={message}
              className="input input-bordered w-full mt-5"
              name="message"
            />

            <button
              
              className="btn btn-md btn-warning mt-5"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
