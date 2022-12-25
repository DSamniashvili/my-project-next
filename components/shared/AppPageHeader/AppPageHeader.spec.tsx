import {render, screen} from '@testing-library/react';
import PageHeader from './AppPageHeader';

describe('[Component] PageHeader', () => {
   it('should render component', () => {
      render(<PageHeader title="@test" />);

      expect(screen.getByText('Change the theme!')).toBeInTheDocument();
   });
});
