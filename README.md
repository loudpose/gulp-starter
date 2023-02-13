# Gulp App Starter

Frontend environment for building JavaScript applications using
[Gulp](https://www.npmjs.com/package/gulp)

Includes basic functionallity such as html, css, js compilation & minification.
Fonts convertion. Images optimization and convertion to webp. Deployement to web
via FTP.

## Usage

### Development

Starts local server, dynamically serves files.

```
npm run start
```

### Build for production

Creates a minified output in the dist folder.

```
npm run build
```

### Optional features

Archive the dist folder contents.

```
npm run zip
```

Build the dist folder, and then deploy it to server via FTP

```
npm run ftp
```

Takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of
several types:

```
npm run svgSprive
```

## Misc

Replace with your own code and install other packages as needed.
