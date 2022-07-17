import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div className='bg-blue-200 top-0 w-full h-14 flex items-center justify-evenly'>
			<Link to='/' className='text-blue-500 text-2xl text-center'>
				Home
			</Link>
			<Link to='/new' className='text-blue-500 text-2xl text-center'>
				New
			</Link>
		</div>
	)
}

export default Navbar
