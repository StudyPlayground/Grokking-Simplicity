// FIXME: npm test /src/utils/groupBy.test.js

/**  01(arr, callback) 02(arr, number) 03(obj, callback)
const groupBy = (arr, callback) => {
  return arr;
};*/

describe('groupBy 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Normal', () => {
      const array = [6.1, 4.2, 6.3];

      const groupBy = (array, makeIntegerFunc) => {
        return array.reduce((acc, cur) => {
          const integerPart = makeIntegerFunc(cur);
          acc[integerPart] = acc[integerPart]
            ? [...acc[integerPart], cur]
            : [cur];
          return acc;
        }, {});
      };

      const grouped = groupBy(array, Math.floor);

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });

    it('case: 2, Advanced', () => {
      const array = [
        [1, 'a'],
        [2, 'a'],
        [2, 'b'],
      ];

      const groupBy = (arr, idx) => {
        return arr.reduce((acc, cur) => {
          const key = cur[idx];
          acc[key] = acc[key] ? [...acc[key], cur] : [cur];
          return acc;
        }, {});
      };

      const [groupedFirstIndex, groupedSecondIndex] = [
        groupBy(array, 0),
        groupBy(array, 1),
      ];

      expect(groupedFirstIndex).toEqual({
        1: [[1, 'a']],
        2: [
          [2, 'a'],
          [2, 'b'],
        ],
      });

      expect(groupedSecondIndex).toEqual({
        a: [
          [1, 'a'],
          [2, 'a'],
        ],
        b: [[2, 'b']],
      });
    });

    it.only('case: 3, Advanced', () => {
      const groupBy = (obj, callback) => {
        const arr = Object.values(obj);
        return arr.reduce((acc, cur) => {
          const integerPart = callback(cur);
          acc[integerPart] = acc[integerPart]
            ? [...acc[integerPart], cur]
            : [cur];
          return acc;
        }, {});
      };

      const grouped = groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor);

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });
  });
});
