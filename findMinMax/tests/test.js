(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });
      
      it('should return [5,8] for [8, 7, 6, 5]', function () {
        expect(findMinMax([8, 7, 6, 5])).toEqual([5, 8]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });
      
      it('should return [124, 12] for [124, 12]', function () {
        expect(findMinMax([124, 12])).toEqual([12, 124]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      
       it('should return [4, 68] for [4, 66, 6, 44, 7, 8, 68]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 8, 68])).toEqual([4, 68]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      
      it('should return [5] for [5, 5, 5, 5]', function () {
        expect(findMinMax([5, 5, 5, 5])).toEqual([4]);
      });
      
      it('should return [7] for [7, 7, 7, 7]', function () {
        expect(findMinMax([7, 7, 7, 7])).toEqual([4]);
      });

    });

  });

})();
