# React Variable Font

This is a port to React of a [beautiful codepen by Juan Fuentes](https://codepen.io/JuanFuentes/pen/rgXKGQ) that I found when researching variable fonts.

[animated gif demo of variable font](variable-font-demo.gif)

[Click here to try it out in codesandbox!](https://githubbox.com/filipeestacio/variable-font)

## Built with
- React
- Styled Components

## Installation
1. Clone the repo
```sh
git clone https://github.com/filipeestacio/variable-font.git
```
2. Install npm packages
```sh
npm install
```
3. Start the app
```sh
npm run start
```
4. Open App.js and change the values in the props. The prop "text" accepts a string, all others accept booleans.
```sh
<Text
  text="Hello World"
  isScale={true}
  isFlex={true}
  isAlpha={true}
  isWidth={true}
  isWeight={true}
  isItalic={true}
/>
```

## License
Distributed under the MIT License.

## Contact
Filipe Estacio - [@filipeestacio](https://twitter.com/FilipeEstacio)

## Acknowledgements
- [Juan Fuentes](https://codepen.io/JuanFuentes)
