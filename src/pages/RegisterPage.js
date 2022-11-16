import React from "react";
import Register from "../components/Register"

function RegisterPage() {
   return (
      <section style={{ backgroundColor: "#eee" }}>
         <div className='container'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
               <div className='col-lg-12 col-xl-11'>
                  <div className='card text-black' style={{ borderRadius: "25px" }}>
                     <div className='card-body p-md-5'>
                        <div className='row justify-content-center'>
                           <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                           <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                              Sign up
                           </p>
                           <Register></Register>
                           </div>
                           <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                              <img style={{height: '420px'}}
                              src='https://www.peppercontent.io/_next/image/?url=https%3A%2F%2Fpepperyourcontent.com%2Fwp-content%2Fuploads%2F2022%2F04%2FHow-to-Write-a-Travel-Blog.png&w=1536&q=75'
                              className='img-fluid'
                              alt='Sample'
                           />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default RegisterPage;