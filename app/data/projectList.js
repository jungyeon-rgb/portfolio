const projectList = [
    {
        id: 1,
        imageSrc_1: "/images/projects/linkedout/splash_final.gif",
        imageSrc_2: "/images/projects/linkedout/linkedout-main.svg",
        imageSrc_3: "/images/projects/linkedout/adminsite.gif",
        title: "Linkedout",
        description:
            "이 프로젝트는 사용자가 자신의 감정을 솔직하게 표현할 수 있도록 돕는 글쓰기 가이드라인과 에세이 작성 기능을 제공합니다. 이를 통해 감정을 해소하고자 하는 사람들이 쉽게 글을 쓰고, 다양한 에세이를 탐색하며 자기 이해와 성장을 경험할 수 있습니다.",
        period: "2024.06~(진행중)",
        teamMembers: "6명 (프론트엔드 2명, 백엔드 1명, 디자이너 1명, AOS 1명, IOS 1명)",
        technologies: "Admin - React, Web - Next.js, Styled-components, Zustand",
        role: [
            "전체 프로젝트 기획 참여",
            "Admin - 신고, 유저, 에세이 페이지의 목록 페이지 및 상세 페이지, 정보 수정",
            "Web - 사이드바, 약관 페이지",
        ],
        deploymentLink: "https://linkedout-umber.vercel.app/authentication/sign-in",
        relatedLink: "https://velog.io/@meek/series/Linkedout",
        githubLink: "https://github.com/team-echoist/web-frontend",
        figmaLink:
            "https://www.figma.com/design/K5T3YWe6BpZ8W2svnlBNd7/ECHOIST_Design?node-id=1512-2466&t=ZEUwUJutXaZkpmdz-1",
    },
    {
        id: 2,
        imageSrc_1: "/images/projects/portfolio/portfolio_record.gif",
        imageSrc_2: "/images/projects/portfolio/portfolio_record_guestbook.gif",
        imageSrc_3: "/images/projects/portfolio/portfolio_record_about.png",
        title: "Portfolio",
        description:
            "개인 포트폴리오 프로젝트로, 프론트엔드 개발자로서의 기술과 경험을 보여주기 위해 제작한 웹사이트입니다.",
        period: "2024.07 (3주)",
        teamMembers: "1명 (개인 프로젝트)",
        technologies: "Next.js, Tailwind CSS, Next-Auth, GSAP, Three.js",
        role: [
            "Next.js와 Tailwind CSS를 사용한 반응형 웹사이트 구현",
            "Next-Auth를 이용한 GitHub 로그인 및 인증 시스템 구축",
            "SSR(Server-Side Rendering)을 사용해 성능 최적화",
            "GSAP을 활용한 다양한 애니메이션 효과 구현으로 사용자의 시각적 경험 향상",
            "CI/CD 파이프라인 구축을 통한 자동 배포 설정 (Vercel 사용)",
            "SEO(Search Engine Optimization) 최적화를 통한 검색 엔진 가시성 향상",
        ],
        deploymentLink: "https://portpolio-gilt.vercel.app/",
        githubLink: "https://github.com/jungyeon-rgb/portfolio",
    },
    {
        id: 3,
        imageSrc_1: "/images/projects/komatzip/komatzip_mainpage.gif",
        imageSrc_2: "/images/projects/komatzip/komatzip_search.gif",
        imageSrc_3: "/images/projects/komatzip/komatzip_mypage.gif",
        title: "Komatzip",
        description:
            "한국 내 다양한 맛집 정보 뿐만 아니라, 인기 매장과 추천 코스를 확인하고 후기를 공유할 수 있는 React, Redux, Tailwind로 구현한 웹 개발 프로젝트. 코맛집이란 맛집을 등록하고 사용자 간의 정보를 공유할 수 있는 커뮤니티 사이트입니다. 프론트엔드를 담당하며 사용자가 네이버, 구글 등을 통해 유입될 것을 고려하여 반응형 웹사이트로 개발을 했습니다.",
        period: "2023.09~2023.02",
        teamMembers: "5명 (프론트엔드 3명, 백엔드 2명)",
        technologies: "React, Typescript, Tailwind, Redux, react-hook-form",
        role: [
            "메인 페이지, 검색, 마이페이지 담당",
            "Kakao GPS를 사용하여 위치 정보를 가져와 주변 맛집 검색",
            "Redux 스토어에 위치 좌표를 미리 저장하여 검색 성능 최적화",
            "Axios 인터셉터와 인스턴스를 활용해 네트워크 요청 모듈화",
            "환경에 따른 BaseURL을 환경변수로 관리",
            "앱 템플릿(Header, NavBar, Container) 개발",
            "React-hook-form을 활용해 가게 생성 모달 구현",
            "재사용 가능한 공통 컴포넌트 개발",
        ],
        deploymentLink: "https://komatzip.wo.tc",
        relatedLink: "https://komatzip.example.com",
        githubLink: "https://github.com/to1step/komatzip-fe",
        figmaLink:
            "https://www.figma.com/design/DLWhqJMVQk56i2K5jQy0US/%EC%A7%84%EC%A7%9C-%EC%84%9C%EC%9A%B8%EC%9D%B4-%EC%95%84%EB%8B%88%EB%9D%BC-%ED%95%9C%EA%B5%AD?node-id=305-509&t=IemH97Yy5jT5yugi-0",
    },
    {
        id: 4,
        imageSrc_1: "/images/projects/basilfarm/basilfarm-main.gif",
        imageSrc_2: "/images/projects/basilfarm/basilfarm-mainpage.gif",
        imageSrc_3: "/images/projects/basilfarm/basilfarm-flowchart.png",
        title: "Basil Farm",
        description: [
            `<p>🏆 엘리스 IoT 1기 최종 프로젝트 최우수상 수상</p>`,
            `<p>집에서 농작물을 키워보고 싶지만 바쁜 Z세대 직장인들을 위해 원격으로 농작물의 상태를 확인하고 관리할 수 있는 스마트팜 프로젝트</p>`,
            ,
        ],
        period: "2023.04~2023.05(5주)",
        teamMembers: "6명 (프론트엔드 2명, 백엔드 2명, 디바이스 2명)",
        technologies: "Next.js, Recoil, Emotion",
        role: [
            "페르소나를 설정해 프로젝트 컨셉 설정",

            "Figma를 이용해 와이어프레임 작성",
            "화면 흐름도 작성으로 백엔드와 효율적인 소통 진행",
            "Notion을 이용한 문서 관리",
            "메인 페이지, 로그인, 회원가입, 마이페이지(회원정보, 디바이스 목록 및 추가 모달) 구현",
            "SSG를 적용해 빌드 후 변경이 없는 페이지 구현",
            "SSR을 통해 디바이스 추가가 있을 수 있는 마이페이지 구현",
            "Recoil로 로그인 상태 관리",
            "모바일 반응형 웹사이트 구현",
        ],
        relatedLink: "https://smart-basil-farm.vercel.app",
        githubLink: "https://github.com/jungyeon-rgb/SmartBasilFarm",
    },
]

export default projectList
