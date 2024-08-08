const CommentList = ({ commentsList }) => {
  return (
    <section>
      {Array.isArray(commentsList) && commentsList.length > 0 ? (
        <div className="mt-6">
          {commentsList.map((cmt, index) => (
            <div
              key={index}
              className="flex flex-col justify-center p-2 border-b border-gray-300"
            >
              <p className="font-bold">{cmt.name}</p>
              <p>{cmt.comment}</p>
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
