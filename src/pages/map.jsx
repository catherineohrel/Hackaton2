import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import { useEffect, useState } from "react";

export default function Map() {
	const [treasures, setTreasures] = useState([]);
	const [ships, setShips] = useState([]);
	const [selectedOptions, setSelectedOptions] = useState("all");

	// FETCH API
	const getTreasures = () => {
		axios.get("http://localhost:4242/treasures").then((response) => {
			const data = response.data;
			setTreasures(data.filter((item) => item.cat === "treasure"));
			setShips(data.filter((item) => item.cat === "ship"));
		});
	};

	useEffect(() => {
		getTreasures();
		updateShipPositions();
		const interval = setInterval(updateShipPositions, 1000);

		return () => clearInterval(interval);
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

	//DEPLACEMENT MARKER BATEAUX
	const updateShipPositions = () => {
		setShips((prevShips) => {
			return prevShips.map((ship) => {
				const { coord, speed, heading } = ship;
				const [lat, lng] = coord;

				// Calculer le déplacement en fonction de la vitesse et de la direction
				const deltaTime = 5000; // Intervalle de temps en millisecondes
				const distance = speed * deltaTime * 10;
				const latDelta =
					(distance / 111000) * Math.cos((heading * Math.PI) / 180);
				const lngDelta =
					(distance / 111000) * Math.sin((heading * Math.PI) / 180);

				// Mettre à jour les coordonnées du bateau
				const newLat = lat + latDelta;
				const newLng = lng + lngDelta;

				return {
					...ship,
					coord: [newLat, newLng],
				};
			});
		});
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
					<Marker position={treasure.coord} icon={customIcon} key={treasure.id}>
						<Popup className="popup-container-treasure">
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
				{selectedOptions !== "treasures" &&
					ships.map((ship) => (
						<Marker position={ship.coord} icon={customIcon2} key={ship.id}>
							<Popup>
								<img src={ship.url} alt="ship" className="img-popup" />
								<br />
								Name: {ship.name} <br />
								Nation: {ship.nation} <br />
								Treasure: {ship.cargovalue} or <br />
								Crew: {ship.members} members <br />
								Canons : {ship.canons} pieces
								<br />
							</Popup>
						</Marker>
					))}

				<div className="menufilter-map">
					<select
						name="target"
						id="target"
						onChange={(event) => handleOptionChange(event.target.value)}
					>
						<option value="all" className="title-filter">
							Ships and Treasures
						</option>
						<option value="treasures">Treasures</option>
						<option value="ships">Ships</option>
					</select>
				</div>
			</MapContainer>
		</>
	);
}
