import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
  useTitle("Add Service");

    const handleAddServiceForm = (event) =>  {
  event.preventDefault();

  const form = event.target;
  const name = form.title.value;
  const img = form.img.value;
  const price = form.price.value;
  const des = form.details.value;    
const date = new Date();

console.log(name, img, price, des, date)
    const serviceData = {
        name, 
        image: img, 
        price: parseFloat(price),
        des,
        date
    };
     
    console.log(serviceData);
  
     fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(serviceData)
     }) 
     .then(res => res.json())
     .then(data => {
        if(data.acknowledged){
            toast.success("Service added successfully")
            form.reset();
        }
     })
 }


    return (
        <div>

            <h3 className='text-4xl text-orange-600 my-10 font-bold text-center'>Add Service: </h3>
           <div className='lg:w-1/2 mx-auto py-5'>
           <form onSubmit={handleAddServiceForm}>
           <input type="text" placeholder="Enter title" name='title' className="input input-bordered input-primary w-full mt-5" />


            <input type="text" placeholder="Enter Photo URL" name='img' className="input input-bordered input-primary w-full mt-5" />


            <input type="text" placeholder="Enter Your Price" name='price' className="input input-bordered input-primary w-full mt-5" />


            <input type="text" placeholder="Enter Details" name='details' className="input input-bordered input-primary w-full mt-5" />

         
             
           
          <button type='submit' className='btn btn-primary mt-5'>Submit</button>
          </form>
           </div>
        </div>
    );
};

export default AddService;