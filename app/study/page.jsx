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
        <main className="flex-row h-screen w-screen font-pretendard overflow-hidden">
            <div className="flex ">
                {/* 탭 부분 */}
                <nav className="w-1/3 text-5xl">
                    <ul className="p-4 pr-8 relative flex-row">
                        <section>
                            <h1 className="text-5xl mt-10 mb-4 font-black">교육 {">"}</h1>
                            {tabs.slice(0, 2).map((tab) => (
                                <li key={tab.name} className="py-4">
                                    <button
                                        className={selectedTab === tab.name ? "" : ""}
                                        onClick={() => handleTabClick(tab.name)}
                                    >
                                        {tab.name}
                                        {selectedTab === tab.name && <span className="text-navy ml-2">*</span>}
                                    </button>
                                </li>
                            ))}
                        </section>
                        <section>
                            <h1 className="text-5xl mt-10 mb-4 font-black">스터디 {">"}</h1>
                            {tabs.slice(2).map((tab) => (
                                <li key={tab.name} className="py-4">
                                    <button
                                        className={selectedTab === tab.name ? "" : ""}
                                        onClick={() => handleTabClick(tab.name)}
                                    >
                                        {tab.name}
                                        {selectedTab === tab.name && <span className="text-navy ml-2">*</span>}
                                    </button>
                                </li>
                            ))}
                        </section>
                        <section>
                            <li className="mt-40 ml-40">
                                <NameLogo />
                            </li>
                        </section>
                    </ul>
                </nav>
                <section className="w-3/4 flex flex-col before:block before:w-[1px] before:h-full before:bg-white before:absolute">
                    <div className="ml-4 flex-grow overflow-y-auto">
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
            <div className="mt-10 overflow-hidden">
                <HorizontalScroller />
            </div>
        </main>
    )
}

export default Study
