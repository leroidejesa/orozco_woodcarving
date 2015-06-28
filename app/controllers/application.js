import Ember from "ember";

var ApplicationController = {
  showingAll: false,
  actions: {
    switch: function() {
      this.set('showingAll', true);
    }
  }
};

export default Ember.ObjectController.extend(ApplicationController);
