import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClickToMoveTag from './click-to-move-tag';
import { AppRouterContextProviderMock } from '@/shared/test/app-router-context-provider-mock';

describe('ClickToMoveTag', () => {
  it('ClickToMoveTag에 props로 내려준 label이 표시된다.', () => {
    const testingLabel = 'test-tag';

    render(
      <AppRouterContextProviderMock router={{ push: jest.fn() }}>
        <ClickToMoveTag label={testingLabel} />
      </AppRouterContextProviderMock>,
    );

    const tagLabel = screen.getByText(testingLabel);

    expect(tagLabel).toBeInTheDocument();
  });
});
