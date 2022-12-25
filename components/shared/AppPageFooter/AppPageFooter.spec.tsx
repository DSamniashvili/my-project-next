import {render, screen} from '@testing-library/react';
import AppPageFooter from './AppPageFooter';

describe('[Component] AppPageFooter', () => {
   it('should render component', () => {
      render(<AppPageFooter />);

      expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
   });

   it('should render correct titles', () => {
      render(<AppPageFooter />);

      expect(screen.getByText('TECHNOLOGY')).toBeInTheDocument();
   });

   it('should render correct linkText', () => {
      render(<AppPageFooter />);

      expect(screen.getByText('Platform')).toBeInTheDocument();
   });
});
