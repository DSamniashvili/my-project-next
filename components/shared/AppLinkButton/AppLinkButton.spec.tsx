import {render, screen} from '@testing-library/react';
import AppLinkButton from './AppLinkButton';

describe('[Component] AppLinkButton', () => {
   it('should render component', () => {
      render(<AppLinkButton href="/" text="test" hasArrow />);

      expect(screen.getByText('test')).toBeInTheDocument();
   });

   it('should render right arrow icon when hasArrow is true', () => {
      render(<AppLinkButton href="/" text="test" hasArrow />);

      expect(screen.getByLabelText('Right arrow icon')).toBeInTheDocument();
   });

   it('should not render right arrow icon when hasArrow is false', () => {
      render(<AppLinkButton href="/" text="test" hasArrow={false} />);

      expect(
         screen.queryByLabelText('Right arrow icon'),
      ).not.toBeInTheDocument();
   });
});
