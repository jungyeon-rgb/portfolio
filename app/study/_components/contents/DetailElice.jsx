import Image from "next/image"

const DetailElice = () => {
    return (
        <article>
            <h2 className="my-4 text-2xl font-bold">TypeScript Study</h2>
            <section className="text-xl">
                <div className="flex pb-4 ">
                    <Image src={"/images/cloud.svg"} width={30} height={30} alt="cloudicon" />
                    <div className="flex-row">
                        <p className="pl-2">스터디 설명</p>
                        <p>오엫 </p>
                    </div>
                </div>
                <div className="flex pb-4 ">
                    <Image src={"/images/cloud.svg"} width={30} height={30} alt="cloudicon" />
                    <p className="pl-2">스터디 기간 : 4주</p>
                </div>
                <div className="flex pb-4 ">
                    <Image src={"/images/cloud.svg"} width={30} height={30} alt="cloudicon" />
                    <a
                        href="https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94"
                        className="pl-2"
                    >
                        스터디 자료 보러가기
                    </a>
                </div>
            </section>
        </article>
    )
}

export default DetailElice
