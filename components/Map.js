// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";

import { COUNTRIES, STATES, US_CITIES, WORLD_CITIES } from "@/lib/constants";
import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import am4geodata_usaAlbersLow from "@amcharts/amcharts4-geodata/usaAlbersLow";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Map({
  name,
  colorMode,
  showZoom,
  mobile,
  mapType,
  seriesOneFill,
  seriesOneStroke,
  seriesOneLocations,
}) {
  const chart = useRef(null);

  useEffect(() => {
    am4core.useTheme(am4themes_animated); // Theme

    chart.current = am4core.create(name, am4maps.MapChart);

    chart.current.responsive.enabled = true; // Responsive

    if (mapType === "usaAlbersLow") {
      chart.current.geodata = am4geodata_usaAlbersLow;
    } else {
      chart.current.geodata = am4geodata_worldLow;
    }

    chart.current.projection = new am4maps.projections.Miller();

    chart.current.hiddenState.properties.opacity = 0;

    if (mobile) {
      chart.current.chartContainer.wheelable = false;
      chart.current.chartContainer.draggable = false;
      chart.current.chartContainer.resizable = false;
    }

    // Zoom Level
    chart.current.homeZoomLevel = 0.25;
    chart.current.minZoomLevel = 0.75;

    if (showZoom) {
      var zoomControl = new am4maps.ZoomControl();
      chart.current.zoomControl = zoomControl;
      zoomControl.slider.height = 100;
    }

    // Create map polygon series
    let polygonSeries = chart.current.series.push(
      new am4maps.MapPolygonSeries()
    );

    polygonSeries.hiddenInLegend = true;
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;

    if (colorMode === "dark") {
      // Configure Background Color
      chart.current.background.fill = am4core.color("#171923");
      chart.current.background.stroke = am4core.color("#FFFFFF");
      chart.current.background.fillOpacity = 1;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.fill = am4core.color("#D7DEE9");
      polygonTemplate.stroke = am4core.color("#A0AEC0");
    } else {
      // Configure Background Color
      chart.current.background.fill = am4core.color("#FFFFFF");
      chart.current.background.stroke = am4core.color("#A0AEC0");
      chart.current.background.fillOpacity = 1;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.fill = am4core.color("#D7DEE9");
      polygonTemplate.stroke = am4core.color("#A0AEC0");
    }

    /* States */
    let states = chart.current.series.push(new am4maps.MapPolygonSeries());

    if (name === "world") {
      states.name = "Countries";
      states.include = COUNTRIES;
    } else {
      states.name = "States";
      states.include = STATES;
    }

    states.useGeodata = true;
    states.mapPolygons.template.tooltipText = "{name}";
    states.mapPolygons.template.fill = am4core.color("#14375F");
    states.fill = am4core.color("#14375F");

    // Create image series
    let seriesOne = chart.current.series.push(new am4maps.MapImageSeries());

    seriesOne.fill = am4core.color(seriesOneFill);

    // Create a circle image in image series template so it gets replicated to all new images
    let seriesOneTemplate = seriesOne.mapImages.template;
    let circle = seriesOneTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color(seriesOneFill);
    circle.stroke = am4core.color(seriesOneStroke);
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{name}";

    seriesOne.name = "Cities";

    // Set property fields
    seriesOneTemplate.propertyFields.latitude = "latitude";
    seriesOneTemplate.propertyFields.longitude = "longitude";

    if (name === "world") {
      seriesOne.data = WORLD_CITIES;
    } else {
      seriesOne.data = US_CITIES;
    }

    // Legend
    chart.current.legend = new am4maps.Legend();
    chart.current.legend.paddingLeft = 27;
    chart.current.legend.paddingRight = 27;
    chart.current.legend.marginBottom = 15;
    chart.current.legend.width = am4core.percent(90);
    chart.current.legend.valign = "bottom";
    chart.current.legend.contentAlign = "left";

    if (colorMode === "dark") {
      chart.current.legend.labels.template.fill = am4core.color("#A0AEC0");
      chart.current.legend.valueLabels.template.fill = am4core.color("#A0AEC0");
    } else {
      chart.current.legend.labels.template.fill = am4core.color("#000000");
      chart.current.legend.valueLabels.template.fill = am4core.color("#000000");
    }

    let marker = chart.current.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;

    return () => {
      chart.current.dispose();
    };
  }, [
    name,
    colorMode,
    mapType,
    mobile,
    seriesOneFill,
    seriesOneStroke,
    seriesOneLocations,
  ]);

  return <div id={name} style={{ height: mobile ? "350px" : "650px" }} />;
}

Map.propTypes = {
  name: PropTypes.string,
  colorMode: PropTypes.string,
  showZoom: PropTypes.bool,
  mobile: PropTypes.bool,
  mapType: PropTypes.string,
  seriesOneFill: PropTypes.string,
  seriesOneLocations: PropTypes.array,
};

export default Map;
