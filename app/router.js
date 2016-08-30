import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bacons', function() {
    this.route('bacon', {path: '/:bacon_id'}, function() {
      this.route('aiolis', function() {
        this.route('aioli', {path: '/:aioli_id'});
      });
    });
  });
});

export default Router;
