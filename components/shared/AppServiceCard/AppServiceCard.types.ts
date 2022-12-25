export enum AppServicesEnum {
   LAND = 'LAND',
   AIRFREIGHT = 'AIR-FREIGHT',
   OCEANFREIGHT = 'OCEAN-FREIGHT',
   RAIL = 'RAIL',
}

export interface AppServiceCardProps {
   service: AppServicesEnum;
   description: string;
   linkText: string;
}
