import React from 'react'
import Logo from '../img/logo-pro.png'

const Header = ({handleSearchChange}) => {
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <img src={Logo} className="w-72" alt="logo" />
            <h1 className="text-center text-4xl mb-10">Search a crypto currency</h1>
            <form>
            <input type="text" className="text-black w-72 h-14 px-3 border-2 rounded-md" placeholder="Search here" onChange={handleSearchChange} />
            </form>
        </div>
    )
}

export default Header
