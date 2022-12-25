import {render, screen} from '@testing-library/react';
import PlatFormAndVisiblity from './PlatFormAndVisiblity';

describe('[Component] PlatFormAndVisiblity', () => {
   it('should render platform transltions correctly', () => {
      render(
         <PlatFormAndVisiblity
            translations={{
               platform: {
                  title: 'platform-title-mock',
                  description: 'platform-description-mock',
                  button_text: 'platform-button-text-mock',
               },
               visibility: {
                  title: 'visibility-title-mock',
                  description: 'visibility-description-mock',
                  button_text: 'visibility-button-text-mock',
               },
            }}
         />,
      );

      expect(screen.getByText('platform-title-mock')).toBeInTheDocument();
      expect(screen.getByText('platform-description-mock')).toBeInTheDocument();
      expect(screen.getByText('platform-button-text-mock')).toBeInTheDocument();
   });
   it('should render visiblity transltions correctly', () => {
      render(
         <PlatFormAndVisiblity
            translations={{
               platform: {
                  title: 'platform-title-mock',
                  description: 'platform-description-mock',
                  button_text: 'platform-button-text-mock',
               },
               visibility: {
                  title: 'visibility-title-mock',
                  description: 'visibility-description-mock',
                  button_text: 'visibility-button-text-mock',
               },
            }}
         />,
      );

      expect(screen.getByText('visibility-title-mock')).toBeInTheDocument();
      expect(
         screen.getByText('visibility-description-mock'),
      ).toBeInTheDocument();
      expect(
         screen.getByText('visibility-button-text-mock'),
      ).toBeInTheDocument();
   });
});
