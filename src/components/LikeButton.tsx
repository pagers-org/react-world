import { AiFillHeart } from 'react-icons/ai';
import * as styles from './LikeButton.css';

type Props = {
  favoritesCount: number;
};

export default function LikeButton({ favoritesCount }: Props) {
  return (
    <button className={styles.likeButton}>
      <AiFillHeart />
      <p className={styles.count}>{favoritesCount}</p>
    </button>
  );
}
