import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function ScrollTop() {
    const [Top, setTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setTop(true)
            }
            else {
                setTop(false)
            }
        })
    },
 [])
  const Scrollup=()=>{
    window.scrollTo({
        top:0,
        behaviour:"smooth",
    })
  }
   
    return (
      <>
      {setTop &&(
      <button type='btn' onClick={Scrollup} style={{right:"20px", position:"fixed", bottom:"50px", background:"none", border:"none", transform:"rotate(-45deg)"}}> <i class="fa fa-rocket fs-1 text-light" aria-hidden="true"></i></button>
      
      )}
      
      </>
    )
}
