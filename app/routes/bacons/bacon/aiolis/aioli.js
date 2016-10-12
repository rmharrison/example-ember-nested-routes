import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let bacon = this.modelFor("bacons.bacon");
    return this.store.findRecord('aioli', params.aioli_id, {adapterOptions: {bacon_id: bacon.id}});
  }
});
