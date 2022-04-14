---
title: 'Map api'
description: The map section provides the options and methods you can use to manipulate the map.
---

## Map options

| Property | Description | Type | Default |
| :------- | :-----------:  | :-----------: | ------------: |
| `map` | The name of the map you want to work with (Don't forget to import the map first) | `String` | `world` |
| `backgroundColor` | The map's container background color | `String` | `transparent` |
| `draggable` | Change the map scale when dragging | `Boolean` | `true` |
| `zoomButtons` | Show zoom buttons | `Boolean` | `true` |
| `zoomOnScroll` | Zoom the map when wheeling | `Boolean` | `true` |
| `zoomOnScrollSpeed` | The scroll speed when wheeling | `Number` | `3` |
| `zoomMax` | Maximum map zoom | `Number` | `12` |
| `zoomMin` | Minimum map zoom | `Number` | `1` |
| `zoomAnimate` | Animate when zomming the map | `Boolean` | `true` |
| `showTooltip` | Show the tooltip when hovering over a region and marker | `Boolean` | `true` |
| `zoomStep` | The size of step when zooming in/out | `Number` | `1.5` |
| `bindTouchEvents` | Enable touch events in mobile | `Boolean` | `true` |
| `focusOn` | Set focus on a specific region/regions | `Object` | `{}` |

### Focus on

Set focus on a specific region/regions

```js
const map = new jsVectorMap({ 
  focusOn: {
    regions: ['EG', 'SA'],
    animate: true
  },
  // Or a single region
  focusOn: {
    region: 'EG',
    // ...
  }
})
```

## Methods:
<!-- | `setSelected` | Set selected `regions` or `markers` | [markers\|regions `String`, keys `Array`] | [@example](/#) | -->

| Property | Description | Params | Example |
| :------- | :-----------:  | :-----------: | :-----------: |
| `setBackgroundColor` | Set the map's background color. | `String` | [@example](#set-background-color) |
| `getSelectedRegions` | Get the selected regions | `None` | [@example](/docs/regions#get-selected-regions) |
| `clearSelectedRegions` | Clear the selected regions | `None` | [@example](/docs/regions#clear-selected-regions) |
| `getSelectedMarkers` | Get the selected `markers` | `None` | [@example](/docs/markers#get-selected-markers) |
| `clearSelectedMarkers` | Clear the selected `markers` | `None` | [@example](/docs/markers#clear-selected-markers) |
| `addMarkers` | Add a new marker or array of markers | [`Object` \| `Array`] | [@example](/docs/markers#adding-new-markers) |
| `addLine` | Adds new line between two markers | [from `String`, to `String`] | [@example](/docs/lines#add-line) |
| `reset` | Reset the map | `None` | [@example](#reset) |
| `extend` | Extend the map | The map instance `Object` | [@example](#extend) |
| `destroy` | Restroy the map | `None` | [@example](#destroy) |
| `updateSize` | Update the size of the map, useful when resizing the window | `None` | [@example](#update-size) |

### Set background color

Set the map's background color.

```js
const map = new jsVectorMap({})

document.querySelector('button').addEventListener('click', () => {
  map.setBackgroundColor('#f6f6f6')
})
```

### Reset

Reset the map.

```js
const map = new jsVectorMap({})

document.querySelector('button').addEventListener('click', () => {
  map.reset()
})
```

### Extend

Extend the map by adding a method to the map prototype.

```js
const map = new jsVectorMap({})

map.extend('$hello', function (options) {
  const map = this

  // Do some logic...
})

map.$hello({})
```

### Destroy

Destroy the map, by removing the map, tooltip and all event listeners attached to the map.

```js
const map = new jsVectorMap({})

document.querySelector('button').addEventListener(() => {
  map.destroy()
})
```

### Update size

Update the size of the map, useful when resizing the window

```js
const map = new jsVectorMap({
  onLoaded(map) {
    window.addEventListener('resize', () => {
      map.updateSize()
    })
  }
})
```