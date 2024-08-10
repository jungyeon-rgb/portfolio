import HorizontalScroller from "./@components/HorizontalScroller";

const About = () => {
  return (
    <section>
      <div className="pt-14">
        <HorizontalScroller />
      </div>
      <article className="bg-yello-300 px-60 mt-16">
        <div>
          <div className="flex justify-between">
            <h1>김정연</h1>
            <h3>Kim Jungyeon</h3>
          </div>
          <div className="w-[250px] h-[300px] bg-white"></div>
        </div>
      </article>
    </section>
  );
};

export default About;

// import Image from "next/image";
// import HorizontalScroller from "./@components/HorizontalScroller";
// import MenuButton from "../_components/MenuButton";

// const About = () => {
//   return (
//     <section className="text-xl">
//       <div className="pt-14">
//         <HorizontalScroller />
//       </div>
//       <div className="flex">
//         <div className="flex-row">
//           <div className="flex justify-between">
//             <h3 className="text-3xl font-bold">김정연</h3>
//             <h4>Kim Jungyeon</h4>
//           </div>
//           <div className="w-[250px] h-[300px] bg-white"></div>
//           <div>
//             <ul className="list-none">
//               <li>+82 010-2982-1241</li>
//               <li>jy.keem2468@gmail.com</li>
//               <li>github.com/jungyeon-rgb</li>
//             </ul>
//           </div>
//         </div>
//         {/* <Image
//           src="/images/GitHub_qr.svg"
//           width={100}
//           height={100}
//           alt="GitHub_QR"
//           className="m-10"
//         />
//         <Image
//           src="/images/velog_qr.svg"
//           width={100}
//           height={100}
//           alt="velog_QR"
//           className="m-10"
//         /> */}
//       </div>
//       <div>
//         <h3>CHARACTER</h3>
//         <p>긍정적인, 끈기있는, 도전적인, 유연한, 단단함</p>
//       </div>
//       <div className="flex-row p-4 text-xl">
//         <p className="w-fit bg-blue-400 py-[0.25rm] px-[1rem] rounded-3xl">
//           about 페이지입니다.
//         </p>
//         <p className="w-fit bg-blue-400 py-[0.25rm] px-[1rem] rounded-3xl">
//           안냐쎼용
//         </p>
//       </div>
//       <div>
//         <MenuButton />
//       </div>
//     </section>
//   );
// };

// export default About;
