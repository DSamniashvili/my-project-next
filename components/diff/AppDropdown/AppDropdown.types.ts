export interface IAppDropdown {
   name: string;
   items: IDropdownItem[];
}

export interface IDropdownItem {
   id: string;
   name: string;
   url: string;
}
