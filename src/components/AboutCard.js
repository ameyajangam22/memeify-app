const AboutCard = (props) => {
	return (
		<>
			<div className="flex-col col-span-1 items-center">
				<div className="flex divide-x-4 items-center">
					<div>
						<h2 className="font-body font-medium uppercase text-xl">
							{props.title}
						</h2>
					</div>
					<div>
						<h2 className="font-body  font-light uppercase text-sm">
							{props.role}
						</h2>
					</div>
				</div>
				<p className="text-justify">{props.children}</p>
			</div>
		</>
	);
};

export default AboutCard;
