import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from '../Img/logo.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<a href="/"><img className="logo" src={logo} alt="1"/></a>
			<nav ref={navRef}>
				<a href="/"><button><p>ГЛАВНАЯ</p></button></a>
				<a href="/projects"><button><p>ПРОЕКТЫ</p></button></a>
				<a href="/services"><button><p>УСЛУГИ</p></button></a>
				<a href="/contacts"><button className="bt-r"><p>КОНТАКТЫ</p></button></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
