import AppBanner from '@components/diff/AppBanner';
import AppEventBanner from '@components/diff/AppEventBanner';
import AppPageFooter from '@components/shared/AppPageFooter';
import AppPageHeader from '@components/shared/AppPageHeader';
import React, {ReactNode} from 'react';

export const AppContainer = ({children}: {children: ReactNode}) => {
   return (
      <>
         <AppEventBanner />
         <AppPageHeader />
         {children}
         <AppPageFooter />
      </>
   );
};
