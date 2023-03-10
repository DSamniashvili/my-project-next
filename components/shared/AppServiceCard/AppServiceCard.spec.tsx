import {render, screen} from '@testing-library/react';
import AppServiceCard from './AppServiceCard';
import {AppServicesEnum} from './AppServiceCard.types';

describe('[Component] AppServiceCard', () => {
   it('should render component', () => {
      render(
         <AppServiceCard
            id={1}
            service={AppServicesEnum.LAND}
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render correct service icon', () => {
      render(
         <AppServiceCard
            id={1}
            service={AppServicesEnum.AIRFREIGHT}
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByLabelText('Air icon')).toBeInTheDocument();
   });

   it('should render correct service name', () => {
      render(
         <AppServiceCard
            id={1}
            service={AppServicesEnum.LAND}
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('LAND')).toBeInTheDocument();
   });

   it('should render correct description', () => {
      render(
         <AppServiceCard
            id={1}
            service={AppServicesEnum.LAND}
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-description')).toBeInTheDocument();
   });

   it('should render link button', () => {
      render(
         <AppServiceCard
            id={1}
            service={AppServicesEnum.LAND}
            description="test-description"
            linkText="test-link-text"
            url="test-link"
         />,
      );

      expect(screen.getByText('test-link-text')).toBeInTheDocument();
   });
});
