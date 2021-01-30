// -*- coding: utf-8, tab-width: 2 -*-

function a(h, m, o) { return h.push(parseInt(m.substr(o, 2), 16)); }

function arrays(c) {
  const r = [];
  const g = [];
  const b = [];
  String(c).replace(/[0-9A-Fa-f]{6}/g, function found(m) {
    a(r, m, 0);
    a(g, m, 2);
    a(b, m, 4);
  });
  return [r, g, b];
}

function vtrgb(colors) { return arrays(colors).map(String); }

Object.assign(vtrgb, {
  arrays,
});

export default vtrgb;
