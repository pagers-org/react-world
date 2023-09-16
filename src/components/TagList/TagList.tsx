import * as styles from './TagList.css';

interface Props {
  tagList: string[];
}
export default function TagList({ tagList }: Props) {
  return (
    <ul className={styles.tagList}>
      {tagList.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
