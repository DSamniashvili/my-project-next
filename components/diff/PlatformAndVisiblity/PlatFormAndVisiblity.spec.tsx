import {render, screen} from '@testing-library/react';
import PlatFormAndVisiblity from './PlatFormAndVisiblity';

describe('[Component] PlatFormAndVisiblity', () => {
   it('should render platform transltions correctly', () => {
      const {container} = render(<PlatFormAndVisiblity />);
      expect(container).toMatchSnapshot();
   });
});
