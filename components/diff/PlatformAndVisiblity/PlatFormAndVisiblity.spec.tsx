import {render, screen} from '@testing-library/react';
import PlatFormAndVisiblity from './PlatFormAndVisiblity';

describe('[Component] PlatFormAndVisiblity', () => {
   it('should render platform transltions correctly', () => {
      render(<PlatFormAndVisiblity />);

      expect(screen.getByText('platform-title-mock')).toBeInTheDocument();
      expect(screen.getByText('platform-description-mock')).toBeInTheDocument();
      expect(screen.getByText('platform-button-text-mock')).toBeInTheDocument();
   });
   it('should render visiblity transltions correctly', () => {
      render(<PlatFormAndVisiblity />);

      expect(screen.getByText('visibility-title-mock')).toBeInTheDocument();
      expect(
         screen.getByText('visibility-description-mock'),
      ).toBeInTheDocument();
      expect(
         screen.getByText('visibility-button-text-mock'),
      ).toBeInTheDocument();
   });
});
