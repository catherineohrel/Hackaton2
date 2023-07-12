import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import { useEffect, useState } from "react";

export default function Map() {
	const [treasures, setTreasures] = useState([]);
	const [ships, setShips] = useState([]);
	// FETCH API
	const getTreasures = () => {
		axios.get("http://localhost:4242/treasures").then((response) => {
			const treasuresData = response.data;
			setTreasures(treasuresData);
		});
	};
	const getShips = () => {
		axios.get("http://localhost:4242/ships").then((response) => {
			const shipsData = response.data;
			setShips(shipsData);
		});
	};

	useEffect(() => {
		getTreasures();
		getShips();
	}, []);

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
				{treasures.map((treasure) => (
					<Marker position={treasure.coord} icon={customIcon} key={treasure.id}>
						<Popup className="popup-container">
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
						</Popup>
					</Marker>
				))}
				{ships.map((ship) => (
					<Marker position={ship.coord} icon={customIcon2} key={ship.id}>
						<Popup className="popup-container">
							<img src={ship.url} alt="treasure" className="img-popup" />
							<br />
							Name: {ship.name} <br /> Nation: {ship.nation}
							<br />
							Treasure: {ship.cargovalue} or <br /> Crew: {ship.members} members
							<br /> Canons : {ship.canons}
						</Popup>
					</Marker>
				))}
				<div className="menufilter-map">
					<select name="target" id="target">
						<option value="">Ships & treasures</option>
						<option value="">Treasures</option>
						<option value="">Ships</option>
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
