"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const HorizontalScroller = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const width = container.scrollWidth

        gsap.to(container, {
            x: -width / 2,
            duration: 10,
            ease: "linear",
            repeat: -1,
            repeatDelay: 0,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % (width / 2)),
            },
        })
    }, [])

    const text1 = "이건 about 페이지이구요 어쩌구 저쩌구 기이이이이이이ㅣ이이이이이이ㅣ이이이일게"
    const text2 = "이건 about 페이지이구요 어쩌구 저쩌구 기이이이이이이ㅣ이이이이이이ㅣ이이이일게"

    return (
        <div className="text-7xl overflow-hidden whitespace-nowrap ">
            <div ref={containerRef} className="flex">
                <div className="marquee">
                    <h1>{text1}</h1>
                    <h2>{text2}</h2>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroller
