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

export const Header = () => {
    const imagenes = [slider1, slider2, slider3, slider4]

    return (
			<header>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">
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
						<ul>
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
				</div>
				<Slider imagenes={imagenes} />
			</header>
		);
}
