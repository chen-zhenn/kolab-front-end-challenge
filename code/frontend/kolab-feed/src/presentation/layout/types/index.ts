export type SectionBlockType = 'header' | 'content' | 'sidebar' | 'footer'

export interface ILayout {
    children: React.ReactNode;
    type?: SectionBlockType;
}