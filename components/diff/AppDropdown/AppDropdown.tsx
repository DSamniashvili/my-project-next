import {DropdownArrow} from '@assets/icons/DropdownArrow';
import React, {FC} from 'react';
import {
   SAppHeaderDropdownTitle,
   SAppHeaderDropdownTitleContainer,
   SAppHeaderNavigationDwopdown,
   SDropdownContent,
} from './AppDropdown.styled';
import {useTranslation} from 'next-i18next';
import {IAppDropdown, IDropdownItem} from './AppDropdown.types';

const AppDropdown: FC<IAppDropdown> = ({name, items}) => {
   const {t} = useTranslation();
   return (
      <SAppHeaderNavigationDwopdown>
         <SAppHeaderDropdownTitleContainer className="dropdown-title">
            <SAppHeaderDropdownTitle>
               {t(`${`${name}`}`)}
            </SAppHeaderDropdownTitle>
            <DropdownArrow />
         </SAppHeaderDropdownTitleContainer>
         <SDropdownContent className="dropdown-content">
            {items.map(({id, name, url}: IDropdownItem) => (
               <a href={url} key={id}>
                  {name}
               </a>
            ))}
         </SDropdownContent>
      </SAppHeaderNavigationDwopdown>
   );
};

export default AppDropdown;
