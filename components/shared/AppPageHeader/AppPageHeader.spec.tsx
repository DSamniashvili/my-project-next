import {render, screen} from '@testing-library/react';
import PageHeader from './AppPageHeader';

jest.mock('next/router', () => ({
   useRouter: () => ({
      query: {myProp: 'myValue'},
   }),
}));

describe('[Component] PageHeader', () => {
   it('should render component', () => {
      render(<PageHeader title="@test" />);

      expect(screen.getByText('Change the theme!')).toBeInTheDocument();
   });
});
