import React, {DetailedHTMLProps, ButtonHTMLAttributes} from 'react';

export enum ButtonTypeEnum {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   TERTIARY = 'tertiary',
   QUATERNARY = 'quaternary',
   ADDITIONAL = 'additional',
}

export interface AppButtonProps
   extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
   > {
   icon?: React.ReactNode;
   buttonType?: ButtonTypeEnum;
}
