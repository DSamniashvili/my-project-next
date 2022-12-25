import AppBanner from '@components/diff/AppBanner';
import PlatFormAndVisiblity from '@components/diff/PlatformAndVisiblity/PlatFormAndVisiblity';
import Unification from '@components/diff/Unification';
import AppGetInTouchSection from '@components/shared/AppGetInTouchSection/AppGetInTouchSection';
import {GetInTouchSectionData} from '@components/shared/AppGetInTouchSection/AppGetInTouchSection.data';
import AppServiceSection from '@components/shared/AppServiceSection/AppServiceSection';
import {servicesMock} from '@components/shared/AppServiceSection/AppServiceSection.data';
import React from 'react';

export const LandingPage = () => {
   return (
      <main>
         <AppBanner
            title="Less clicks, more logistics"
            description="Simplify and visualize the logistics process by innovative technology"
            buttonText="Get started"
            image={
               'https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            }
            url={'/'}
         />

         <AppServiceSection
            title={'We operate on all of the routes worldwide'}
            services={servicesMock}
         />

         <Unification />
         <PlatFormAndVisiblity />
         <AppGetInTouchSection
            features={GetInTouchSectionData}
            title={'Get in touch'}
            subTitle={'Look inside Omofox!'}
         />
      </main>
   );
};
