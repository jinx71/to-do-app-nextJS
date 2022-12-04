import React from 'react';
import Link from 'next/link'
const Navigation = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">To Do App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href="/home">Home</Link></li>

                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">Signup</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;