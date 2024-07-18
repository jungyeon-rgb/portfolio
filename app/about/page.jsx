import Image from "next/image"
import HorizontalScroller from "./@components/HorizontalScroller"

const About = () => {
    return (
        <section className="font-stardom">
            <div className="pt-14">
                <HorizontalScroller />
            </div>
            <div className="flex">
                <Image src="/images/GitHub_qr.svg" width={200} height={200} alt="GitHub_QR" className="m-10" />
                <Image src="/images/velog_qr.svg" width={200} height={200} alt="velog_QR" className="m-10" />
            </div>
        </section>
    )
}

export default About
