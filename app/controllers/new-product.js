import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newProduct = this.store.createRecord('product', {
        orderName: this.get('orderName'),
        productDescription: this.get('productDescription'),
        woodType: this.get('woodType'),
        imageURL: this.get('imageURL'),
        isFeatured: this.get('isFeatured')
      });
      newProduct.save();
      this.transitionToRoute('products');
    }
  }
});
