import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../icons/logo-light.svg";

const Navbar = (props) => {
	return (
		<>
			<div className="flex items-center">
				<a href="/" className=" cursor-pointer w-36 md:w-48 ">
					<Logo />
				</a>
				<ul className="flex ml-auto mr-10 gap-10 ">
					<li>
						<motion.a
							href="#"
							className="font-body font-medium text-sm md:text-base uppercase transition duration-300"
						>
							Login
						</motion.a>
					</li>
					{props.page !== "about" && (
						<li>
							<a
								href="/about-us"
								className="font-body font-medium text-sm md:text-base uppercase transition duration-300"
							>
								About Us
							</a>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
