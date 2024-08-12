import Image from "next/image"

const DetailTypeScript = () => {
    return (
        <div className="">
            <article>
                <h2 className="my-4 text-2xl font-bold">TypeScript Study</h2>
                <div className="flex justify-between">
                    <section className="text-xl">
                        <div className="flex-row pb-4">
                            <p className="pr-2">스터디 설명</p>
                            <p>Elice IoT 1기에서 진행한 스터디입니다. </p>
                        </div>
                        <div className="flex pb-4">
                            <p className="pl-2">스터디 기간 : 4주</p>
                        </div>
                        <div className="flex pb-4 ">
                            <a
                                href="https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94"
                                className="flex pl-2"
                            >
                                <p className="mr-4">스터디 자료 보러가기 </p>
                                <Image src={"/images/velog_logo_icon.webp"} width={30} height={30} alt="velog_icon" />
                            </a>
                        </div>
                    </section>
                    <Image
                        src={"/images/effective_typescript.jpg"}
                        width={300}
                        height={600}
                        alt="effective_typescript"
                    />
                </div>
            </article>
        </div>
    )
}

export default DetailTypeScript
