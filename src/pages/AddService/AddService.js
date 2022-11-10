import React, { useState } from 'react';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
  useTitle("Add Service");
   const [name, setName] = useState('');
   const [img, setImg] = useState('');
   const [price, setPrice] = useState('');
   const [des, setDes] = useState('');

    const handleAddService = () =>  {

      
    //  const title = name;
    //  const photoURL = photo;
    //  const  = price;
    //  const description = des
    const serviceData = {name, img, price, des};
     
    console.log(name, img, price, des);
  
      
    fetch('https://justice-server.vercel.app/services', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(serviceData)
       })
       .then(res => res.json())
       .then(data => console.log(data))

     
    }
    return (
        <div>
           <div className='lg:w-1/2 mx-auto py-5'>
           <form >
           <input type="text" placeholder="Enter title" value={name} onChange={e => setName(e.target.value)} className="input input-bordered input-primary w-full mt-5" />
            <input type="text" placeholder="Enter Photo URL" value={img} onChange={e => setImg(e.target.value)} className="input input-bordered input-primary w-full mt-5" />
            <input type="text" placeholder="Enter Your Price" value={price} onChange={e => setPrice(e.target.value)} className="input input-bordered input-primary w-full mt-5" />
            <input type="text" placeholder="Enter Details" value={des}onChange={e => setDes(e.target.value)} className="input input-bordered input-primary w-full mt-5" />
           </form>
             
           
          <button type='submit' onClick={handleAddService} className='btn btn-primary mt-5'>Submit</button>
           </div>
        </div>
    );
};

export default AddService;