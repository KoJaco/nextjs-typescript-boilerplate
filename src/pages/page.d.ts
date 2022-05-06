import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    // to be able to use NextPageWithLayout in place of NextPage when creating pages with
    // custom layouts
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};
