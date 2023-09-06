import { render, screen } from '@testing-library/react'
import Text from './Text'

test('Text', () => {
    render(<Text children='루트페이지' />);
    screen.getByText(/루트페이지/);
})