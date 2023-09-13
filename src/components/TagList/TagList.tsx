import * as styles from './TagList.css';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  tagList: string[];
};
export default function TagList({ tagList }: Props) {
  return (
    <ul className={styles.tagList}>
      {tagList.map((tag) => (
        <li key={uuidv4()} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
