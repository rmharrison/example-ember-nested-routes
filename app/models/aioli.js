import DS from 'ember-data';

export default DS.Model.extend({
  mustard: DS.attr('boolean'),
  rating: DS.attr('number')
});
