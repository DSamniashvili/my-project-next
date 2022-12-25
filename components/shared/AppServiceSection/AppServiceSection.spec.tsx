import {render, screen} from '@testing-library/react';
import AppServiceSection from './AppServiceSection';
import {AppServicesEnum} from '../AppServiceCard/AppServiceCard.types';

describe('[Component] AppServiceSection', () => {
   it('should render component', () => {
      render(
         <AppServiceSection
            title="test-title"
            services={[
               {
                  id: 'test-id',
                  service: AppServicesEnum.LAND,
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: '#',
               },
            ]}
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct title', () => {
      render(
         <AppServiceSection
            title="test-title"
            services={[
               {
                  id: 'test-id',
                  service: AppServicesEnum.LAND,
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: '#',
               },
            ]}
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct amount of services', () => {
      render(
         <AppServiceSection
            title="test-title"
            services={[
               {
                  id: 'test-id',
                  service: AppServicesEnum.LAND,
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: '#',
               },
            ]}
         />,
      );

      expect(screen.getAllByText('test-link-text')).toBeArrayOfSize(1);
   });
});
