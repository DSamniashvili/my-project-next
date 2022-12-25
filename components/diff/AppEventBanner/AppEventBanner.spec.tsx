import {render, screen} from '@testing-library/react';
import AppEventBanner from './AppEventBanner';

describe('[Component] AppEventBanner', () => {
   it('should render component', () => {
      const {container} = render(<AppEventBanner />);
      expect(container).toMatchSnapshot();
   });
});
