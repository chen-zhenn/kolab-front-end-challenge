export type GridTemplate =  'default' | 'golden-ratio' | 'split-screen'
export type SectionBlockType = 'header' | 'content' | 'sidebar' | 'footer' | 'generic'

export interface ILayout {
    children: React.ReactNode;
    type?: SectionBlockType;
    grid?: GridTemplate;
}