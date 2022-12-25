import {socialMediaURLs} from '@constant/socialLinks';
import {render, screen} from '@testing-library/react';
import AppPageFooterCopyright from './AppPageFooterCopyright';

describe('[Component] FooterCopyright', () => {
   it('should render component', () => {
      render(<AppPageFooterCopyright content="mock-content" />);

      expect(screen.getByText('mock-content')).toBeInTheDocument();
   });
   it('should render Facebook icon', () => {
      render(<AppPageFooterCopyright content="mock-content" />);

      expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
   });
   it('should render Twitter icon', () => {
      render(<AppPageFooterCopyright content="mock-content" />);

      expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
   });
   it('should render Instagram icon', () => {
      render(<AppPageFooterCopyright content="mock-content" />);

      expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
   });
   it('should have each icon correct redirect URLs', () => {
      render(<AppPageFooterCopyright content="mock-content" />);

      expect(screen.getAllByRole('link')[0]).toHaveAttribute(
         'href',
         socialMediaURLs.facebook,
      );
      expect(screen.getAllByRole('link')[1]).toHaveAttribute(
         'href',
         socialMediaURLs.twitter,
      );
      expect(screen.getAllByRole('link')[2]).toHaveAttribute(
         'href',
         socialMediaURLs.instagram,
      );
   });
});
