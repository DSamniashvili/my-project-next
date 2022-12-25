import {render, screen} from '@testing-library/react';
import AppPageFooter from './AppPageFooter';

describe('[Component] AppPageFooter', () => {
   it.skip('should render component', () => {
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

      expect(screen.getByRole('link')).toBeInTheDocument();
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
