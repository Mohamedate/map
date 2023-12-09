import { FaMapMarkedAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "./Map.module.css";
import iconImage from "./markerIcon.png";
export default function Map({ latlng, name }) {
  const position = latlng;
  const customeIcon = new Icon({
    iconUrl: iconImage,
    iconSize: [40, 40],
  });
  return (
    <div className=" mt-20 md:mt-40">
      <p className="mb-8 flex items-center justify-center gap-4 text-3xl font-semibold dark:text-vLGrayL md:mb-10 md:text-6xl">
        <FaMapMarkedAlt className=" text-blue-500" />
        {name}
      </p>
      <div className={styles.mapContainer}>
        <MapContainer className={styles.map} center={position} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={customeIcon} position={latlng}>
            <Popup>{name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
