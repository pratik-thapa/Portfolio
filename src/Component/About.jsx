import React from 'react'
import CV from '../CV.pdf'
export default function About() {
  return (
    <>
      <div className="container about">
        <h3 className='text-light mx-auto text-center'>ABOUT ME</h3>
        <div className="row mt-4">
          <div className="col-lg-8 p-3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-once="true">
            <h2 className='text-light fs-2'>I'm <span>Prateek Thapa</span>, a Front-end Developer</h2>
            <p className='text-light w-100'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
              Delivering work within time and budget which meets client’s requirements is our moto.</p>
          </div>

          <div className="col-lg-4 text-light info p-3"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" data-aos-once="true">
            <h5> <strong>Name</strong>:Prateek Thapa </h5>
            <h5> <strong>Email</strong> <span>:prateekthapa02@gmail.com</span> </h5>
            <h5> <strong>Age</strong>:23</h5>
            <h5 className='mb-3'> <strong>Based in:</strong>Kathmandu</h5>
            <a  className='p-2' href={CV} download>Download CV</a>
          </div>
        </div>
        <div className="geo">
        <img src={require('../img/polo.png')} alt="" />
        </div>
      </div>

    </>
  )
}
