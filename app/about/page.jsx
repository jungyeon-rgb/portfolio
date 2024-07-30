import Image from "next/image"
import HorizontalScroller from "./@components/HorizontalScroller"
import MenuButton from "../_components/MenuButton"

const About = () => {
    return (
        <section>
            <div className="pt-14">
                <HorizontalScroller />
            </div>
            <div className="flex">
                <Image src="/images/GitHub_qr.svg" width={200} height={200} alt="GitHub_QR" className="m-10" />
                <Image src="/images/velog_qr.svg" width={200} height={200} alt="velog_QR" className="m-10" />
            </div>
            <div className="flex-row p-4 text-xl">
                <p className="w-fit bg-blue-400 py-[0.25rm] px-[1rem] rounded-3xl">about 페이지입니다.</p>
                <p className="w-fit bg-blue-400 py-[0.25rm] px-[1rem] rounded-3xl">
                    이 곳에는 사용할 수 있는 스텍과 함께 간단한 설명이 첨부됩니다.
                </p>
            </div>
            <div>
                <MenuButton />
            </div>
        </section>
    )
}

export default About
