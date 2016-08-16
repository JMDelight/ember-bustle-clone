import Ember from 'ember';

export default Ember.Component.extend({
  editStoryForm: false,
  actions: {
    editStoryForm() {
      this.set('editStoryForm', true);
    },
    update(story) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('editStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
