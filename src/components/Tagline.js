import { motion } from "framer-motion";
const Tagline = () => {
	return (
		<>
			<div className="mt-8 font-body font-bold text-center text-2xl md:text-4xl">
				Make memes on the fly with
				<motion.div
					className="font-brand text-6xl font-bold md:text-9xl"
					animate={{ y: [null, -10, 0], opacity: [0, 0.25, 0.75, 1] }}
					// transition={{ ease: "easeIn", duration: 1 }}
				>
					<h2 className="text-pink-500">Memeify</h2>
				</motion.div>
			</div>
		</>
	);
};

export default Tagline;
