import {render, screen} from '@testing-library/react';
import Button from './Buttons';

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message';
  render(<Button>{testMessage}</Button>);

  expect(screen.queryByText(testMessage)).not.toBeNull();
});
