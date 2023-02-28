import { MusicProps } from "../../types/globals";
import "./style.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

export default function PlaylistItem({
  id,
  title,
  like,
  cover,
  albumName,
}: MusicProps) {
  const [isLiked, setIsLiked] = useState(like);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="music-container">
      <div className="music-content">
        <img src={cover} alt={title} className="music-cover" />
        <div className="music-name">
          <h4>{title}</h4>&nbsp;-&nbsp;<h6>{albumName}</h6>
        </div>
        <button onClick={handleLike} className="button-like">
          {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
        </button>
      </div>
    </div>
  );
}
