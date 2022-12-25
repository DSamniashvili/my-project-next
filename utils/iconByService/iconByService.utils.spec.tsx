import {AppServicesEnum} from '@components/shared/AppServiceCard/AppServiceCard.types';
import {render, screen} from '@testing-library/react';
import {IconByService} from './iconByService.utils';

describe('[Component] IconByService', () => {
   it('should render land icon', () => {
      render(<IconByService service={AppServicesEnum.LAND} />);

      expect(screen.getByLabelText('Land icon')).toBeInTheDocument();
   });

   it('should render air icon', () => {
      render(<IconByService service={AppServicesEnum.AIRFREIGHT} />);

      expect(screen.getByLabelText('Air icon')).toBeInTheDocument();
   });

   it('should render ocean icon', () => {
      render(<IconByService service={AppServicesEnum.OCEANFREIGHT} />);

      expect(screen.getByLabelText('Ocean icon')).toBeInTheDocument();
   });

   it('should render rail icon', () => {
      render(<IconByService service={AppServicesEnum.RAIL} />);

      expect(screen.getByLabelText('Rail icon')).toBeInTheDocument();
   });
});
