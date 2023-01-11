// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import { ProgressPlugin } from "webpack";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { useGoogleMap } from "@react-google-maps/api";

// const libraries = ["places"];
// export default function Map() {
//   // Loads the map using API KEY
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCa1yoVQ6mqB2kjzQ8zYVmTE2nXL78_W0M",
//     libraries,
//   });
//   // This returns while map is being loaded
//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     // (<Search />),
//     <GoogleMap
//       zoom={10}
//       center={{ lat: props.lat, lng: props.lng }}
//       mapContainerClassName="map-container"
//     />
//   );
// }
