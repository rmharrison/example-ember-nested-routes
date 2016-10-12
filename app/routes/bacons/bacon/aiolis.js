import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let bacon = this.modelFor("bacons.bacon");
    return this.store.query('aioli', { bacon_id: bacon.id });
    //return this.store.findAll('aioli');
  }
});
