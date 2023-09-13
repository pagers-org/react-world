import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from '@/src/components/Pagination';

const SELECTOR = {
  PAGINATION_CONTAINER: 'pagination-container',
  PAGINATION_BUTTON: 'pagination-button',
} as const;

const handleClickPage = jest.fn();

const setup = () => {
  render(
    <Pagination currentPage={1} totalPage={20} onClickPage={handleClickPage} />,
  );
};

describe('Pagination', () => {
  it('페이지네이션 컴포넌트가 정상적으로 렌더링된다.', () => {
    setup();

    const paginationContainer = screen.getByTestId(
      SELECTOR.PAGINATION_CONTAINER,
    );

    expect(paginationContainer).toBeInTheDocument();
  });

  it('props의 totalPage 만큼의 버튼이 생성된다.', () => {
    setup();

    const paginationButtons = screen.getAllByTestId(SELECTOR.PAGINATION_BUTTON);

    expect(paginationButtons.length).toBe(20);
  });

  it('버튼을 클릭하면 onClickPage 함수가 실행된다.', () => {
    setup();

    const paginationButton = screen.getAllByTestId(SELECTOR.PAGINATION_BUTTON);

    fireEvent.click(paginationButton[0]);

    expect(handleClickPage).toBeCalled();
  });
});
