import {render, screen} from '@testing-library/react';
import AppEventBanner from './AppEventBanner';

describe('[Component] AppEventBanner', () => {
   it('should render component', () => {
      render(
         <AppEventBanner
            title="test-title"
            description="test-description"
            linkText="test-linkText"
            url="#"
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct title', () => {
      render(
         <AppEventBanner
            title="test-title"
            description="test-description"
            linkText="test-linkText"
            url="#"
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct description', () => {
      render(
         <AppEventBanner
            title="test-title"
            description="test-description"
            linkText="test-linkText"
            url="#"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render correct linkText', () => {
      render(
         <AppEventBanner
            title="test-title"
            description="test-description"
            linkText="test-linkText"
            url="#"
         />,
      );

      expect(screen.getByText('test-linkText')).toBeInTheDocument();
   });
});
