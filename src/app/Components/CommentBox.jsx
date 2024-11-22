const CommentBox = ({ comment }) => {
  const authorName = comment?.author?.name;
  const commentContent = comment?.content;
  const commentDate = comment?.date;

  return (
    <div className="bg-white p-8  shadow-sm justify-center rounded-sm   text-gray-600 ">
      <h3 className="text-black text-xl font-bold ">{authorName}</h3>
      <h4 className="my-2 font-light"> {commentDate}</h4>

      <p className="" dangerouslySetInnerHTML={{ __html: commentContent }}></p>
    </div>
  );
};

export default CommentBox;
