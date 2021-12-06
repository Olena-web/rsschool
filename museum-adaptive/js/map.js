mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",
  zoom: 15.75,
  center: [2.3364, 48.86091],
  pitch: 45,
  bearing: 17.6,
});
let nav = new mapboxgl.NavigationControl({
  showCompass: true,
  showZoom: true,
});
map.addControl(nav, "top-right");

const points = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        icon: "monument",
        title: "",
      },
      geometry: {
        type: "Point",
        coordinates: [2.3363596200942993, 48.86086808631856],
      },
    },
    {
      type: "Feature",
      properties: { icon: "monument", title: "" },
      geometry: {
        type: "Point",
        coordinates: [2.3329210281372066, 48.861665678191514],
      },
    },
    {
      type: "Feature",
      properties: { icon: "monument", title: "" },
      geometry: {
        type: "Point",
        coordinates: [2.333317995071411, 48.860091657242556],
      },
    },
    {
      type: "Feature",
      properties: { icon: "monument", title: "" },
      geometry: {
        type: "Point",
        coordinates: [2.3395943641662598, 48.86069162622254],
      },
    },
    {
      type: "Feature",
      properties: { icon: "monument", title: "" },
      geometry: {
        type: "Point",
        coordinates: [2.3364078998565674, 48.86244914101941],
      },
    },
  ],
};
map.on("load", function () {
  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: points,
    },
    layout: {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top",
    },
  });
});
