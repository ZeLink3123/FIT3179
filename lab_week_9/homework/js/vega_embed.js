var map_spec = "js/map_chloropleth_anime_popularity_2024.vg.json";
vegaEmbed("#world-map", map_spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);