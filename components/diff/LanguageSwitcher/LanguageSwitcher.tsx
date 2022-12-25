'use client';
import Link from 'next/link';

type Props = {
   path: string;
};

const LanguageSwitcher: React.FC<Props> = ({path}) => {
   return (
      <nav className="flex gap-2 mb-4">
         <Link href={`/en/${path}`} scroll={false}>
            <p>EN</p>
         </Link>
         <Link href={`/ka/${path}`} scroll={false}>
            <p>KA</p>
         </Link>
      </nav>
   );
};

export default LanguageSwitcher;
