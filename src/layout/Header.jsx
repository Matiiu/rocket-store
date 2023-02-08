import { Slider } from "../components/Slider"

import { AiTwotoneHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsCartPlusFill } from "react-icons/bs";
import { FaRocketchat, FaProductHunt } from "react-icons/fa";

import { Link } from "react-router-dom"

import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.jpg'
import slider4 from '../assets/img/slider4.jpg'
import logo from '../assets/img/rocket-icon-vector.png'

export const Header = () => {
	const imagenes = [slider1, slider2, slider3, slider4]

	return (
		<header>
			<div className="flex  gap-3">

				<Slider imagenes={imagenes} />
				<aside className="flex justify-between align-center">
					<nav className="flex flex-col items-center gap-[125px]">
						<figure>
							<img
								src={logo}
								alt="logo"
								width="45"
								height="45"
							/>
						</figure>
						<ul className="flex flex-col gap-6 text-3xl text-white">
							<li >
								<Link to="/" >
									<AiTwotoneHome />
								</Link>
							</li>
							<li>
								<Link to="">
									<HiUserGroup />
								</Link>
							</li>
							<li>
								<Link to="">
									<FaProductHunt />
								</Link>
							</li>
							<li>
								<Link to="">
									<BsCartPlusFill />
								</Link>
							</li>
							<li>
								<Link to="">
									<FaRocketchat />
								</Link>
							</li>
						</ul>
						<ul className="text-white">
							<li>
								<Link to="">Search</Link>
							</li>
							<li>
								<Link to="">Favorites</Link>
							</li>
							<li>
								<Link to="">Login</Link>
							</li>
						</ul>
					</nav>
				</aside>
			</div>
		</header>
	);
}
