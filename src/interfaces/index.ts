import { CSSProperties, ReactNode } from 'react';

export type ViewType = 'home' | 'pills';

export interface IComponentFrame {
    view: ViewType;
}

export interface IContainerProps {
    children?: ReactNode;
    className?: string;
}

export interface ILink {
    name: string,
    path: string,
    label: string
}

export interface INFTProps {
    id: string;
    classification: string;
    label: string;
}

export interface ISpinner {
    size?: 'small' | 'regular' | 'large';
    noPadding?: boolean;
    noMargin?: boolean;
    type?: 1 | 2;
    color?: 'primary' | 'secondary';
}

export interface ITextProps {
    children?: ReactNode;
    textType?: string;
    customStyle?: CSSProperties;
}

export interface INftVideo {
    id: string;
}

export interface INftImg {
    id: string;
}

export interface INFTProps {
    id: string;
    classification: string;
    label: string;
}