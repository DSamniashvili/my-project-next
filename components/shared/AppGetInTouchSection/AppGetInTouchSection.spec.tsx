import {render, screen} from '@testing-library/react';
import AppServiceSection from './AppGetInTouchSection';

describe('[Component] AppServiceSection', () => {
   it('should render component', () => {
      render(
         <AppServiceSection
            title="test-title"
            subTitle="test-sub-title"
            features={[
               {
                  id: 'test-id',
                  title: 'test-feature-title',
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: 'test-link',
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
            subTitle="test-sub-title"
            features={[
               {
                  id: 'test-id',
                  title: 'test-feature-title',
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: 'test-link',
               },
            ]}
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct subTitle', () => {
      render(
         <AppServiceSection
            title="test-title"
            subTitle="test-sub-title"
            features={[
               {
                  id: 'test-id',
                  title: 'test-feature-title',
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: 'test-link',
               },
            ]}
         />,
      );

      expect(screen.getByText('test-sub-title')).toBeInTheDocument();
   });

   it('should render correct amount of services', () => {
      render(
         <AppServiceSection
            title="test-title"
            subTitle="test-sub-title"
            features={[
               {
                  id: 'test-id',
                  title: 'test-title',
                  description: 'test-description',
                  linkText: 'test-link-text',
                  url: 'test-link',
               },
            ]}
         />,
      );

      expect(screen.getAllByText('test-link-text')).toBeArrayOfSize(1);
   });
});
