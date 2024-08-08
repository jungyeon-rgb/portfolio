"use client";

import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axiosInstance from "../api/axiosInstance";
import MenuButton from "../_components/MenuButton";
import MenuList from "../_components/MenuList";
import CommentList from "../_components/GuestBook/CommentList";
import Image from "next/image";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

const GuestBook = () => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [activeTab, setActiveTab] = useState("write");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const pageable = {
        page: 0,
        size: 10,
        sort: "",
      };

      const queryParams = new URLSearchParams(pageable).toString();

      const response = await axiosInstance.get(`/comments?${queryParams}`);
      setCommentsList(response.data.commentList || []);
      console.log("댓글리스트 응답", response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() && session) {
      const newComment = {
        email: session.user.email,
        name: session.user.name,
        comment: comment,
        image: session.user.image,
      };

      try {
        const response = await axiosInstance.post("/comments", newComment);

        setCommentsList([
          ...commentsList,
          {
            ...newComment,
            createdAt: new Date().toISOString(),
            user: session.user,
          },
        ]);
        setComment("");
        setActiveTab("write");
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-screen h-full font-medium font-pretendard">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/video/background1.mp4"
        loop
        autoPlay
        muted
      />
      <h1 className="mt-12 mb-4 text-white text-9xl sm:text-8xl md:text-7xl lg:text-6xl xl:text-5xl font-stardom">
        GUEST BOOK
      </h1>

      <div className="w-3/4 max-w-2xl p-4 mx-auto rounded-lg shadow-lg">
        <MenuButton onClick={toggleMenu} />

        <div className="flex items-start mt-6 mb-4">
          <div className="flex-shrink-0 mr-4">
            {session && (
              <Image
                src={session.user.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-xl"
              />
            )}
          </div>
          <div className="w-full">
            <div className="flex justify-start pt-2 px-2 bg-[#e1e4e8] rounded-t-md text-black">
              <button
                className={`px-4 py-2 rounded-t-md border-t-2 ${
                  activeTab === "write" ? "bg-white " : "bg-[#e1e4e8]"
                }`}
                onClick={() => setActiveTab("write")}
              >
                Write
              </button>
              <button
                className={`px-4 py-2 rounded-t-md border-t-2 ${
                  activeTab === "preview"
                    ? "bg-white text-gray-400"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </button>
            </div>
            <div className="w-full p-3 bg-white rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              {activeTab === "write" && (
                <textarea
                  value={comment}
                  onChange={handleCommentChange}
                  className="text-black w-full h-32 p-3 resize-none focus:rounded-md focus:outline-none focus:ring-2 rounded-b-md focus:ring-blue-400"
                />
              )}
              {activeTab === "preview" && (
                <div className="markdown-preview">
                  <MDPreview
                    source={comment}
                    className="prose h-36 font-pretendard p-3"
                  />
                </div>
              )}
            </div>
            {session ? (
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-between my-4"
              >
                <span className="text-sm text-gray-500">
                  Styling with Markdown is supported
                </span>
                <button
                  type="submit"
                  className="w-[150px] h-[40px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                  Comment
                </button>
              </form>
            ) : (
              <div className="flex justify-between items-center text-center m-4">
                <span className="text-sm text-gray-600 text-center">
                  Styling with Markdown is supported
                </span>
                <button
                  onClick={() => signIn("github")}
                  className="leading-5 rounded-md hover:bg-green-600 text-white bg-green-500 flex items-center justify-center w-[200px] h-[40px] px-4 py-2"
                >
                  <Image
                    src="/images/github.svg"
                    width={20}
                    height={20}
                    alt="githubicon"
                  />
                  <span className="pl-2">Sign in with GitHub</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="max-h-[300px] overflow-y-auto text-black">
          <CommentList commentsList={commentsList} />
        </div>
      </div>
      <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};

export default GuestBook;
