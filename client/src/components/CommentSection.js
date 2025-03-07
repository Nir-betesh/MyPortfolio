import React, { useState, useEffect } from "react";
import AnimatedText from './AnimatedText';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const commentsPerPage = 3; 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/comments`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, content }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setAuthor("");
        setContent("");
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  // Pagination logic
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = [...comments].reverse().slice(indexOfFirstComment, indexOfLastComment);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section id="comments" className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-gray-100 dark:bg-[#101016] dark:text-white">
      <h2 className="appear-right-animation text-center text-6xl font-extrabold mb-6 glow-text dark:dark-glow-text animate-fade-in-down">
      <AnimatedText text="Leave a Comment"/>
      </h2>
      <div className=" dark:bg-[#12102f] pb-1 pt-1 justify-center rounded-xl lg:w-1/3 mx-auto">
        <form onSubmit={handleSubmit} className="appear-right-animation pb-8 pt-8 grid grid-cols-1 gap-4 items-center justify-center">
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Your Name"
            autoComplete="name"
            onChange={(e) => setAuthor(e.target.value)}
            className="appear-right-animation p-2 dark:text-white bg-gray-200 dark:bg-[#151342] rounded-md w-80 lg:w-5/6 mx-auto"
            required
          />
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your Comment"
            autoComplete="off"
            className="appear-right-animation p-2 dark:text-white bg-gray-200 dark:bg-[#151342] rounded-md w-80 lg:w-5/6 mx-auto"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="appear-right-animation w-40 h-12 bg-gray-300 dark:bg-[#36318c] dark:text-white font-bold px-4 py-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
            
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* View Comments */}
      <div className=" dark:bg-[#12102f] pb-8 pt-4 rounded-xl  appear-right-animation lg:w-1/3 mx-auto text-center mt-16 grid grid-cols-1 gap-4 items-center min-h-72">
        <h3 className="text-6xl font-bold mb-4 glow-text dark:dark-glow-text">
          <AnimatedText text="Comments" />
        </h3>
        {currentComments.length > 0 ? currentComments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white dark:bg-[#151342] gap-1 rounded-md w-60 lg:w-5/6 mx-auto"
              >
                <p className="text-xl">
                  <strong className="text-2xl">{comment.author}</strong>
                  <p>{comment.content}</p>
                </p>
                <p>
                  <em>{new Date(comment.createdAt).toLocaleString()}</em>
                </p>
              </div>
            ))
          : null}
        {/* Add placeholders if fewer than 3 comments */}
        {Array.from({ length: Math.max(0, commentsPerPage - currentComments.length) }).map(
          (_, idx) => (
            <div
              key={`placeholder-${idx}`}
              className="bg-gray-200 dark:bg-[#151342] gap-1 rounded-md  w-60 lg:w-5/6 mx-auto h-32"
            ></div>
          )
        )}
      <div className="flex translate-x-1.5 justify-center mt-8 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`transition-transform duration-100 ease-in-out transform -translate-x-full px-4 py-2 mr-4 rounded bg-gray-300 dark:bg-[#151342] ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400 hover:scale-110"
          }`}
          >
          Prev
        </button>
        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === currentPage ||
              page === 1 || 
              page === totalPages || 
              (page >= currentPage && page <= currentPage + 2) 
            ) {
              return (
                <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${
                    page === currentPage
                    ? "bg-gray-400 dark:bg-[#36318c] text-white"
                    : "bg-gray-300 dark:bg-[#47438b] hover:bg-gray-200 dark:hover:bg-gray-500"
                  }`}
                  >
                  {page}
                </button>
              );
            }
            
            if (
              (page === currentPage + 3 && page < totalPages) || // Dots after current pages if needed
              (page === currentPage - 1 && page > 1) // Dots before current pages if needed
            ) {
              return <span key={page}>...</span>;
            }

            return null;
          })}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`transition-transform duration-100 translate-x-full ease-in-out transform px-4 py-2 mr-4 rounded bg-gray-300 dark:bg-[#151342] ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400 hover:scale-110"
          }`}
          >
          Next
        </button>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
