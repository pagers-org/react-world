import { render, screen } from '@testing-library/react';

import Text from '@/src/components/Text';

describe('Text', () => {
  it('children으로 받은 텍스트를 렌더링한다.', () => {
    render(<Text>안녕</Text>);

    const text = screen.getByText(/안녕/);

    expect(text).toBeInTheDocument();
  });
});
