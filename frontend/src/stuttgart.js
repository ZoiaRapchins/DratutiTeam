import L from 'leaflet';

const train1 = {"geometry": {"type": "Point", "coordinates": [9.1569590000000005, 48.770254999999999]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}};
const train2 = [{"geometry": {"type": "Point", "coordinates": [9.2415950000000002, 48.792172999999998]}, "type": "Feature", "properties": {"delay": 31.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1729249999999993, 48.776229000000001]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1729249999999993, 48.776229000000001]}, "type": "Feature", "properties": {"delay": 39.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1569590000000005, 48.770254999999999]}, "type": "Feature", "properties": {"delay": 39.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1053979999999992, 48.745837000000002]}, "type": "Feature", "properties": {"delay": 41.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1167740000000013, 48.737651]}, "type": "Feature", "properties": {"delay": 41.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1132259999999992, 48.726278999999998]}, "type": "Feature", "properties": {"delay": 41.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.0204300000000011, 48.696909999999995]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.0204300000000011, 48.696909999999995]}, "type": "Feature", "properties": {"delay": 46.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2175309999999993, 48.801377000000002]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1798079999999995, 48.782998999999997]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1132259999999992, 48.726278999999998]}, "type": "Feature", "properties": {"delay": 41.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1798079999999995, 48.782998999999997]}, "type": "Feature", "properties": {"delay": 38.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1662730000000003, 48.772767999999999]}, "type": "Feature", "properties": {"delay": 39.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1662730000000003, 48.772767999999999]}, "type": "Feature", "properties": {"delay": 39.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1569590000000005, 48.770254999999999]}, "type": "Feature", "properties": {"delay": 40.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1053979999999992, 48.745837000000002]}, "type": "Feature", "properties": {"delay": 39.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1167740000000013, 48.737651]}, "type": "Feature", "properties": {"delay": 40.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1083280000000002, 48.717902000000002]}, "type": "Feature", "properties": {"delay": 42.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1083280000000002, 48.717902000000002]}, "type": "Feature", "properties": {"delay": 42.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.0041279999999997, 48.687758000000002]}, "type": "Feature", "properties": {"delay": 45.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2758300000000009, 48.747083000000003]}, "type": "Feature", "properties": {"delay": 31.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2678890000000003, 48.762013000000003]}, "type": "Feature", "properties": {"delay": 31.0, "name": "Train Delay"}}];
const train3 = [{"geometry": {"type": "Point", "coordinates": [9.1691640000000003, 48.692152]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1428659999999997, 48.696505999999999]}, "type": "Feature", "properties": {"delay": 35.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1083280000000002, 48.717902000000002]}, "type": "Feature", "properties": {"delay": 35.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1132259999999992, 48.726278999999998]}, "type": "Feature", "properties": {"delay": 35.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1132259999999992, 48.726278999999998]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1167740000000013, 48.737651]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1167740000000013, 48.737651]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1569590000000005, 48.770254999999999]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1569590000000005, 48.770254999999999]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1662730000000003, 48.772767999999999]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2348580000000009, 48.806422999999995]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2699780000000001, 48.820048999999997]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.3247149999999994, 48.859312000000003]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.3247149999999994, 48.859312000000003]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.3922899999999991, 48.879583000000004]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1691640000000003, 48.692152]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1428659999999997, 48.696505999999999]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1273350000000004, 48.705193000000001]}, "type": "Feature", "properties": {"delay": 35.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1273350000000004, 48.705193000000001]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1083280000000002, 48.717902000000002]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1053979999999992, 48.745837000000002]}, "type": "Feature", "properties": {"delay": 35.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1053979999999992, 48.745837000000002]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1662730000000003, 48.772767999999999]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1729249999999993, 48.776229000000001]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1798079999999995, 48.782998999999997]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2175309999999993, 48.801377000000002]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2348580000000009, 48.806422999999995]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2483269999999997, 48.815269999999998]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2998820000000002, 48.826124]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2998820000000002, 48.826124]}, "type": "Feature", "properties": {"delay": 42.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1926299999999994, 48.690647999999996]}, "type": "Feature", "properties": {"delay": 36.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1729249999999993, 48.776229000000001]}, "type": "Feature", "properties": {"delay": 37.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.1798079999999995, 48.782998999999997]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2175309999999993, 48.801377000000002]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2483269999999997, 48.815269999999998]}, "type": "Feature", "properties": {"delay": 44.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.2699780000000001, 48.820048999999997]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.3549429999999987, 48.868340000000003]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}, {"geometry": {"type": "Point", "coordinates": [9.3549429999999987, 48.868340000000003]}, "type": "Feature", "properties": {"delay": 43.0, "name": "Train Delay"}}];

const TRAINS = [
  train1,
  train2,
  train3,
];


  // 7036, 7085, 7101, 7102, 7150, 7152, 7157, 7159, 7230, 7259, 7312, 7531, 7714];
let layer = null;
let heatLayer = null;

function fakeHeat(map) {
    const myData = [];
    for (let i = -30; i < 30; i++) {
      for (let j = -30; j < 30; j++) {
        myData.push([48.79208 + i / 1000, 9.23218 + j / 1000, 1/Math.abs((i * j + 1)) * Math.random() * 10]);
      }
    }
    if(heatLayer) {
      map.removeLayer(heatLayer);
    }
    heatLayer = L.heatLayer(
      myData, { radius: 30, blur: 0 }).addTo(map);
}

function addToMap(map, id, remove = true) {
  fakeHeat(map);
  if(layer && remove) {
    map.removeLayer(layer);
  }
  layer = L.geoJSON(TRAINS[id]);
  layer.addTo(map);
}


export default {
  addToMap,
}
