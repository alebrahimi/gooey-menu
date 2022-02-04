import React, { useState, useRef, useEffect } from"react"

import { gsap, Quad, Quint, Elastic } from"gsap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Gooey({ size, color, btnSize, btnColor, distance, slice = 50, startAngle = 0, buttons }){
    //const [isOpen, setIsOpen] = useState(false)

    var isOpen = false

    const btnPosition = size/2 - btnSize/2

    const el = useRef()
    const q = gsap.utils.selector(el)

    const open = () => {

      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        rotate: 45,
        ease: Quint.easeIn
      })

      q(".btn").forEach((itm, i) => {
        gsap.to(itm, {
            duration: 0.7,
            delay: i*0.08,
            force3D: true,
            x: distance || btnPosition,
            ease: Quint.easeInOut,
        })
      })

      q(".bounce").forEach((itm, i) => {

          var t = gsap.timeline({ delay: i*0.08 })

          t.to(itm, { duration: 0.2, scaleX: 1, scaleY: 1.5, ease: Quad.easeInOut })
           .to(itm, { duration: 0.15,           scaleY: 1.2, ease: Quad.easeInOut })
           .to(itm, { duration: 3,              scaleY: 1 ,  ease: Elastic.easeOut.config(1.1, 0.2) })
      })

    }

    const close = () => {

      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        rotate: 0,
        ease: Quint.easeIn
      })

      q(".btn").forEach((itm, i) => {
        gsap.to(itm, {
            duration: 0.3,
            delay: i*0.08,
            force3D: true,
            x: 0,
            ease: Quint.easeIn,
        })
      })

      q(".bounce").forEach((itm, i) => {

          var t = gsap.timeline({ delay: i*0.08 })

          t.to(itm, { duration: 0.2, scaleX: 1.3, scaleY: 1,   ease: Quad.easeInOut })
           .to(itm, { duration: 0.15,             scaleY: 1.5, ease: Quad.easeInOut })
           .to(itm, { duration: 3,                scaleY: 1.3, ease: Elastic.easeOut.config(1.1, 0.2) })
      })

    }

    const mouseUp = () => {
      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        scale: 1,
        ease: Quint.easeOut
      })
    }

    const mouseDown = (e) => {
      //setIsOpen((prev) => !prev)
      isOpen = !isOpen

      isOpen ? open() : close()

      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        scale: 0.6,
        ease: Quint.easeOut
      })
    }

    return (
        <div 
          style={{
            width: size,
            height: size,
            backgroundColor: color
        }}>
            <div ref={el} style={{ filter: "url(svgFilters.svg#shadowed-goo)" }}>
                {buttons.map((itm, i) => (
                    <div 
                      key={i} 
                      style={{
                        width: btnSize,
                        height: btnSize,
                        position: "absolute",
                        top: btnPosition,
                        left: btnPosition,
                        transform: `rotate(${startAngle+(slice*i)}deg)`
                    }}>
                        <button 
                          className="btn" 
                          style={{
                            borderRadius: "50%",
                            width: btnSize,
                            height: btnSize,
                            border: "none",
                            outline: "none",
                            backgroundColor: btnColor,
                            position: "absolute",
                            cursor: "pointer",
                        }}>
                            <FontAwesomeIcon icon={itm.icon} size="lg" color="#e5d2b8" style={{ transform: `rotate(${-(startAngle+(slice*i))}deg)` }}/>
                        </button>
                    </div>
                ))}

                {[0, 1, 2, 3].map((i) => (
                    <div 
                      className="bounce" 
                      key={i} 
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        width: btnSize,
                        height: btnSize,
                        backgroundColor: btnColor,
                        top: btnPosition,
                        left: btnPosition,
                        transform: `rotate(${45*i}deg) scaleX(1.3) scaleY(1.3)`
                    }}/>
                ))}
                
                <button 
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: btnSize,
                    height: btnSize,
                    border: "none",
                    outline: "none",
                    backgroundColor: btnColor,
                    position: "absolute",
                    top: btnPosition,
                    left: btnPosition
                  }}
                  //onClick={() => isOpen ? close() : open() }
                  onMouseUp={mouseUp}
                  onMouseLeave={mouseUp}
                  onMouseDown={mouseDown}
                >
                    <FontAwesomeIcon className="icon" icon={faPlus} size="2x" color={isOpen ? "red" : "#e5d2b8"} />
                </button>
            </div>
        </div>
    )
}
export default Gooey