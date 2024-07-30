"use client"
import { useState } from "react"
import DetailNewDeal from "./_components/DetailNewDeal"
import HorizontalScroller from "../about/@components/HorizontalScroller"
import MenuButton from "../_components/MenuButton"
import NameLogo from "../_components/NameLogo"
import DetailTypeScript from "./_components/DetailTypeScript"

const Study = () => {
    const [selectedTab, setSelectedTab] = useState("study1")

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName)
    }

    // 탭 데이터 정의
    const tabs = [
        { name: "서울시 뉴딜", component: <DetailNewDeal /> },
        { name: "엘리스", content: <h3>등록된 코스가 없습니다.</h3> },
        { name: "타입스크립트 스터디", component: <DetailTypeScript /> },
        {
            name: "스터디2",
            content: (
                <>
                    <h3>스터디2 상세정보</h3>
                    <p>스터디2에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                </>
            ),
        },
    ]

    return (
        <main className="flex-row items-center justify-center w-full font-pretendard">
            <div className="flex">
                {/* 탭 부분 */}
                <nav className="text-5xl">
                    <ul className="p-4 pr-8">
                        <section>
                            <h1 className="mt-10 mb-4 font-black">교육 {">"}</h1>
                            {tabs.slice(0, 2).map((tab) => (
                                <li key={tab.name} className="py-2">
                                    <button
                                        className={selectedTab === tab.name ? "" : ""}
                                        onClick={() => handleTabClick(tab.name)}
                                    >
                                        {tab.name}
                                        {selectedTab === tab.name && <span className="ml-2 text-navy">*</span>}
                                    </button>
                                </li>
                            ))}
                        </section>
                        <section>
                            <h1 className="mt-20 mb-4 font-black">스터디 {">"}</h1>
                            {tabs.slice(2).map((tab) => (
                                <li key={tab.name} className="py-2">
                                    <button
                                        className={selectedTab === tab.name ? "" : ""}
                                        onClick={() => handleTabClick(tab.name)}
                                    >
                                        {tab.name}
                                        {selectedTab === tab.name && <span className="ml-2 text-navy">*</span>}
                                    </button>
                                </li>
                            ))}
                        </section>
                    </ul>
                    {/* <section className="flex items-center justify-center m-28">
                            <NameLogo />
                        </section> */}
                </nav>
                {/* 탭 내용 */}
                <section className="mt-4 h-[800px] overflow-y-auto before:w-[1px] before:h-[800px] before:bg-white before:absolute">
                    <div className="flex-grow my-10 ">
                        {tabs.map(
                            (tab) =>
                                selectedTab === tab.name && (
                                    <article key={tab.name} className="mx-10">
                                        {tab.component || tab.content}
                                    </article>
                                ),
                        )}
                    </div>
                </section>
            </div>
            <div className="h-fulls">
                <HorizontalScroller />
            </div>
        </main>
    )
}

export default Study
