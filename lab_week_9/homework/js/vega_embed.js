var map_spec = "js/map_chloropleth_anime_popularity.vg.json";
vegaEmbed("#world-map", map_spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);