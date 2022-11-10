import React from 'react';
import Navbar from '../shared/Navbar/Navbar';

const Blog = () => {
    return (
       <div>
        <Navbar/>
         <div className='border border-gray-300 p-20'>
          <div className='mb-3'>
          <h2 className='text-orange-600 font-bold text-2xl mb-4'>1 . Difference between SQL and NoSQL</h2>
           <p className='text-gray-600 font-semibold'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          </div>
          <div className='mb-3'>
          <h2 className='text-orange-600 font-bold text-2xl mb-4'>2 . What is JWT, and how does it work?</h2>
           <p className='text-gray-600 font-semibold'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
          </div>
          <div className='mb-3'>
          <h2 className='text-orange-600 font-bold text-2xl mb-4'>3 .What is the difference between javascript and NodeJS?</h2>
           <p className='text-gray-600 font-semibold'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
          </div>
          <div className='mb-3'>
          <h2 className='text-orange-600 font-bold text-2xl mb-4'>4 . How does NodeJS handle multiple requests at the same time?</h2>
           <p className='text-gray-600 font-semibold'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
          </div>
        </div>
       </div>
    );
};

export default Blog;