import DS from 'ember-data';

export default DS.Model.extend({
  orderName: DS.attr('string'),
  productDescription: DS.attr('string'),
  woodType: DS.attr('string'),
  imageURL: DS.attr('string'),
  isFeatured: DS.attr('boolean'),
  comments: DS.hasMany('comment', {async: true})
});
