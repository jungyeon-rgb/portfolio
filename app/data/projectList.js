const projectList = [
  {
    id: 1,
    imageSrc: "/images/projects/linkedout/linkedout-main.svg",
    title: "Linkedout",
    description: "링크드아웃 프로젝트 입니데이데이",
    period: "2024.06~(진행중)",
    teamMembers:
      "6명 (프론트엔드 2명, 백엔드 1명, 디자이너 1명, AOS 1명, IOS 1명)",
    technologies:
      "1. Admin - React, 2. Web - Next.js, Styled-components, Zustand",
    role: "1. Admin - 신고, 유저, 에세이 페이지의 목록 페이지 및 상세 페이지, 정보 수정 2. Web - 사이드바",
    deploymentLink: "https://linkedout-umber.vercel.app",
    relatedLink: "https://velog.io/@meek/series/Linkedout",
    githubLink: "https://github.com/team-echoist/web-frontend",
    figmaLink:
      "https://www.figma.com/design/K5T3YWe6BpZ8W2svnlBNd7/ECHOIST_Design?node-id=1512-2466&t=ZEUwUJutXaZkpmdz-1",
  },
  {
    id: 2,
    imageSrc: "/images/projects/portfolio/portfolio-main.png",
    title: "Portfolio",
    description: "포트폴리오 프로젝트 입니데이데이",
    period: "2024.07.17~",
    teamMembers: "1명 (개인프로젝트)",
    technologies: "Next.js, Tailwind CSS, Next-Auth, Three.js, GSAP",
    role: "1. Next.Auth - GitHub 로그인 및 댓글 기능 구현, aws를 활용해 서버 운영. <br /> 2. GSAP을 활용한 캐러셀과 (어쩌구) 구현 <br /> 3. Three.js를 활용한 카드 컴포넌트 구현",
    deploymentLink: "https://portpolio-gilt.vercel.app/",
    githubLink: "https://github.com/jungyeon-rgb/portfolio",
  },
  {
    id: 3,
    imageSrc: "/images/project/komatzip/komatzip-main.png",
    title: "Komatzip",
    description:
      "한국 내 다양한 맛집 정보 뿐만 아니라, 인기 매장과 추천 코스를 확인하고 후기를 공유할 수 있는 React,Redux,Tailwind로 구현한 웹 개발 프로젝트",
    period: "2023.09~2023.02(바꿔야함)",
    teamMembers: "몇 명이드라",
    technologies: "React, Typescript, Tailwind, Redux, react-hook-form",
    // 버전 및 이슈관리 : Github, Github Issues, trello
    // 협업 툴 : Discord, Notion, Github,
    // 서비스 배포 환경 : vercel,
    role: "매장/코스 랭킹 및 상세페이지, 검색, 마이페이지",
    deploymentLink: "https://komatzip.wo.tc",
    relatedLink: "https://komatzip.example.com",
    githubLink: "https://github.com/to1step/komatzip-fe",
    figmaLink:
      "https://www.figma.com/design/DLWhqJMVQk56i2K5jQy0US/%EC%A7%84%EC%A7%9C-%EC%84%9C%EC%9A%B8%EC%9D%B4-%EC%95%84%EB%8B%88%EB%9D%BC-%ED%95%9C%EA%B5%AD?node-id=305-509&t=IemH97Yy5jT5yugi-0",
  },
  {
    id: 4,
    imageSrc: "/images/projects/basilfarm/basilfarm-main.gif",
    title: "Basil Farm",
    description:
      "집에서 농작물을 키워보고 싶지만 바쁜 Z세대 직장인들을 위해 원격으로 농작물의 상태를 확인하고 관리할 수 있는 스마트팜 프로젝트",
    period: "2023.04~2023.05(5주)",
    teamMembers: "6명 (프론트엔드 2명, 백엔드 2명, 디바이스 2명)",
    technologies: "Next.js, Recoil, Styled-Components",
    role: "메인 페이지, 로그인, 회원가입, 마이 페이지",
    relatedLink: "https://smart-basil-farm.vercel.app",
    githubLink: "https://github.com/jungyeon-rgb/SmartBasilFarm",
  },
];

export default projectList;
