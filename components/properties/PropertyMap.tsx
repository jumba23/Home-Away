"use client";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

import { findCountryByCode } from "@/utils/countries";
import CountryFlagAndName from "../card/CountryFlagAndName";
import Title from "./Title";

const PropertyMap = ({ countryCode }: { countryCode: string }) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(countryCode)?.location as [number, number];
  return <div>PropertyMap</div>;
};

export default PropertyMap;
