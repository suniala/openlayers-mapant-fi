// EPSG:3857: Web Mercator, OpenStreetMap, Bing Maps or Google Maps.
const pWebM = 'EPSG:3857';

// EPSG:4326: World Geodetic System 1984
const pWGS = 'EPSG:4326';

// [lon, lat]
const pisteWGS = [23.966000278, 61.594497778];
const pisteWebM = ol.proj.transform(pisteWGS, pWGS, pWebM)

const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                projection: pWebM,
                url: 'https://wmts.mapant.fi/wmts_EPSG3857.php?z={z}&x={x}&y={y}',
                crossOrigin: 'anonymous',
                attributions: '<a href="http://www.maanmittauslaitos.fi/en/digituotteet/laser-scanning-data" target="_blank">Laser scanning</a> and <a href="http://www.maanmittauslaitos.fi/en/digituotteet/topographic-database" target="_blank">topographic</a> data provided by the <a href="http://www.maanmittauslaitos.fi/en" target="_blank">National Land Survey of Finland</a> under the <a href="https://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons license</a>.'
            })
        })
    ],
    view: new ol.View({
        center: pisteWebM,
        zoom: 15
    })
});