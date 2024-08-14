import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import dynamic from "next/dynamic";

const MDPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
  loading: () => <p>Loading...</p>, // 로딩 시 표시될 컴포넌트
});

const CommentList = ({ commentsList }) => {
  return (
    <section>
      {Array.isArray(commentsList) && commentsList.length > 0 ? (
        <div className="mt-6 space-y-4">
          {commentsList.map((cmt, index) => (
            <div key={index} className="flex items-start p-4">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={cmt.image || "/default-profile.png"}
                  width={40}
                  height={40}
                  alt="프로필 이미지"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full rounded-lg shadow-lg border bg-white">
                <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-lg">
                  <p className="font-semibold">{cmt.name}</p>
                  <p className="text-gray-500 text-sm">
                    commented{" "}
                    {cmt.createdAt
                      ? formatDistanceToNow(new Date(cmt.createdAt), {
                          addSuffix: true,
                        })
                      : "Date unknown"}
                  </p>
                </div>
                <div className="p-4 markdown-preview rounded-lg">
                  <MDPreview source={cmt.comment} className="mx-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </section>
  );
};

export default CommentList;
