import DS from 'ember-data';

export default DS.Model.extend({
  crispy: DS.attr('boolean'),
  rating: DS.attr('number')
});