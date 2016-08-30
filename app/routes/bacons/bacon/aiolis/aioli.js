import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {name: 'aioli_id', id: params.aioli_id};
  }
});
