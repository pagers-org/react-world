import { ColMd3 } from '../shared/Col.styled';
import {
  PopularArticleTagListContainer,
  ArticleTag,
} from './PopularArticleTagList.styled';

interface ArticleTagListProps {
  tags: string[];
}

const PopularArticleTagList = ({ tags }: ArticleTagListProps) => {
  return (
    <ColMd3>
      <PopularArticleTagListContainer>
        <p>Popular Tags</p>
        {tags.map(tag => (
          <ArticleTag key={tag} href="">
            {tag}
          </ArticleTag>
        ))}
      </PopularArticleTagListContainer>
    </ColMd3>
  );
};

export default PopularArticleTagList;
