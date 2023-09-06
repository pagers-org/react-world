import { render, screen } from '@testing-library/react';

import Banner from '@/src/components/layout/Banner';

function renderBanner(title: string, description?: string) {
  render(<Banner title={title} description={description} />);
}

describe('Banner Component', () => {
  it('React-World 라는 배너명이 화면에 보여진다.', () => {
    renderBanner('React-World');

    const bannerName = screen.getByText(/React-World/);

    expect(bannerName).toBeInTheDocument();
  });

  it('배너에 대한 설명이 화면에 보여진다.', () => {
    renderBanner('', '다양한 기술적 시도를 합니다.');

    const description = screen.getByText(/다양한 기술적 시도를 합니다./);

    expect(description).toBeInTheDocument();
  });
});
