export type SectionType = 'brand' | 'navigation' | 'search' | 'profile'

export interface ITopBar {
    children?: React.ReactNode;
    type?: SectionType;
}