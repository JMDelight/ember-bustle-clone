import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    showStoryForm() {
      this.set('addNewStory', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        time: parseInt(this.get('date')),
        body: this.get('body'),
        image: this.get('image'),
      };
      console.log(params);
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
