import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <nav className="navbar bg-black sticky top-0 z-10">
            <div className="navbar w-fit lg:ml-12">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/players'>Players</Link></li>
                        <li><Link to='/coach-info'>Coach Info.</Link></li>
                        <li><Link to='/player-release'>Available For Release</Link></li>
                    </ul>
                </div>
                <Link to='/home' className="text-2xl"><span className='text-primary font-bold'>Soccer</span>United</Link>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal p-0 mx-auto">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/players'>Players</Link></li>
                    <li><Link to='/coach-info'>Coach Info.</Link></li>
                    <li><Link to='/player-release'>Available For Release</Link></li>
                </ul>
            </div>
            <Link to='/player-contract' className="btn btn-secondary btn-outline mr-10">Contract A Player?</Link>
        </nav>
    );
};

export default HeaderNav;