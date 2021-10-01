const HomeCard = (props) => {
	return (
		<>
			<div className="p-2 bg-gradient-to-r from-gray-50  to-gray-100  col-span-1 mb-20 m-auto bg-gray-100  w-4/5 gap-10 h-40">
				<h2 className="font-body font-bold text-center text-lg">
					{props.heading}
				</h2>
				<div ivclassName="font-body p-4 text-sm">{props.children}</div>
			</div>
		</>
	);
};

export default HomeCard;
