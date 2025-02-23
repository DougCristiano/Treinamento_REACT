import { useState } from "react";
import like from "../../assets/Like.png";
import styles from "./styles.module.css";

function Like({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes); // Inicializa com o valor correto de likes
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={`${styles.likes} ${isLiked ? styles.liked : ''}`} // Adicionando a classe 'liked' quando o like for dado
      onClick={handleLike}
    >
      <img 
        src={like} 
        alt="Like" 
        className={isLiked ? styles.likedImage : styles.unlikedImage}
      />
      <span>Like</span>
      <span>• {likes}</span>
    </div>
  );
}



export default Like;