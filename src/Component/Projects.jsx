import React from 'react'

export default function Projects() {
  return (
    <>
      <div className="container mb-5 project" data-aos="flip-up">
        <div className="recent">
          <div className="projects">
            <h3 className='text-light mx-auto text-center mb-4'>PROJECTS</h3>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="one">
              <img src={require('../img/building.jpeg')} alt="" className="w-100" />
              <div className="overlay">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
              </div>
              <div className="site-name w-100 position-absolute p-2">
                  <h4 className='text-white text-center'>Real-estate Website <a class="fa fa-external-link" aria-hidden="true" href='https://magenta-sable-7c0857.netlify.app' target='blank'></a> </h4>
                </div>
            </div>
            <div className="one bg-black">
            <img src={require('../img/ecommerce.jpeg')} alt="" className="w-100" />
            <div className="overlay">
              <span></span>
              <span></span>
              <span></span>
              <span></span>           
              </div>
              <div className="site-name w-100 position-absolute p-2">
                <h4 className='text-white text-center'>Ecommerce Website <a class="fa fa-external-link" aria-hidden="true" href='https://magenta-sable-7c0857.netlify.app' target='blank'></a></h4>
              </div>
            </div>
            <div className="one ">
            <img src={require('../img/ecommerce.jpeg')} alt="" className="w-100" />
            <div className="overlay">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
              <div className="site-name w-100 position-absolute p-2">
                <h4 className='text-white text-center'>Portfolio</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
