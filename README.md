[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/global-fertility-rates?style=flat-square)](/LICENSE.txt)
## Global Fertility Rates

Interactive lists and map of global fertility rates, built with Vue.js and Mapbox. [View working component](https://sean-kelliher-global-fertility-rates.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shots

* Default view, but with Australia selected on map.
![screen shot of project](/screenshots/global-fertility-rates-screenshot1.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

My goal was to build a component that displays fertility rates in nations around the world. With Mapbox, I created a choropleth map of the world with pop-ups for each nation. Click the nation, a pop-up window appears displaying the nation's name and fertility rate. To supplement the map, I added a search bar so users can "look up" the rate of individual nations. I also added a list that displays average fertility rates in each world region, and a list that displays all 227 nations, from high to low. The largest challenge was trying to fully understand Mapbox. It's a complex product, with many features, and vast documentation.

## Acknowledgments

* Fertility data from the CIA's [World Factbook](https://www.cia.gov/the-world-factbook/field/total-fertility-rate/country-comparison/).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Shields from [Shields](https://shields.io).