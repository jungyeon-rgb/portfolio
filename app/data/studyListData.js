// src/data/studyListData.js

import Image from "next/image";
import Link from "next/link";

const studyListData = [
  {
    name: "서울시 뉴딜 웹 풀스택 개발자",
    title: "서울시 뉴딜 웹 풀스택 개발자",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">
          서울시 뉴딜 웹 풀스택 개발자 실무과정
        </p>
        <div className="text-xl">
          <ul className="py-8">
            <li className="text-2xl font-semibold mb-2">기간</li>
            <li>2024.07.01 ~ 2024.08.16</li>
          </ul>
          <ul className="pb-4">
            <li className="text-2xl font-semibold mb-2">수업 내용</li>
            <li className="mb-1">
              서울시에서 주관하는 뉴딜 사업의 일환으로, 풀스택 웹 개발자를
              양성하는 과정입니다.
            </li>
            <li>
              프론트엔드와 백엔드 개발을 아우르는 종합적인 교육을 통해 실무
              역량을 키우는 것을 목표로 합니다.
            </li>
          </ul>
        </div>
      </div>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "https://github.com/jungyeon-rgb/portfolio", // 관련 GitHub 링크
  },
  {
    name: "엘리스 IoT 트랙",
    title: "엘리스 IoT 트랙",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">엘리스 IoT 트랙 1기 수료</p>
        <div className="text-xl">
          <ul className="py-8">
            <li className="text-2xl font-semibold mb-2">기간</li>
            <li>2022.12 ~ 2024.05 (6개월)</li>
          </ul>

          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">학습 내용</li>
            <li>
              HTML/CSS: 웹 페이지의 구조와 스타일링을 위한 HTML5, CSS3 기본 및
              고급 기능 학습
            </li>
            <li>
              JavaScript: ES6+ 문법과 비동기 프로그래밍(Async/Await), DOM 조작
              등의 핵심 JavaScript 개념 이해
            </li>
            <li>
              React.js: 컴포넌트 기반의 UI 라이브러리인 React를 활용한
              SPA(Single Page Application) 개발
            </li>
            <li>
              상태 관리: Redux, Context API를 사용한 상태 관리 및 복잡한 상태
              관리 패턴 학습
            </li>
            <li>
              API 연동: RESTful API와의 연동, 비동기 데이터 처리 및 Axios 활용법
            </li>
            <li>
              테스트: Jest와 React Testing Library를 활용한 유닛 테스트 및
              컴포넌트 테스트
            </li>
            <li>
              협업 도구: Git, GitHub를 통한 협업 프로젝트 관리 및 코드 리뷰 실습
            </li>
          </ul>

          <ul>
            <li className="text-2xl font-semibold mb-2">진행한 프로젝트</li>
            <li>
              <Link
                href={"https://github.com/jungyeon-rgb/SmartBasilFarm"}
                className="underline"
              >
                https://github.com/jungyeon-rgb/SmartBasilFarm
              </Link>
            </li>
          </ul>
        </div>
      </div>
    ),
    images: ["/images/cloud.svg"], // 이미지 예시
    velog:
      "https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94",
    github: "", // 관련 GitHub 링크
  },
  {
    name: "타입스크립트 스터디",
    title: "타입스크립트 스터디",
    content: (
      <div className="flex justify-between items-start">
        <div>
          <h2 className="my-4 text-3xl font-bold">타입스크립트 스터디</h2>
          <Image
            src="/images/effective_typescript.jpg"
            width={200}
            height={400}
            alt="effective_typescript"
            className="my-4"
          />
          <div className="flex justify-between ">
            <section className="text-xl w-full">
              <div className="flex-row pb-8">
                <p className="pr-2 text-2xl font-semibold">스터디 설명</p>
                <p>
                  자바스크립트의 단점을 보완하고, 대규모 애플리케이션 개발 시
                  타입 안정성을 보장하는 타입스크립트를 깊이 있게 학습하는 것을
                  목표로 했습니다.
                </p>
              </div>
              <ul className="pb-8">
                <li className="text-2xl font-semibold">스터디 기간</li>
                <li>2023.03 ~ 2023.04 (4주)</li>
              </ul>
              <ul className="pb-8">
                <li className="text-2xl font-semibold mb-2">주요 학습 내용</li>
                <li>
                  타입 시스템:타입스크립트의 기본적인 타입 시스템 이해 및 활용,
                  타입 추론과 타입 강제
                </li>
                <li>
                  고급 타입:인터페이스, 제네릭(Generic), 유니온 타입(Union Type)
                  및 인터섹션 타입(Intersection Type) 학습
                </li>
                <li>
                  타입 선언:타입 선언 파일(.d.ts)을 작성하고, 외부 자바스크립트
                  라이브러리를 타입스크립트에서 사용하는 방법
                </li>
                <li>
                  ES6+ 문법과의 통합: 타입스크립트에서 최신 자바스크립트(ES6+)
                  문법을 사용하는 방법과 그 이점
                </li>
                <li>
                  리팩토링:기존 자바스크립트 코드베이스를 타입스크립트로
                  리팩토링하는 과정에서의 고려사항과 실습
                </li>
              </ul>
              <ul className="pb-8">
                <li className="text-2xl font-semibold mb-2">스터디 성과</li>
                <li>
                  타입스크립트를 적용한 코드베이스의 안정성과 유지보수성을 크게
                  향상시킬 수 있었습니다. 또한, 팀원 간의 코드 협업 시 타입
                  정의를 통해 의사소통이 원활해졌으며, 디버깅 과정이 훨씬
                  수월해졌습니다.
                </li>
                <li>
                  또한, 이후 프로젝트에서 TypeScript를 적용하면서 재귀 함수
                  호출과 같은 에러를 경험하게 되었고, 이를 통해 TypeScript의
                  필요성과 중요성을 깊이 깨닫게 되었습니다.
                </li>
              </ul>
              <ul className="pb-4">
                <li className="text-2xl font-semibold mb-2">스터디 자료</li>
                <Link
                  href={
                    "https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94"
                  }
                  className="underline"
                >
                  https://velog.io/@meek/series/타입스크립트-스터디
                </Link>
              </ul>
            </section>
          </div>
        </div>
      </div>
    ),
    images: ["/images/effective_typescript.jpg"], // 이미지 예시
    velog:
      "https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94",
    github: "", // 관련 GitHub 링크
  },
  {
    name: "코더랜드",
    title: "코더랜드",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">코더랜드</p>
        <div className="text-xl">
          <ul className="py-8">
            <li className="text-2xl font-semibold mb-2">기간</li>
            <li>2023. 06 ~ 2024. 07</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">직책</li>
            <li>강사</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">역할</li>
            <li>초중고 온라인 1:1 코딩 튜터</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">수업 강의 목록</li>
            <li>HTML, CSS, Python, Scratch</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">설명</li>
            <li className="mb-1">
              엘리스의 코더랜드는 초중고 학생들을 위한 온라인 1:1 코딩 튜터
              플랫폼입니다. 저는 엘리스 IoT 부트캠프를 수료한 후, 우수학생으로
              선정되어 튜터로 활동할 기회를 얻게 되었습니다.
            </li>
            <li>
              학생들에게 코딩에 대한 흥미를 고취시키는 것을 목표로 하고,
              추상적인 개념을 쉽게 이해할 수 있도록 스크래치의 시각적 특성을
              활용하여 강의했습니다. 총 11명의 학생을 지도하며, 재수강률 82%를
              달성하였습니다.
            </li>
          </ul>
        </div>
      </div>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
  {
    name: "부산시청 인턴",
    title: "부산시청 인턴",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">부산시청 인턴</p>
        <div className="text-xl">
          <ul className="py-8">
            <li className="text-2xl font-semibold mb-2">기간</li>
            <li>2021. 07 ~ 2021. 12</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">역할</li>
            <li>인턴</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">주요 업무</li>
            <li className="mb-1">
              부산에 등록된 심장제세동기(AED) 위치 데이터를 현장 실측 및
              현행화하였습니다.
            </li>
            <li>
              부산시청의 개방데이터 목록을 확인하고 이를 공공데이터 포털에
              반영하였습니다.
            </li>
          </ul>
        </div>
      </div>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
  {
    name: "동아대학교",
    title: "동아대학교",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">동아대학교</p>
        <div className="text-xl">
          <ul className="py-8">
            <li className="text-2xl font-semibold mb-2">기간</li>
            <li>2016. 03 ~ 2020. 02</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">전공</li>
            <li>전자공학과</li>
          </ul>
          <ul className="pb-8">
            <li className="text-2xl font-semibold mb-2">주요 업무</li>
            <li className="mb-1">
              캡스톤 디자인 주제 : Arduino를 활용한 &apos;로드셀 센서를 이용한
              지하철 혼잡도 측정&lsquo; 프로젝트 진행
            </li>
          </ul>
        </div>
      </div>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
];

export default studyListData;
