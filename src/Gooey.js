import React, { useState, useRef, useEffect } from"react"

import { gsap, Quad, Quint, Elastic } from"gsap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Gooey({ size, color, btnSize, btnColor, distance, slice = 50, startAngle = 0, buttons }){
    const [isOpen, setIsOpen] = useState(false)

    const btnPosition = size/2 - btnSize/2

    const el = useRef()
    const q = gsap.utils.selector(el)

    const toggle = () => {

      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        rotate: isOpen ? 45 : 0,
        ease: Quint.easeIn
      })

      q(".btn").forEach((itm, i) => {
        gsap.to(itm, {
            duration: 0.7,
            delay: i*0.1,
            force3D: true,
            x: isOpen ? distance || btnPosition : 0,
            ease: Quad.easeInOut
        })
      })

      q(".bounce").forEach((itm, i) => {
          var t = gsap.timeline({ delay: i*0.1 })

          t.to(itm, { duration: 0.2, scaleX: isOpen ? 1 : 1.3, scaleY: isOpen ? 1.5 : 1,   ease: Quad.easeInOut })
          .to(itm, { duration: 0.15,                           scaleY: isOpen ? 1.2 : 1.5, ease: Quad.easeInOut })
          .to(itm, { duration: 3,                              scaleY: isOpen ? 1 : 1.3,   ease: Elastic.easeOut.config(1.1, 0.2) })
      })

    }

    useEffect(() => {
      toggle()
    }, [isOpen])

    const mouseUp = () => {
      gsap.to(q(".icon")[0], {
        duration: 0.3,
        force3D: true,
        scale: 1,
        ease: Quint.easeOut
      })
    }

    const mouseDown = () => {
      setIsOpen((prev) => !prev)

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
                            <FontAwesomeIcon icon={itm.icon} size="lg" color="#e5d2b8" style={{ transform: `rotate(${-startAngle-(slice*i)}deg)` }}/>
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
                  onMouseDown={mouseDown}
                >
                    <FontAwesomeIcon className="icon" icon={faPlus} size="2x" color="#e5d2b8" />
                </button>
            </div>
        </div>
    )
}
export default Gooey