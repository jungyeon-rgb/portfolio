// src/data/studyListData.js

import Image from "next/image";

const studyListData = [
  {
    name: "서울시 뉴딜",
    title: "서울시 뉴딜",
    content: (
      <div>
        <p className="text-2xl my-4 font-bold">서울시 뉴딜 풀스택 어쩌구</p>
        <div className="text-xl">
          <p className="py-4">기간 :</p>
          <p className="pb-4">수업 내용 :</p>
          <p className="pb-4">
            안전을 위해 외부 입구에 CCTV가 설치되어 있습니다.
          </p>
        </div>
      </div>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "https://github.com/jungyeon-rgb/portfolio", // 관련 GitHub 링크
  },
  {
    name: "엘리스",
    title: "Elice",
    content: (
      <article>
        <h2 className="my-4 text-2xl font-bold">Elice Study</h2>
        <section className="text-xl">
          <div className="flex pb-4 ">
            <Image
              src="/images/cloud.svg"
              width={30}
              height={30}
              alt="cloudicon"
            />
            <div className="flex-row">
              <p className="pl-2">스터디 설명</p>
              <p>오엫 </p>
            </div>
          </div>
          <div className="flex pb-4 ">
            <Image
              src="/images/cloud.svg"
              width={30}
              height={30}
              alt="cloudicon"
            />
            <p className="pl-2">스터디 기간 : 4주</p>
          </div>
          <div className="flex pb-4 ">
            <Image
              src="/images/cloud.svg"
              width={30}
              height={30}
              alt="cloudicon"
            />
            <a
              href="https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94"
              className="pl-2"
            >
              스터디 자료 보러가기
            </a>
          </div>
        </section>
      </article>
    ),
    images: ["/images/cloud.svg"], // 이미지 예시
    velog:
      "https://velog.io/@meek/series/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94",
    github: "", // 관련 GitHub 링크
  },
  {
    name: "타입스크립트 스터디",
    title: "TypeScript Study",
    content: (
      <div>
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
                <Image
                  src="/images/velog_logo_icon.webp"
                  width={30}
                  height={30}
                  alt="velog_icon"
                />
              </a>
            </div>
          </section>
          <Image
            src="/images/effective_typescript.jpg"
            width={300}
            height={600}
            alt="effective_typescript"
          />
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
      <section>
        <h2 className="text-2xl font-bold mb-4">코더랜드</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>기간:</strong> 2023. 06 ~ 2024. 07
          </li>
          <li>
            <strong>직책:</strong> 강사
          </li>
          <li>
            <strong>역할:</strong> 초중고 온라인 1:1 코딩 튜터
          </li>
          <li>
            <strong>수업 강의 목록:</strong> HTML, CSS, Python, Scratch
          </li>
          <li>
            <strong>설명:</strong> 엘리스의 코더랜드는 초중고 학생들을 위한
            온라인 1:1 코딩 튜터 플랫폼입니다. 저는 엘리스 IoT 부트캠프를 수료한
            후, 우수학생으로 선정되어 튜터로 활동할 기회를 얻게 되었습니다.
            <ul className="mt-2 list-disc list-inside pl-6">
              <li>학생들에게 코딩에 대한 흥미를 고취시키는 것을 목표로 함</li>
              <li>
                추상적인 개념을 쉽게 이해할 수 있도록 스크래치의 시각적 특성을
                활용하여 강의
              </li>
              <li>총 11명의 학생을 지도하며, 재수강률 82%를 달성</li>
            </ul>
          </li>
        </ul>
      </section>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
  {
    name: "부산시청 인턴",
    title: "부산시청 인턴",
    content: (
      <section>
        <h2 className="text-2xl font-bold mb-4">부산시청 인턴</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>기간:</strong> 2021. 07 ~ 2021. 12
          </li>
          <li>
            <strong>역할:</strong> 인턴
          </li>
          <li>
            <strong>주요 업무:</strong>
            <ul className="mt-2 list-disc list-inside pl-6">
              <li>
                부산에 등록된 심장제세동기(AED) 위치 데이터를 현장 실측 및
                현행화
              </li>
              <li>
                부산시청의 개방데이터 목록을 확인하고 이를 공공데이터 포털에
                반영
              </li>
            </ul>
          </li>
        </ul>
      </section>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
  {
    name: "동아대학교",
    title: "동아대학교",
    content: (
      <section>
        <h2 className="text-2xl font-bold mb-4">부산시청</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>기간:</strong> 2016. 03 ~ 2020. 02
          </li>
          <li>
            <strong>역할:</strong> 전자공학과
          </li>
          <li>
            <strong>주요 업무:</strong>
            <ul className="mt-2 list-disc list-inside pl-6">
              <li>
                캡스톤 디자인 주제 : Arduino를 활용한 &apos;로드셀 센서를 이용한
                지하철 혼잡도 측정&lsquo;
              </li>
            </ul>
          </li>
        </ul>
      </section>
    ),
    images: [], // 필요시 이미지 경로 추가
    velog: "", // 관련 Velog 링크
    github: "", // 관련 GitHub 링크
  },
];

export default studyListData;
