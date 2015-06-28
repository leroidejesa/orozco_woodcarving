import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');
  this.resource('products');
  this.resource('process', {path: '/'});
});

export default Router;
