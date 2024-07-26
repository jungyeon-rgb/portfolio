"use client"
import { useState } from "react"
import DetailNewDeal from "./_components/DetailNewDeal"
import HorizontalScroller from "../about/@components/HorizontalScroller"
import MenuButton from "../@components/MenuButton"
import NameLogo from "../_components/NameLogo"
import DetailTypeScript from "./_components/DetailTypeScript"

const Study = () => {
    const [selectedTab, setSelectedTab] = useState("study1")

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName)
    }

    return (
        <main className="flex-row font-pretendard">
            <div className="flex p-16">
                {/* 탭 부분 */}
                <nav className="w-1/4 text-5xl">
                    <ul className="p-4 pr-8 relative flex-row after:absolute after:top-0 after:right-0 after:h-[900px] after:w-[1px] after:bg-white">
                        <section>
                            <h1 className="text-5xl mt-10 mb-4 font-black">교육 {">"}</h1>
                            <li className="py-4">
                                <button
                                    className={selectedTab === "서울시 뉴딜" ? "" : ""}
                                    onClick={() => handleTabClick("서울시 뉴딜")}
                                >
                                    서울시 뉴딜
                                    {selectedTab === "서울시 뉴딜" && <span className="text-navy ml-2">*</span>}
                                </button>
                            </li>
                            <li className="py-4">
                                <button
                                    className={selectedTab === "엘리스" ? "" : ""}
                                    onClick={() => handleTabClick("엘리스")}
                                >
                                    엘리스{selectedTab === "엘리스" && <span className="text-navy ml-2">*</span>}
                                </button>
                            </li>
                        </section>
                        <section>
                            <h1 className="text-5xl mt-10 mb-4 font-black">스터디 {">"}</h1>
                            <li className="py-4">
                                <button
                                    className={selectedTab === "TypeScript Study" ? "" : ""}
                                    onClick={() => handleTabClick("TypeScript Study")}
                                >
                                    타입스크립트 스터디
                                    {selectedTab === "TypeScript Study" && <span className=" text-navy ml-2">*</span>}
                                </button>
                            </li>
                            <li className="py-4">
                                <button
                                    className={selectedTab === "스터디2" ? "" : ""}
                                    onClick={() => handleTabClick("스터디2")}
                                >
                                    스터디2{selectedTab === "스터디2" && <span className="text-navy ml-2">*</span>}
                                </button>
                            </li>
                        </section>
                        <li className="mt-40 ml-40">
                            <NameLogo />
                        </li>
                    </ul>
                </nav>
                <section className="w-3/4">
                    <div className="ml-4">
                        {selectedTab === "엘리스" && (
                            <article className="mx-10 overflow-y-auto h-[850px]">
                                <h3>등록된 코스가 없습니다.</h3>
                                <p>곧 새로운 코스가 등록될 예정입니다.</p>
                            </article>
                        )}
                        {selectedTab === "TypeScript Study" && (
                            <article className="mx-10 overflow-y-auto h-[850px]">
                                <DetailTypeScript />
                            </article>
                        )}
                        {selectedTab === "스터디2" && (
                            <article className="flex flex-col items-center justify-center mx-10 overflow-y-auto h-[850px]">
                                <h3>스터디2 상세정보</h3>
                                <p>스터디2에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                            </article>
                        )}
                        {selectedTab === "서울시 뉴딜" && (
                            <article className="mx-10 overflow-y-auto h-[850px]">
                                <DetailNewDeal />
                            </article>
                        )}
                    </div>
                </section>
            </div>
            <div className="mt-10">
                <HorizontalScroller />
            </div>
        </main>
    )
}

export default Study
