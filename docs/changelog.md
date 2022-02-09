---
title: 'Changelog'
description: Discover all the release notes for the Jsvectormap.
---

## v1.4.4 (latest)

- fix: lines position fail when zooming in/out ([#63](https://github.com/themustafaomar/jsvectormap/issues/63))

## v1.4.3

- refactor: switch addMap, maps, defaults to static ([3b3b13d](https://github.com/themustafaomar/jsvectormap/commit/3b3b13d2a81907dc88dc809b36e9c0c45cf50e7e))
- revert: revert tooltip's css method ([83b7822](https://github.com/themustafaomar/jsvectormap/commit/83b782208d263f9802aded5f4b26c54519fd7e1f))
- fix: touch handlers ([fc4dbe4](https://github.com/themustafaomar/jsvectormap/commit/fc4dbe4dffea50d723f0490dc86c71170fc46f8b))
- chore: cleaning up ([a8be4ef](https://github.com/themustafaomar/jsvectormap/commit/a8be4effb41ea0ef59d802a3d03388fa2e15cccd))
- fix: marker's render function ([5136fae](https://github.com/themustafaomar/jsvectormap/commit/5136fae14f441ff3439ed82590f2a48fe471b60c))

### BREAKING CHANGES

All other maps except `world` and `world_merc` are ignored from the npm package, but it's available on Github, you can download these maps from [Available maps](/docs/available-maps) page.

## v1.4.2

- fix: tooltip not destroyed

## v1.4.0

- refactor: drop dom handler class
- refactor: move tooltip functionality to class [(#53)](https://github.com/themustafaomar/jsvectormap/pull/53)
- fix: fix mouseup event & fix zoom buttons
- refactor: clean up util api
- refactor: refactor directory structure
- fix: fix 'addMarkers' method doesn't work with arrays
- fix(scroll): fix mouse wheel behavior [(#52)](https://github.com/themustafaomar/jsvectormap/pull/52)

### BREAKING CHANGES

In early versions the `map` container was an instance of a custom dom handler class that contains a `delegate` method, now it's just a DOM element, so the `delegate` method won't be available anymore.

```js
const map = new jsVectorMap({
  // ...
  onLoaded: (map) => {
    // ❌ Won't work anymore.
    map.container.delegate('.jvm-region', 'click', (event) => {
      // ..
    })

    // ✅ You will need to define your own event listener, example
    map.container.addEventListener('click', (event) => {
      if (event.target.matches('.jvm-region')) {
        // Do something
      }
    })
  },
  // ...
})
```

## v1.3.3

- fix: dragging the map selects the region (#48)
- fix: eventHandler's off method doesn't delete the reference
- style: correct events names for consistency
- feat: introduce a new event 'onDestroyed'
- fix(add-markers): add markers method not working with object