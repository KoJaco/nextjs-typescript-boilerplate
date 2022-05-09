import Head from 'next/head';

import { IMobileLayout } from './MobileLayout.types';

const MobileLayout: React.FC<IMobileLayout> = () => {
    return (
        <>
            <Head>
                <title>Mobile Layout</title>
            </Head>
            <main>
                <div className="container"></div>
            </main>
        </>
    );
};

export default MobileLayout;
