import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import { useEffect, useState } from "react";

export default function Map() {
	const [treasures, setTreasures] = useState([]);

	const [selectedOptions, setSelectedOptions] = useState("all");

	// FETCH API
	const getTreasures = () => {
		axios.get("http://localhost:4242/treasures").then((response) => {
			const treasuresData = response.data;
			setTreasures(treasuresData);
		});
	};

	useEffect(() => {
		getTreasures();
	}, []);

	//FILTERS

	const filteredTreasures = treasures.filter((treasure) => {
		if (selectedOptions === "all") {
			return true;
		} else if (selectedOptions === "treasures" && treasure.cat === "treasure") {
			return true;
		} else if (selectedOptions === "ships" && treasure.cat === "ship") {
			return true;
		} else {
			return false;
		}
	});

	const handleOptionChange = (selectedOption) => {
		setSelectedOptions(selectedOption);
	};
	//CUSTOM LOGO

	const customIcon = L.icon({
		iconUrl: "src/assets/images/treasure.png",
		iconSize: [28, 28], // taille de l'icône en pixels
		iconAnchor: [14, 28], // point d'ancrage de l'icône
	});

	const customIcon2 = L.icon({
		iconUrl: "src/assets/images/ship.png",
		iconSize: [28, 28], // taille de l'icône en pixels
		iconAnchor: [14, 28], // point d'ancrage de l'icône
	});

	return (
		<>
			<MapContainer
				center={[24.551, -77.786]}
				zoom={7}
				scrollWheelZoom={true}
				className="map-container"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{filteredTreasures.map((treasure) => (
					<Marker
						position={treasure.coord}
						icon={treasure.cat === "treasure" ? customIcon : customIcon2}
						key={treasure.id}
					>
						{/* <Popup className="popup-container-treasure">
							<img
								src="src/assets/images/treasure2.png"
								alt="treasure"
								className="img-popup"
							/>
							<br />
							Name: {treasure.name} <br />
							<ul>
								<li>{treasure.preciousstone}</li>
								<li>{treasure.goldcoins} gold coins</li>
								<li>{treasure.silvercoins} silver coins</li>
							</ul>
							<br />
						</Popup> */}
						<Popup className="popup-container-treasure">
							{treasure.cat === "treasure" ? (
								<>
									<img
										src="src/assets/images/treasure2.png"
										alt="treasure"
										className="img-popup"
									/>
									<br />
									Name: {treasure.name} <br />
									<ul>
										<li>{treasure.preciousstone}</li>
										<li>{treasure.goldcoins} gold coins</li>
										<li>{treasure.silvercoins} silver coins</li>
									</ul>
									<br />
								</>
							) : (
								<>
									<img src={treasure.url} alt="ship" className="img-popup" />
									<br />
									Name: {treasure.name} <br />
									Nation: {treasure.nation} <br />
									Treasure: {treasure.cargovalue} or <br />
									Crew: {treasure.members} members <br />
									Canons : {treasure.canons}
									<br />
								</>
							)}
						</Popup>
					</Marker>
				))}

				<div className="menufilter-map">
					<select
						name="target"
						id="target"
						onChange={(event) => handleOptionChange(event.target.value)}
					>
						<option value="all">Ships & treasures</option>
						<option value="treasures">Treasures</option>
						<option value="ships">Ships</option>
					</select>
					<select name="target" id="target">
						<option value=""></option>
						<option value="">Treasures</option>
						<option value="">Ships</option>
					</select>
				</div>
			</MapContainer>
		</>
	);
}
