/* 
    All types that are shared across more than one component or page should
    reside in this file.
*/
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

import { LinkProps } from 'next/link';
import { IconType } from 'react-icons';

// TYPES
export type NextPageWithLayout<P = {}> = NextPage<P> & {
    // to be able to use NextPageWithLayout in place of NextPage when creating pages with
    // custom layouts
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

// INTERFACES
export interface NavLink {
    id: number;
    link: LinkProps;
    isClicked?: boolean;
    title: string;
    icon: IconType;
}

// ENUMS
