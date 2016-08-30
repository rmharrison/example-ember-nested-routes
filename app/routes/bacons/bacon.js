import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {name: 'drive_id', id: params.drive_id};
  }
});
