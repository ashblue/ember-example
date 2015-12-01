import DS from 'ember-data';

export default DS.Model.extend({
  complete: DS.attr('bool'),
  date: DS.attr('date')
});
