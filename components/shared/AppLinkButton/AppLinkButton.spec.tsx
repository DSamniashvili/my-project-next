import {render, screen} from '@testing-library/react';
import AppLinkButton from './AppLinkButton';
import {ButtonSizes} from './AppLinkButton.types';

describe('[Component] AppLinkButton', () => {
   it('should render component', () => {
      render(
         <AppLinkButton
            href="/"
            text="test"
            hasArrow
            size={ButtonSizes.SMALL}
         />,
      );

      expect(screen.getByText('test')).toBeInTheDocument();
   });

   it('should render right arrow icon when hasArrow is true', () => {
      render(
         <AppLinkButton
            href="/"
            text="test"
            hasArrow
            size={ButtonSizes.SMALL}
         />,
      );

      expect(screen.getByLabelText('Right arrow icon')).toBeInTheDocument();
   });

   it('should not render right arrow icon when hasArrow is false', () => {
      render(
         <AppLinkButton
            href="/"
            text="test"
            hasArrow={false}
            size={ButtonSizes.SMALL}
         />,
      );

      expect(
         screen.queryByLabelText('Right arrow icon'),
      ).not.toBeInTheDocument();
   });
});
