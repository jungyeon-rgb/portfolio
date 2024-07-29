import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

const AuthButtons = ({ handleCommentSubmit }) => {
  const { data: session } = useSession();

  return (
    <div className="mb-4">
      {session ? (
        <>
          <button
            onClick={handleCommentSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Comment
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn("github")}
            className="flex justify-center items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <Image
              src="/images/github.svg"
              width={40}
              height={40}
              alt="githubicon"
            />
            Sign in with GitHub
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
