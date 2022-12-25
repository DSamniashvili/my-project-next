import Air from '@assets/icons/Air';
import Land from '@assets/icons/Land';
import Ocean from '@assets/icons/Ocean';
import Rail from '@assets/icons/Rail';
import {AppServicesEnum} from '@components/shared/AppServiceCard/AppServiceCard.types';

interface IconByServiceProps {
   service: AppServicesEnum;
}

export function IconByService({service}: IconByServiceProps) {
   switch (service) {
      case AppServicesEnum.LAND:
         return <Land />;
      case AppServicesEnum.AIRFREIGHT:
         return <Air />;
      case AppServicesEnum.OCEANFREIGHT:
         return <Ocean />;
      case AppServicesEnum.RAIL:
         return <Rail />;
   }
}
