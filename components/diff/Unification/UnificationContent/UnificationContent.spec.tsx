import {render, screen, waitFor} from '@testing-library/react';
import {UnificationContent} from './UnificationContent';

describe('[Component] UnificationContent', () => {
   it('should pass props correctly', async () => {
      render(
         <UnificationContent
            button_text="Click"
            description="mock-description"
            index={1}
            title="mock-title"
            image="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
         />,
      );
      expect(screen.getByText('Click')).toBeInTheDocument();
      expect(screen.getByText('mock-description')).toBeInTheDocument();
      expect(screen.getByText('mock-title')).toBeInTheDocument();
   });
});
