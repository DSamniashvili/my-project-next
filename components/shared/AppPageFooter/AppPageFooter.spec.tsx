import {render, screen} from '@testing-library/react';
import AppPageFooter from './AppPageFooter';

describe('[Component] AppPageFooter', () => {
   it('should render component', () => {
      render(
         <AppPageFooter
            navigation={[
               {
                  id: 1,
                  title: 'TECHNOLOGY',
                  linkGroup: [
                     {
                        id: 1,
                        title: 'Platform',
                        href: '/',
                     },
                  ],
               },
            ]}
         />,
      );

      expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
   });

   it('should render correct titles', () => {
      render(
         <AppPageFooter
            navigation={[
               {
                  id: 1,
                  title: 'TECHNOLOGY',
                  linkGroup: [
                     {
                        id: 1,
                        title: 'Platform',
                        href: '/',
                     },
                  ],
               },
            ]}
         />,
      );

      expect(screen.getByText('TECHNOLOGY')).toBeInTheDocument();
   });

   it('should render correct linkText', () => {
      render(
         <AppPageFooter
            navigation={[
               {
                  id: 1,
                  title: 'TECHNOLOGY',
                  linkGroup: [
                     {
                        id: 1,
                        title: 'Platform',
                        href: '/',
                     },
                  ],
               },
            ]}
         />,
      );

      expect(screen.getByText('Platform')).toBeInTheDocument();
   });
});
