import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      carousel: this.store.query('story', {orderBy: 'time', limitToLast: 3}),
      stories: this.store.findAll('story')
  });
  }
});
