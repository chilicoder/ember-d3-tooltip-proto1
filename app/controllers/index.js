import Ember from 'ember';
import d3Call from '../utils/d3-call';

export default Ember.Controller.extend({
  init(){
    d3Call.init();
    this._super(arguments);
  },
  chartData: [
    {name: 'foo', value: 12},
    {name: 'bar', value: 33},
    {name: 'baz', value: 67},
    {name: 'boo', value: 23},
    {name: 'faa', value: 13}
  ],
  actions: {
    doMouseOn(value, idx, element){
      console.log('doMouseOn', arguments);
    },
    doMouseOut(){
      console.log('doMouseOut', arguments);
    },
  }
});
