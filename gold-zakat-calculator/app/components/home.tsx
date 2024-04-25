import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div className="container flex flex-col items-center justify-center text-center">
             <h1 className='font-bold'>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
            <h1>May the peace, mercy, and blessings of Allah be with you!</h1>
           
            <p className='text-left font-thin mt-10 pl-9 pr-9'>
            Millions of Muslims may not be aware of the intricate rules regarding Zakat on gold, leading to inaccurate payments. 
            This app aims to address this by providing accurate calculations in line with Islamic Shariah compliance. Overseen by <strong>Shaikh Dr. Mahmoud Safi</strong><br/><br/>
            It simplifies the process for users. 
            It offers accurate calculations based on grams and karat values. 
            <i className='font-light'> For example, if someone has 100 grams of 18 karat gold, the app will convert it to its pure equivalent (24 karat) and calculate 2.5% of the total. </i>
            
            This ensures that Zakat is paid correctly, easing the burden on users and ensuring adherence to religious principles.
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
