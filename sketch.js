// 

export const spCode =  `
let scale = 2.0;
let s = getSpace();
let n = 0.1*noise(scale * s + time);

metal(0.0);
shine(0.0);
color(vec3(0.0));

  rotateY(time*-.3);
  rotateX(time*.5);
  torus(0.5, .04);
  blend(nsin(time)*.6);

  sphere(.1+n);

  rotateY(time*.5);
  rotateX(time*-.5);

blend(ncos(time)*.6);
torus(0.7, .04);
`;