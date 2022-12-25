import {render, screen} from '@testing-library/react';
import AppBanner from './AppBanner';

describe('[Component] AppBanner', () => {
   it('should render component', () => {
      render(
         <AppBanner
            url="#"
            title="test-title"
            description="test-description"
            buttonText="test-buttonText"
            image="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct title', () => {
      render(
         <AppBanner
            url="#"
            title="test-title"
            description="test-description"
            buttonText="test-buttonText"
            image="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
         />,
      );

      expect(screen.getByText('test-title')).toBeInTheDocument();
   });

   it('should render correct description', () => {
      render(
         <AppBanner
            url="#"
            title="test-title"
            description="test-description"
            buttonText="test-buttonText"
            image="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render correct buttonText', () => {
      render(
         <AppBanner
            url="#"
            title="test-title"
            description="test-description"
            buttonText="test-buttonText"
            image="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
         />,
      );

      expect(screen.getByText('test-buttonText')).toBeInTheDocument();
   });
});
