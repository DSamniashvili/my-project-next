import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

// Client component, which is responsible for changing a theme from dark to light or vice versa.
const ToggleTheme = () => {
   const [mounted, setMounted] = useState<boolean>(false);
   const {theme, setTheme} = useTheme();

   useEffect(() => setMounted(true), []);

   const handleToggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
   };

   if (!mounted) return null;

   return <button onClick={handleToggleTheme}>Change the theme!</button>;
};

export default ToggleTheme;
