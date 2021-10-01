import { motion } from "framer-motion";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";

import { ReactComponent as Doge } from "../icons/doge.svg";
const Main = () => {
	return (
		<>
			<div className="z-0 bg-gray-100 min-h-screen pattern">
				<Navbar page="main" />
				<hr />
				<div className="grid grid-cols-1 md:grid-cols-2 mt-2 items-center ">
					<div className="col-span-1 justify-center items-center">
						<Tagline />
					</div>
					<motion.div
						animate={{
							y: [null, -100, 0],
							opacity: [0, 0.25, 0.75, 1],
						}}
						whileTap={{ rotate: [null, -20, 20, null] }}
						whileHover={{ rotate: [null, -20, 20, null] }}
						className="col-span-1 justify-center items-center"
					>
						<Doge />
					</motion.div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 ">
					<HomeCard heading="Make some memes">
						<p className="text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
							mollitia quaerat ad voluptatibus debitis dignissimos magni modi
							iste eum accusamus. Eveniet minus cum dolores saepe.
						</p>
					</HomeCard>
					<HomeCard heading="Look at memes">
						<p className="text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
							mollitia quaerat ad voluptatibus debitis dignissimos magni modi
							iste eum accusamus. Eveniet minus cum dolores saepe.
						</p>
					</HomeCard>
					<HomeCard heading="I'll add something here">
						<p className="text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
							mollitia quaerat ad voluptatibus debitis dignissimos magni modi
							iste eum accusamus. Eveniet minus cum dolores saepe.
						</p>
					</HomeCard>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Main;
