"use client";
import { useState } from "react";
import studyListData from "../data/studyListData";
import HorizontalScroller from "../about/@components/HorizontalScroller";
import MenuButton from "../_components/MenuButton";
import MenuList from "../_components/MenuList";

const Study = () => {
  const [selectedTab, setSelectedTab] = useState(studyListData[0].name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <main className="flex-row items-center justify-center w-full font-pretendard">
      <div className="flex px-20">
        {/* 탭 부분 */}
        <nav className="w-1/2 p-10 text-5xl">
          <ul className="pr-8">
            <section>
              <h1 className="mt-10 mb-4 font-black">교육 {">"}</h1>{" "}
              {/* 제목을 더 진하게 */}
              {studyListData.slice(0, 3).map((tab) => (
                <li key={tab.name} className="py-2">
                  <button
                    className={`${
                      selectedTab === tab.name ? "font-black" : "font-semibold"
                    }`}
                    onClick={() => handleTabClick(tab.name)}
                  >
                    {tab.name}
                    {selectedTab === tab.name && (
                      <span className="text-navy">*</span>
                    )}
                  </button>
                </li>
              ))}
            </section>
            <section>
              <h1 className="mt-20 mb-4 font-black">기타 {">"}</h1>{" "}
              {/* 소제목을 더 진하게 */}
              {studyListData.slice(3, 6).map((tab) => (
                <li key={tab.name} className="py-2">
                  <button
                    className={`${
                      selectedTab === tab.name ? "font-black" : "font-semibold"
                    }`}
                    onClick={() => handleTabClick(tab.name)}
                  >
                    {tab.name}
                    {selectedTab === tab.name && (
                      <span className="ml-2 text-navy">*</span>
                    )}
                  </button>
                </li>
              ))}
            </section>
          </ul>
        </nav>
        {/* 탭 내용 */}
        <section className="text-xl w-1/2 mt-4 h-[750px] overflow-y-auto relative">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white"></div>
          <div className="flex-grow my-10">
            {studyListData.map(
              (tab) =>
                selectedTab === tab.name && (
                  <article
                    key={tab.name}
                    className="mx-10"
                    style={{ wordWrap: "break-word" }} // 텍스트가 잘리지 않도록 처리
                  >
                    <p>{tab.content}</p>
                  </article>
                )
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
  );
};

export default Study;
