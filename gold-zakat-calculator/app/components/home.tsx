import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div className="container flex flex-col items-center justify-center text-center">
            <h1>Welcome to Zakat Calculator</h1>
            <p>
                This application helps you calculate Zakat on your gold holdings easily
                and accurately. Click the button below to proceed.
            </p>


            <Link
                className="btn btn-outline btn-primary w-64 rounded-full btn-sm mt-10"
                href="/calculate">
                Proceed to Zakat calculation
            </Link>
        </div>
    );
};

export default Home;
