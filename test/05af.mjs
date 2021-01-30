// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import equal from 'equal-pmb';

import vtrgb from '../vtrgb';
import spec from './05af.spec.json';

spec.reduce(function verify(kept, upd) {
  const t = { ...kept, ...upd };
  console.info('Test: ' + t.name);
  equal.named(t.name, () => equal(vtrgb(t.input), t.expect));
  return t;
}, null);

console.info('+OK All tests passed');
