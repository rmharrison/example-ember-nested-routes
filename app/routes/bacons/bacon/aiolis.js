import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let bacon = this.modelFor("bacons.bacon");
    //var inflector = Ember.Inflector.inflector;
    //inflector.pluralize('bacon')
    //bacon.constructor.modelName
    return this.store.findAll('aioli', {adapterOptions: {bacon_id: bacon.id}});
  }
});
