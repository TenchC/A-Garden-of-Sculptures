// 

export const spCode =  `
let scale = 2.0;
let s = getSpace();
let n = 0.3*noise(scale * s + time);
let n2 = 0.3*noise(scale * s-0.1 + time+3);

metal(0.0);
shine(0.0);
color(vec3(0.0));

boxFrame(vec3(0.7),  n);

mixGeo(abs(cos(time)));
rotateY(getRayDirection().y *-1+time);
rotateZ(getRayDirection().z * 3+time);

metal(0.0);
shine(0.0);
color(vec3(0.0));
sphere(.5 + (n*-1/3));
`;