var gui = new dat.GUI({name: 'My GUI'});
var Noise = {Noise: 0};
var Scale = {Scale: 1};
var Volume = {Volume: 1};
let spCode;
var b = 1;
var palette = {
    Color: [0, 128, 255 ] // RGB array
  };
gui.add(Noise, 'Noise', 0, 1, .01);
gui.add(Scale, 'Scale', .1, 2, .1);
gui.add(Volume, 'Volume', 0, 2, .1);
gui.addColor(palette, 'Color');