// import Head from 'next/head';
// import Image from 'next/image';

import { NextPageWithLayout } from '../common/types';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';

const Home: NextPageWithLayout = () => {
    return (
        <section>
            <h1 className="text-3xl">
                Welcome to <a href="https://nextjs.org">Next.js</a>
            </h1>
        </section>
    );
};

export default Home;

Home.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    );
};
