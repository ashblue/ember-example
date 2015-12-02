import DS from 'ember-data';

export default DS.Model.extend({
  complete: DS.attr('boolean'),
  createdAt: DS.attr('date')
});
