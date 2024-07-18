"use client"
import { useState } from "react"
import DetailNewDeal from "./@components/DetailNewDeal"
import HorizontalScroller from "../about/@components/HorizontalScroller"
import MenuButton from "../@components/MenuButton"
import NameLogo from "../@components/NameLogo"

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
                        <li className="py-4">
                            <button
                                className={selectedTab === "스터디1" ? "" : ""}
                                onClick={() => handleTabClick("스터디1")}
                            >
                                스터디1
                                {selectedTab === "스터디1" && <span className=" text-navy ml-2">*</span>}
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
                        <li className="py-4">
                            <button
                                className={selectedTab === "서울시 뉴딜" ? "" : ""}
                                onClick={() => handleTabClick("서울시 뉴딜")}
                            >
                                서울시 뉴딜{selectedTab === "서울시 뉴딜" && <span className="text-navy ml-2">*</span>}
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
                        <li className="mt-80 ml-10">
                            <NameLogo />
                        </li>
                    </ul>
                </nav>
                <section className="w-3/4">
                    <div className="ml-4">
                        {selectedTab === "엘리스" && (
                            <article className="flex flex-col items-center justify-center mx-10 overflow-y-auto h-[850px]">
                                <h3>등록된 코스가 없습니다.</h3>
                                <p>곧 새로운 코스가 등록될 예정입니다.</p>
                            </article>
                        )}
                        {selectedTab === "스터디1" && (
                            <article className="flex flex-col items-center justify-center mx-10 overflow-y-auto h-[850px]">
                                <h3>스터디1 상세정보</h3>
                                <p>스터디1에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                            </article>
                        )}
                        {selectedTab === "스터디2" && (
                            <article className="flex flex-col items-center justify-center mx-10 overflow-y-auto h-[850px]">
                                <h3>스터디2 상세정보</h3>
                                <p>스터디2에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                            </article>
                        )}
                        {selectedTab === "서울시 뉴딜" && (
                            <article className="flex flex-col items-center justify-center mx-10 overflow-y-auto h-[850px]">
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
