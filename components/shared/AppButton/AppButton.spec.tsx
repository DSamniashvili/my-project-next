import {render, screen} from '@testing-library/react';
import AppButton from './AppButton';

describe('[Component] Button', () => {
   it('should render component', () => {
      render(<AppButton>test-mock</AppButton>);

      expect(screen.getByText('test-mock')).toBeInTheDocument();
   });
   it('should render component with icon', () => {
      const MockIcon = () => <div data-testid="mock-icon" />;
      render(<AppButton icon={<MockIcon />}>test-mock</AppButton>);

      expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
   });
});
