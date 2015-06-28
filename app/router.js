import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');
  this.resource('orders');
  this.resource('wood-options');
  this.resource('faq');
  this.resource('getquote');
  this.resource('process', {path: '/'});
});

export default Router;
