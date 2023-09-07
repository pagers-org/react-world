import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleListItem from './article-list-item';

describe('ArticleListItem', () => {
  it('ArticleListItem에 props로 내려준 title과 description이 표시된다.', () => {
    const title = 'title';
    const description = 'description';

    render(<ArticleListItem title={title} description={description} id={'1'} />);

    const $title = screen.getByText(title);
    const $description = screen.getByText(description);

    expect($title).toBeInTheDocument();
    expect($description).toBeInTheDocument();
  });
});
