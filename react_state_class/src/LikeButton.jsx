import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fas fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </p>=
    </div>
  );
}
