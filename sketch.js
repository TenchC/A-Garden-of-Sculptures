var spCode = `
rotateY(mouse.x * PI / 2 + time*.5);
rotateX(mouse.y * PI / 2);
metal(.5);
shine(.4);
color(0.0, 0.0,`+ Scale.Scale+`);
rotateY(getRayDirection().y*4+time)
boxFrame(vec3(.4), .02);
expand(.02);
blend(nsin(time)*.6)
sphere(.2);
`

export{spCode};
