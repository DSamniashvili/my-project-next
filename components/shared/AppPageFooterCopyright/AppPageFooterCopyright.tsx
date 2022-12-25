import {FC} from 'react';
import {SFooterWrapper, SFooterContent} from './SAppPageFooterCopyright.styled';
import {socialMediaURLs} from '@constant/socialLinks';
import {Facebook} from '@assets/icons/Facebook';
import {Instagram} from '@assets/icons/Instagram';
import {Twitter} from '@assets/icons/Twitter';

export interface FooterCopyrightProps {
   content: string;
}

const AppPageFooterCopyright: FC<FooterCopyrightProps> = ({content}) => {
   return (
      <SFooterWrapper>
         <SFooterContent>{content}</SFooterContent>
         <SFooterContent>
            <a
               href={socialMediaURLs.facebook}
               target="_blank"
               role="link"
               rel="noreferrer">
               <Facebook />
            </a>
            <a
               href={socialMediaURLs.twitter}
               target="_blank"
               role="link"
               rel="noreferrer">
               <Twitter />
            </a>
            <a
               href={socialMediaURLs.instagram}
               target="_blank"
               role="link"
               rel="noreferrer">
               <Instagram />
            </a>
         </SFooterContent>
      </SFooterWrapper>
   );
};

export default AppPageFooterCopyright;
