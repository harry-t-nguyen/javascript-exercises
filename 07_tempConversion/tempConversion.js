const convertToCelsius = function(f) {
  let c = 0;
  c = (f-32)*5/9;
  return +c.toFixed(1);
};

const convertToFahrenheit = function(c) {
  let f = 0;
  f = c * 9 / 5 +32;
  return +f.toFixed(1);
};

/* Solution from Odin

const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

*/
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
