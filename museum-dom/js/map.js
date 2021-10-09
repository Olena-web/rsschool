mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",

  zoom: 15.8,
  center: [2.3363864421844482, 48.86086808631856],
  pitch: 47,
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

      geometry: {
        type: "Point",
        coordinates: [2.3363864421844482, 48.86086808631856],
      },
      marker: new mapboxgl.Marker({ color: "#1a1a1a" })
        .setLngLat([2.3363864421844482, 48.86086808631856])
        .addTo(map),
    },
    {
      type: "Feature",

      geometry: {
        type: "Point",
        coordinates: [2.333275079727173, 48.86014812521784],
      },
      marker: new mapboxgl.Marker({ color: "#606060" })
        .setLngLat([2.333275079727173, 48.86014812521784])
        .addTo(map),
    },
    {
      type: "Feature",

      geometry: {
        type: "Point",
        coordinates: [2.3397016525268555, 48.860656334128684],
      },
      marker: new mapboxgl.Marker({ color: "#606060" })
        .setLngLat([2.3397016525268555, 48.860656334128684])
        .addTo(map),
    },
    {
      type: "Feature",

      geometry: {
        type: "Point",
        coordinates: [2.336472272872925, 48.86242796650965],
      },
      marker: new mapboxgl.Marker({ color: "#606060" })
        .setLngLat([2.336472272872925, 48.86242796650965])
        .addTo(map),
    },
    {
      type: "Feature",

      geometry: {
        type: "Point",
        coordinates: [2.333017587661743, 48.86187742611116],
      },
      marker: new mapboxgl.Marker({ color: "#606060" })
        .setLngLat([2.333017587661743, 48.86187742611116])
        .addTo(map),
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
  });
});
