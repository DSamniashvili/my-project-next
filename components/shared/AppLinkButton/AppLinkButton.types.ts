export enum ButtonSizes {
   SMALL = 'small',
   LARGE = 'large',
}

export interface AppLinkButtonProps {
   href: string;
   text: string;
   hasArrow?: boolean;
   underline?: boolean;
   size: ButtonSizes;
}
