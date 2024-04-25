import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={"/"}>Homepage</Link></li>
        <li><Link href={"/calculate"}>Zakat Calculation</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Gold Zakat Calculator</a>
  </div>
  <div className="navbar-end">

    <div className="avatar pr-4">
  <div className="w-9 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
  <Image src="/goldLogo.png" alt="gold logo" width={350} height={350} />
  </div>
</div>
  </div>
</div>
  )
}

export default navBar