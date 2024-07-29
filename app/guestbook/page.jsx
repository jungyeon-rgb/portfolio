"use client";
import { useSession } from "next-auth/react";
import AuthButtons from "./components/AuthButtons";
import { useState, useEffect } from "react";
import Image from "next/image";
import { marked } from "marked"; // marked 라이브러리 임포트
import matter from "gray-matter"; // gray-matter 임포트
import fs from "fs"; // 파일 시스템 모듈
import path from "path"; // 경로 모듈
import { serialize } from "next-mdx-remote"; // MDX 직렬화

const GuestBook = () => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [activeTab, setActiveTab] = useState("write");
  const [markdownContent, setMarkdownContent] = useState(""); // Markdown 내용 상태

  useEffect(() => {
    // Markdown 파일 로드
    const loadMarkdown = async () => {
      const filePath = path.join(process.cwd(), "content/sample.md");
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { content } = matter(fileContent);
      const serializedContent = await serialize(content);
      setMarkdownContent(serializedContent);
    };
    loadMarkdown();
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([
        ...commentsList,
        {
          text: comment,
          user: session?.user || {
            email: "Anonymous",
            image: "/path/to/default/image.png",
          },
        },
      ]);
      setComment("");
      setActiveTab("write");
    }
  };

  const handleCommentSubmit = () => {
    handleSubmit(new Event("submit", { cancelable: true }));
  };

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center text-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/video/background1.mp4"
        loop
        autoPlay
        muted
      />
      <h1 className="text-9xl text-white font-stardom mb-4">GUEST BOOK</h1>

      <div className="w-3/4 max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        {commentsList.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Comments</h3>
            <div className="bg-white border border-gray-300 rounded-md p-4">
              {commentsList.map((cmt, index) => (
                <div
                  key={index}
                  className="mb-2 p-2 border-b border-gray-200 flex items-start"
                >
                  <Image
                    src={cmt.user.image}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="w-8 h-8 rounded-xl mr-2"
                  />
                  <div>
                    <p className="font-bold">{cmt.user.email}</p>
                    <div
                      className="text-black"
                      dangerouslySetInnerHTML={{ __html: marked(cmt.text) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col">
          {session && (
            <Image
              src={session.user.image}
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl mr-2"
            />
          )}
          <div>
            <h2 className="text-lg font-xl mb-4">Write</h2>
            <div className="flex mb-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === "write"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("write")}
              >
                Write
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "preview"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </button>
            </div>
            {activeTab === "write" && (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <textarea
                  className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Leave a comment"
                  value={comment}
                  onChange={handleCommentChange}
                />
                <div className="flex justify-between items-center my-4">
                  <span className="text-sm text-gray-500">
                    Styling with Markdown is supported
                  </span>
                  <AuthButtons handleCommentSubmit={handleCommentSubmit} />
                </div>
              </form>
            )}
            {activeTab === "preview" && (
              <div className="mt-4 p-4 border border-gray-300 rounded-md">
                <h3 className="text-lg font-bold mb-2">Preview</h3>
                <div
                  className="text-black"
                  dangerouslySetInnerHTML={{ __html: marked(comment) }} // 미리보기
                />
              </div>
            )}
            {/* Markdown 콘텐츠 렌더링 */}
            <div className="mt-4 p-4 border border-gray-300 rounded-md">
              <h3 className="text-lg font-bold mb-2">Markdown Content</h3>
              <div
                className="text-black"
                dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} // Markdown 콘텐츠
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
