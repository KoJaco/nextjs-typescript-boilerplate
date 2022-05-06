import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';

// import { NextPageWithLayout } from './page'

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';

const Home: NextPage = () => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1>
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
