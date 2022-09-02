uniform float rate0;
uniform float rate1;
uniform float rate2;
uniform float rate3;
uniform float rate4;
uniform float rate5;
uniform float rate6;
uniform float rate7;
uniform float rate8;
uniform float rate9;
uniform vec2 center0;
uniform vec2 center1;
uniform vec2 center2;
uniform vec2 center3;
uniform vec2 center4;
uniform vec2 center5;
uniform vec2 center6;
uniform vec2 center7;
uniform vec2 center8;
uniform vec2 center9;

uniform vec3 color;
uniform vec3 edgeColor;

varying vec2 vUv;


float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}


void main(void) {

  float d = distance(vUv, center0);
  float a = step(rate0, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center1);
  a = step(rate1, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center2);
  a = step(rate2, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center3);
  a = step(rate3, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center4);
  a = step(rate4, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center5);
  a = step(rate5, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center6);
  a = step(rate6, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center7);
  a = step(rate7, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center8);
  a = step(rate8, d);
  if(a <= 0.01) {
    discard;
  }

  d = distance(vUv, center9);
  a = step(rate9, d);
  if(a <= 0.01) {
    discard;
  }

  float edge = 0.97;
  gl_FragColor = vec4(mix(edgeColor * 1.2, color * 0.8, step(vUv.y, edge) * step(vUv.x, edge)), a);
  // gl_FragColor = vec4(color, a);
}