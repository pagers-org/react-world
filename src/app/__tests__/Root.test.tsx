import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import RootPage from '../page';

describe('RootPage', () => {
  it('should render page text', () => {
    render(<RootPage />);
    const DocsElement = screen.getByText('RootPage');
    expect(DocsElement).toBeInTheDocument();
  });
});
