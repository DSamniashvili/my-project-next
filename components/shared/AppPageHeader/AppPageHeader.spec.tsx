import {render, screen} from '@testing-library/react';
import PageHeader from './AppPageHeader';

jest.mock('next/router', () => ({
   useRouter: () => ({
      query: {myProp: 'myValue'},
   }),
}));

jest.mock('react-i18next', () => ({
   // this mock makes sure any components using the translate hook can use it without a warning being shown
   useTranslation: () => {
      return {
         t: (str: string) => str,
         i18n: {
            changeLanguage: () => new Promise(() => {}),
         },
      };
   },
}));

describe('[Component] PageHeader', () => {
   it.skip('should render component', () => {
      const {container} = render(<PageHeader />);

      expect(container).toMatchSnapshot();
   });
});
