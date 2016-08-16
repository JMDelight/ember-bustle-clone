import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  time: DS.attr(),
  category: DS.attr(),
  image: DS.attr()
});
