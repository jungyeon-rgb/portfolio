"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const HorizontalScroller = () => {
    const containerRef = useRef(null)
    const marquee1Ref = useRef(null)
    const marquee2Ref = useRef(null)

    useEffect(() => {
        const width1 = marquee1Ref.current.scrollWidth

        // h1 애니메이션 설정
        gsap.to(marquee1Ref.current, {
            x: -width1 / 2,
            duration: 130,
            ease: "linear",
            repeat: -1,
            repeatDelay: 0,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % (width1 / 2)),
            },
        })
    }, [])

    const text1 =
        "Stay 3.42 is a private pool villa stay located near Jukdo Beach, famous for surfing, in Yangyang, Gangwon-do. It is a place to stay for a while in the midst of busy daily life."
    const text2 =
        "We hope that it will be a comfortable rest between travelers' lives. “For the momentary rest between lives” We are not perfect, but We think and work hard for your better rest."

    return (
        <div className="overflow-hidden text-9xl whitespace-nowrap font-stardom">
            <div ref={containerRef}>
                <div ref={marquee1Ref} className="flex">
                    <h1>
                        {text1}&nbsp;{text1}&nbsp;{text1}&nbsp;{text1}
                    </h1>
                </div>
                {/* <div ref={marquee2Ref} className="flex">
                    <h2 className="marquee">
                        {text2}&nbsp;{text2}&nbsp;{text2}&nbsp;{text2}
                    </h2>
                </div> */}
            </div>
        </div>
    )
}

export default HorizontalScroller
