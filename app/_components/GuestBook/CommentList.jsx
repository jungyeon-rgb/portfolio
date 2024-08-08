import Image from "next/image";

const CommentList = ({ commentsList }) => {
  return (
    <section>
      {Array.isArray(commentsList) && commentsList.length > 0 ? (
        <div className="mt-6">
          {commentsList.map((cmt, index) => (
            <div
              key={index}
              className="flex items-start p-4 border-b border-gray-300"
            >
              <Image
                src={cmt.image || "/default-profile.png"}
                width={40}
                height={40}
                alt="프로필 이미지"
                className="rounded-xl mr-4"
              />
              <div>
                <p className="font-bold">{cmt.name}</p>
                <p>{cmt.comment}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>댓글 없움 ㅜ</p>
      )}
    </section>
  );
};

export default CommentList;
