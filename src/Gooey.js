import React, { useState, useRef } from"react"

import { gsap, Quad, Quint, Elastic } from"gsap"

function Gooey({ size, color, btnSize, btnColor, distance, slice = 50, startAngle = 0, buttons }){
    const [isOpen, setIsOpen] = useState(false)

    const btnPosition = size/2 - btnSize/2

    const el = useRef()
    const q = gsap.utils.selector(el)

    const open = () => {
        setIsOpen(true)

        q(".btn").forEach((itm, i) => {
            gsap.to(itm, {
                duration: 0.7,
                delay: i*0.1,
                x: distance || btnPosition,
                ease: Quad.easeInOut
            })
        })

        q(".bounce").forEach((itm, i) => {
            var t = gsap.timeline({ delay: i*0.1 })

            t.to(itm, { duration: 0.2, scaleX: 1, scaleY: 1.5, ease: Quad.easeInOut })
             .to(itm, { duration: 0.15,           scaleY: 1.2, ease: Quad.easeInOut })
             .to(itm, { duration: 3,              scaleY: 1, ease: Elastic.easeOut.config(1.1, 0.1) })
        })

    }

    const close = () => {
        setIsOpen(false)

        q(".btn").forEach((itm, i) => {
            gsap.to(itm, {
                duration: 0.3,
                delay: i*0.1,
                x: 0,
                ease: Quad.easeInOut
            })
        })

        q(".bounce").forEach((itm, i) => {
            var t = gsap.timeline({ delay: i*0.1 })

            t.to(itm, { duration: 0.2, scaleX: 1.3, scaleY: 1, ease: Quad.easeInOut })
             .to(itm, { duration: 0.15,             scaleY: 1.5, ease: Quad.easeInOut })
             .to(itm, { duration: 3,                scaleY: 1.3, ease: Elastic.easeOut.config(1.1, 0.1) })
        })
    }

    return (
        <div style={{
            width: size,
            height: size,
            backgroundColor: color
        }}>
            <div ref={el} style={{ filter: "url(svgFilters.svg#goo)" }}>
                {buttons.map((itm, i) => (
                    <div key={i} style={{
                        width: btnSize,
                        height: btnSize,
                        position: "absolute",
                        top: btnPosition,
                        left: btnPosition,
                        transform: `rotate(${startAngle+(slice*i)}deg)`
                    }}>
                        <button className="btn" style={{
                            borderRadius: "50%",
                            width: btnSize,
                            height: btnSize,
                            border: "none",
                            outline: "none",
                            backgroundColor: btnColor,
                            position: "absolute",
                            cursor: "pointer",
                        }}>
            
                        </button>
                    </div>
                ))}

                {[0, 1, 2, 3].map((i) => (
                    <div className="bounce" key={i} style={{
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
                
                <button style={{
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
                }} onClick={() => isOpen ? close() : open() }>

                </button>
            </div>
        </div>
    )
}
export default Gooey