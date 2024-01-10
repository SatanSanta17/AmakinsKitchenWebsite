import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import Image from "next/image";

function Navbar() {
	const user = false;
	return (
		<div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-8 xl:px-24">
			{/* LEFT LINKS */}
			<div className="hidden md:flex gap-4 flex-1">
				<Link href="/">Home</Link>
				<Link href="/menu">Menu</Link>
				<Link href="/">Contact</Link>
			</div>
			{/* LOGO */}
			<div className="text-xl md:font-bold flex-1 md:text-center">
				<Link href="/">AK</Link>
			</div>
			{/* MOBILE MENU */}
			<div className="md:hidden">
				<Menu />
			</div>
			{/* RIGHT LINKS */}
			<div className="hidden md:flex gap-4 justify-end items-center flex-1">
				<div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
					<Image src="/phone.png" alt="" width={20} height={20} />
					<span>123 456 7890</span>
				</div>
				{!user ? (
					<Link href="/login">Login</Link>
				) : (
					<Link href="/orders">Order</Link>
				)}
				<Cart />
			</div>
		</div>
	);
}

export default Navbar;
