import React from 'react'

export default function Banner() {
    return (
        <>
        <div className="banner">
            {/* <img src={require('../img/patch.png')} alt=""  className='patch'/> */}
            <div className="container">
                <div className="row my-5 align-items-center">
                    <div className="col-lg-6 effect">
                        <h1 className='text-light mt-5'>Hello! <span> Prateek </span>here..</h1>
                        <h2 className='text-light'>& I am a web developer.</h2>
                        <div className="bubble">
                            <div className="image"></div>
                            <div className="image1"></div>
                            <div className="image2"></div>
                            <div className="image3"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="box  position-relative  ">
                            <img src={require('../img/me.jpg')} className="w-100 position-absolute" alt="" />
                            <div className="box1 position-absolute">
                            </div>
                            <div className="box2 position-absolute">
                            </div>
                            <div className="box3 position-absolute">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="polo">
                    <img src={require('../img/polo.png')} alt="" />
                </div>

            </div>
            </div>



        </>
    )
}
