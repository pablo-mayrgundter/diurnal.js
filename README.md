# diurnal.js

[Live Demo Here](https://pablo-mayrgundter.github.io/diurnal.js/)

[![Node.js Package](https://github.com/pablo-mayrgundter/diurnal.js/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/pablo-mayrgundter/diurnal.js/actions/workflows/npm-publish.yml)


Diurnal is a small (2KB) utility to switch stylesheets for bright and
dark page styles.  A cookie is set to keep the setting for one day.

- **Bright** ☀

If you're coding by the pool, remember to keep your laptop dry.  But
also, it's gonna be hard to see the screen with a dark background and
light text.

*Switch to bright mode and enjoy the Sun!*

- **Dark** ☼

If you're up late, stuck on a coding binge or lost in dependency hell,
be sure to mind your vision with a brighter screen (yes, it helps you
focus), but no so bright it gives you a headache.

*Switch to dark mode and chill into the night.*

## Browser Compatibility

- Chrome 88/Brave 1.19 - looks great
- Safari 13.1 - looks good, sun symbol in controls is slightly smaller and lower than Chrome
- Firefox 84 - looks fine, sun symbol slightly smaller still

Patches to normalize cross browser appreciated!

## Build

Diurnal uses a local directory structure to allow direct browser loading of the source via index.html.

A distribution may be built by using rollup:

```
npm i
npm run build

> @pablo-mayrgundter/diurnal.js@1.0.4 build
> rollup -c --environment INCLUDE_DEPS,BUILD:production

diurnal.module.js → diurnal.js...
created diurnal.js in 49ms
```

This will include all deps into diurnal.js.
