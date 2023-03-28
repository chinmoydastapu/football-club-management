import React from 'react';
import './Home.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='header-banner w-full h-[87vh] flex justify-center items-center flex-col'>
            <h1 className='text-6xl font-bold'><span className='text-secondary'>Soccer</span> United</h1>
            <p className='capitalize text-gray-400'>A place where we build potential footballers</p>
            <div className='mt-5 text-center'>
                <FaFacebook className='text-2xl hover:text-red-700 hover:text-4xl transition-all'></FaFacebook>
                <FaInstagram className='text-2xl mt-3 hover:text-red-700 hover:text-4xl transition-all'></FaInstagram>
                <FaTwitter className='text-2xl mt-3 hover:text-red-700 hover:text-4xl transition-all'></FaTwitter>
                <FaYoutube className='text-2xl mt-3 hover:text-red-700 hover:text-4xl transition-all'></FaYoutube>
                <FaLinkedin className='text-2xl mt-3 hover:text-red-700 hover:text-4xl transition-all'></FaLinkedin>
            </div>
        </div>
    );
};

export default Home;