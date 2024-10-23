import Head from 'next/head';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Subscription from './Components/Subscription';
import Info from './Components/Info';
import Footer from './Components/Footer';
import Wine from './Components/Wine.jsx';
import { Suspense } from 'react';
import Loading from './loading';

const HomePage = () => {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Head>
                    <title>Home Page</title>
                    <meta name="description" content="This is the home page of my Next.js app" />
                </Head>
                <Navbar />

                <Hero />
                <Card title="TRENDIGT" subtitle="Artiklar värda att läsa från våra redaktörer" />
                <Subscription />
                <Wine />
                <Card title="NYHETER" subtitle="Den mest populära artikeln i dryckesvärlden" />
                <Info />
            </Suspense>

            <Footer />
        </div>
    );
};

export default HomePage;
