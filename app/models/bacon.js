import DS from 'ember-data';

export default DS.Model.extend({
  aiolis: DS.hasMany('aioli', { async: true }),
  crispy: DS.attr('boolean'),
  rating: DS.attr('number')
});
