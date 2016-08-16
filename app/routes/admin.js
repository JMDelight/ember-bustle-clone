import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
  actions: {

    update(story, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
      this.transitionTo('admin');
    },
    delete(story) {
      if (confirm('Are you sure you want to delete this story?')) {
        story.destroyRecord();
        this.transitionTo('admin');
      }
    },
    save3(params) {
      var newStory = this.store.createRecord('story', params);
      console.log(newStory);
      newStory.save();
      this.transitionTo('admin');
    }
  }
});
