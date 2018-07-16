import Component from '@ember/component';
import layout from '../templates/components/star-rating';
import { computed } from '@ember/object';

export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['rating-panel'],
  rating: 0,
  maxRating: 5,
  item: null,
  "on-click": '',
  stars: computed('rating', 'maxRating', function() {
    var fullStars = this.starRange(1, this.get('rating'), 'full');
    var emptyStars = this.starRange(this.get('rating') + 1,
    this.get('maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),
  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },
  actions: {
  setRating: function(newRating) {
    this.get('on-click')({
      item: this.get('item'),
      rating: newRating
    });
  }
  }
});
