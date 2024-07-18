"use client"
import { useState } from "react"

const Study = () => {
    const [selectedTab, setSelectedTab] = useState("스터디1")

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName)
    }

    return (
        <main className="flex">
            {/* 탭 부분 */}
            <section>
                <ul className="px-4 pr-8 relative flex flex-col after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-white">
                    <li>
                        <button
                            className={
                                selectedTab === "스터디1"
                                    ? "bg-yellow-400 w-1/3 text-center rounded-t-2xl bg-opacity-70"
                                    : "bg-yellow-300 w-1/3 text-center rounded-t-2xl bg-opacity-40"
                            }
                            onClick={() => handleTabClick("스터디1")}
                        >
                            스터디1
                        </button>
                    </li>
                    <li>
                        <button
                            className={
                                selectedTab === "스터디2"
                                    ? "bg-yellow-400 w-1/3 text-center rounded-t-2xl bg-opacity-70"
                                    : "bg-yellow-300 w-1/3 text-center rounded-t-2xl bg-opacity-40"
                            }
                            onClick={() => handleTabClick("스터디2")}
                        >
                            스터디2
                        </button>
                    </li>
                    <li>
                        <button
                            className={
                                selectedTab === "서울시 뉴딜"
                                    ? "bg-yellow-400 w-1/3 text-center rounded-t-2xl bg-opacity-70"
                                    : "bg-yellow-300 w-1/3 text-center rounded-t-2xl bg-opacity-40"
                            }
                            onClick={() => handleTabClick("서울시 뉴딜")}
                        >
                            서울시 뉴딜
                        </button>
                    </li>
                    <li>
                        <button
                            className={
                                selectedTab === "엘리스"
                                    ? "bg-yellow-400 w-1/3 text-center rounded-t-2xl bg-opacity-70"
                                    : "bg-yellow-300 w-1/3 text-center rounded-t-2xl bg-opacity-40"
                            }
                            onClick={() => handleTabClick("엘리스")}
                        >
                            엘리스
                        </button>
                    </li>
                </ul>
            </section>
            <section>
                <div className="ml-4">
                    <p>스터디 상세정보</p>
                    {selectedTab === "엘리스" && (
                        <section className="h-[300px] w-2/3 flex flex-col items-center justify-center m-auto">
                            <h3>등록된 코스가 없습니다.</h3>
                            <p>곧 새로운 코스가 등록될 예정입니다.</p>
                        </section>
                    )}
                    {selectedTab === "스터디1" && (
                        <section className="h-[300px] w-2/3 flex flex-col items-center justify-center m-auto">
                            <h3>스터디1 상세정보</h3>
                            <p>스터디1에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                        </section>
                    )}
                    {selectedTab === "스터디2" && (
                        <section className="h-[300px] w-2/3 flex flex-col items-center justify-center m-auto">
                            <h3>스터디2 상세정보</h3>
                            <p>스터디2에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                        </section>
                    )}
                    {selectedTab === "서울시 뉴딜" && (
                        <section className="h-[300px] w-2/3 flex flex-col items-center justify-center m-auto">
                            <h3>서울시 뉴딜 상세정보</h3>
                            <p>서울시 뉴딜에 대한 상세 내용을 여기에 추가할 수 있습니다.</p>
                        </section>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Study
