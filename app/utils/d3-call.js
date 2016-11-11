import Ember from 'ember';

const d3 = window.d3;

export default Ember.Object.extend({

  init() {
    this.set('tip', d3.tip()
      .attr('class', 'd3-tip')
      .html(function (d) {
        return d;
      })
    );
  },

  call(element) {
    const tip = this.get('tip');
    element.call(tip);
    return element;
  },

  show(){
    this.get('tip').show();
  },

  hide(){
    this.get('tip').hide();
  }
});