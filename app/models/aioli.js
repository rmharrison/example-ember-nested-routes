import DS from 'ember-data';

export default DS.Model.extend({
  bacon: DS.belongsTo('bacon'),
  mustard: DS.attr('boolean'),
  rating: DS.attr('number')
});
