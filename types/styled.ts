export type ExpandStyled<T> = T extends T ? {[P in keyof T]?: T[P]} : never;
