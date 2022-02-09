---
title: 'Introduction'
description: Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization..
---

This project is a deeply modified version of [jvectormap](https://github.com/bjornd/jvectormap)
and was created to help developers who no longer use jQuery in their projects.

Jsvectormap supports all modern brownsers including IE9+.

<vectorMap
  class="mt-8"
  :options="{
    selectedMarkers: [1,4],
    markers: [
      { name: 'Palestine', coords: [31.9474,35.2272] },
      { name: 'Russia', coords: [61.524,105.3188] },
      { name: 'Canada', coords: [56.1304,-106.3468] },
      { name: 'Greenland', coords: [71.7069,-42.6043] },
      { name: 'Brazil', coords: [-14.235,-51.9253] }
    ],
    markerStyle: {
      initial: { fill: '#5c5cff' },
      selected: { fill: '#ff5050' }
    }
  }">
</vectorMap>