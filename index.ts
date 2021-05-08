import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import Stamen from "ol/source/Stamen";
import View from "ol/View";
import { Group as LayerGroup, Tile as TileLayer } from "ol/layer";
import { LayerSwitcher } from "./layer-switcher";
import { mapSwitcherControl } from "./switcherControl";
var l1 = new TileLayer({
  source: new Stamen({ layer: "watercolor" }),
  visible: false,
});
var l2 = new TileLayer({
  source: new Stamen({ layer: "toner-labels" }),
  visible: true,
});
l1.set("name", "waterColor");
l2.set("name", "labels");
var grp = new LayerGroup({
  layers: [l1, l2],
});
grp.set("name", "grp");

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
      visible: true,
    }),
    grp,
  ],
  target: "map",
  view: new View({
    center: [0, 0],
    zoomFactor: 1.5,
    zoom: 1,
    projection: "EPSG:3857",
    // constrainResolution: true,
  }),
});
map.addControl(new mapSwitcherControl(map));
console.log(map);
