export interface LinkItem {
   id: number | string;
   title: string;
   href: string;
}

export interface LinksGroup {
   id: number | string;
   title: string;
   linkGroup: LinkItem[];
}

export interface IAppPageFooterProps {
   navigation: LinksGroup[];
}
