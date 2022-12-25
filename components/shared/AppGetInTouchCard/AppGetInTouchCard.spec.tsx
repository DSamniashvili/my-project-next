import {render, screen} from '@testing-library/react';
import AppGetInTouchCard from './AppGetInTouchCard';

describe('[Component] AppGetInTouchCard', () => {
   it('should render component', () => {
      render(
         <AppGetInTouchCard
            id={1}
            title="test-title"
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render correct title', () => {
      render(
         <AppGetInTouchCard
            id={1}
            title="test-title"
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct description', () => {
      render(
         <AppGetInTouchCard
            id={1}
            title="test-title"
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render link button', () => {
      render(
         <AppGetInTouchCard
            id={1}
            title="test-title"
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-link-text')).toBeInTheDocument();
   });
});
