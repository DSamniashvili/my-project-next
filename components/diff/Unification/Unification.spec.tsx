import Unification from './Unification';
import {screen, render} from '@testing-library/react';

describe('[Component] Unification', () => {
   it('should render mapped component titles correctly', () => {
      render(<Unification />);

      expect(screen.getByText('Insure your cargo')).toBeInTheDocument();
      expect(
         screen.getByText('Personalized customs services'),
      ).toBeInTheDocument();
      expect(screen.getByText('Secure storage of cargo')).toBeInTheDocument();
      expect(screen.getByText('Manage orders')).toBeInTheDocument();
   });
});
