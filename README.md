# Gulp Starter

<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

Frontend environment for building JavaScript applications using Gulp
([npm](https://www.npmjs.com/package/gulp))

## Contents

- **PUG, SCSS, JS — compilation & minification**
- **IMAGES — optimization & convertion to webp**
- **FONTS — convertion OTF > TTF > WOFF & fonts.scss generation**
- **SVG - svgSprite generation**
- **FTP - deployement to web using FTP**

## Usage

### Development

Starts local server, dynamically serves files.

```
npm run start
```

### Build for production

Creates output in the "dist" folder. Use ":prod" for production, and ":dev" for
development.

```
npm run build:dev
npm run build:prod
```

## Additional features

## FONTS

Converts fonts from OTF to TTF. Then converts from TTF to WOFF & WOFF2. Then
creates fonts.scss file. If fonts.scss already exists it will NOT overwrite it.
So delete your fonts.scss if you need a new one.

```
npm run fonts:convert
```

### FTP

Build the dist folder, and then deploy it to server via FTP

```
npm run deploy:ftp
```

### SVG

Takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of
several types:

```
npm run svgSprive
```

### ZIP

Archive the dist folder contents.

```
npm run zip
```

## Misc

Replace with your own code and install other packages as needed.
