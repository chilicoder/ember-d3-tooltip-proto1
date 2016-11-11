import Ember from 'ember';

export function d3On([ type, callback ]) {
  return function(d3el) {
    return d3el.on(type, callback);
  };
}

export default Ember.Helper.helper(d3On);