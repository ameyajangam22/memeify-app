import AboutCard from "../components/AboutCard";
import Navbar from "../components/Navbar";
import AmeyaImage from "../images/ameya.png";
import MotwaniImage from "../images/motwani.jpg";
const AboutUs = () => {
	return (
		<>
			<Navbar page="about"></Navbar>
			<div className="z-0 bg-gray-100 min-h-screen pattern">
				<div className="p-4 flex flex-col gap-2">
					<div className="grid grid-cols-2 bg-gray-200 p-10 w-4/5 m-auto">
						<img
							src={AmeyaImage}
							alt="img"
							className="w-80 col-span-1 filter grayscale rounded-full "
						/>
						<AboutCard
							sourceImage=""
							title="Ameya Jangam"
							role="Full Stack Developer of Memeify"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium inventore libero explicabo amet id vel, cum possimus,
							repudiandae quis omnis dicta minima rem in commodi natus eius
							cupiditate repellendus labore obcaecati temporibus! Dignissimos
							maiores assumenda ut consequuntur odio modi, excepturi quod odit
							in cumque. Nisi fugit voluptatem adipisci placeat architecto.
						</AboutCard>
					</div>
					<div className="grid grid-cols-2 bg-gray-200 p-10 w-4/5 m-auto">
						<img
							src={MotwaniImage}
							alt="img"
							className="w-80 filter grayscale rounded-full"
						/>
						<AboutCard
							title="Aditya Motwani"
							role="Backend Developer of Memeify"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
							repellat itaque, vero nostrum porro tempore. Numquam consequuntur
							laudantium id repellat accusamus nobis architecto. Alias, quas
							illo natus possimus eligendi, ea minima amet modi, velit fuga aut
							necessitatibus distinctio voluptates dolores dolorem expedita
							blanditiis enim magni aspernatur obcaecati unde! Enim, id!
						</AboutCard>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
