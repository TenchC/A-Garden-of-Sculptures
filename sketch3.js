// 

export const spCode =  `

metal(0.0);
shine(0.0);
color(vec3(0.0));

rotateY(getRayDirection().y*4+time);
rotateZ(getRayDirection().z*1-time);
boxFrame(vec3(.4), .02);

blend(nsin(time)*.2)
grid(1, .2, .04);
`;