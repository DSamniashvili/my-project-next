import {render, screen} from '@testing-library/react';
import AppEventBanner from './AppEventBanner';

describe('[Component] AppEventBanner', () => {
   it('should render component', () => {
      render(<AppEventBanner />);

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct title', () => {
      render(<AppEventBanner />);

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct description', () => {
      render(<AppEventBanner />);

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render correct linkText', () => {
      render(<AppEventBanner />);

      expect(screen.getByText('test-linkText')).toBeInTheDocument();
   });
});
