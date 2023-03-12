import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
  const [state, handleSubmit] = useForm("xbjegrov");
  if (state.succeeded) {
    return <p className='text-info-emphasis text-center fs-3'>Thanks for your message!</p>;
  }
  return (
    <div className="contacts" data-aos="zoom-in" data-aos-duration="1000">
      <div className='container'>
        <div className="contact mt-5">
          <h3 className='text-light mx-auto text-center mb-4'>CONTACT</h3>
        </div>
        <div className="contact mt-2">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1> Address</h1>
              <p>New Baneshwor,
                Kathmandu</p>
              <h1>Get in Touch</h1>
              <p className='my-2 text-light'>
                <i class="fa fa-phone me-2" aria-hidden="true"></i>
                <a href="tel:9806643757">+977 9806643757</a>
              </p>
              <p className='my-2'>
                <i class="fa fa-envelope me-2" aria-hidden="true"></i>
                <a href="mailto:prateekthapa02@gmail.com" className='text-light'>prateekthapa02@gmail.com</a>
              </p>
              <div className="socials">
                <h1>Follow me</h1>
                <p className='my-2'>
                  <a href="https://www.facebook.com/pratik.thapa.94?mibextid=LQQJ4d" ><i className='fa fa-facebook me-2'></i>
                  </a>
                  <a href="https://www.instagram.com/__pra_teek/?fbclid=IwAR2ekJpQJuy7ZUipEC2AgA9io27QsFrCEU8FSiC0N1MfMtaxt8AqWlpEodg"><i className='fa fa-instagram me-2'></i> </a>
                  <a href="https://www.linkedin.com/in/prateek-thapa-7bb40a21b/"> <i className='fa fa-linkedin'></i></a>
                </p>
              </div>

            </div>
            <div className="col-lg-6 text-end">
              <form onSubmit={handleSubmit}>
                <div className="name w-100">
                  <input className='names' type="text" name="text" placeholder='Name'
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <input className='names' type="email" id="" placeholder='Email Address'
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea className="names" placeholder='Write message' rows={6}
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <br />
                  <button type="submit" disabled={state.submitting} className='px-4 py-2'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}
