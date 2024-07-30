"use client"
import { useState } from "react"
import DetailNewDeal from "./_components/contents/DetailNewDeal"
import HorizontalScroller from "../about/@components/HorizontalScroller"
import MenuButton from "../_components/MenuButton"
import NameLogo from "../_components/NameLogo"
import DetailTypeScript from "./_components/contents/DetailTypeScript"
import DetailElice from "./_components/contents/DetailElice"
import StudyEtc from "./_components/contents/StudyEtc"
import MenuList from "../_components/MenuList"

const Study = () => {
    const [selectedTab, setSelectedTab] = useState("study1")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName)
    }

    // 탭 데이터 정의
    const tabs = [
        { name: "서울시 뉴딜", component: <DetailNewDeal /> },
        { name: "엘리스", content: <DetailElice /> },
        { name: "타입스크립트 스터디", component: <DetailTypeScript /> },
        {
            name: "스터디2",
            component: <StudyEtc />,
        },
    ]

    return (
        <main className="flex-row items-center justify-center w-full font-pretendard">
            <div className="flex">
                {/* 탭 부분 */}
                <nav className="w-1/3 p-10 text-5xl">
                    <ul className="pr-8">
                        <section>
                            <h1 className="mt-10 mb-4 font-black ">교육 {">"}</h1>
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
                <section className="text-xl w-2/3 mt-4 h-[750px] overflow-y-auto before:w-[1px] before:h-[750px] before:bg-white before:absolute">
                    <div className="flex-grow my-10 ">
                        {tabs.map(
                            (tab) =>
                                selectedTab === tab.name && (
                                    <article key={tab.name} className="mx-10">
                                        {tab.component}
                                    </article>
                                ),
                        )}
                    </div>
                </section>
            </div>

            <div className="flex-row h-full">
                <HorizontalScroller />
                <p className="mx-10">© jungyeon all rights reserved.</p>
            </div>
            <MenuButton onClick={toggleMenu} />
            <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </main>
    )
}

export default Study
