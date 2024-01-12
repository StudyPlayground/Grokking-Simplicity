// FIXME: npm test /src/utils/unique.test.js

//isSorted ? new Set : 배열 순회 및 중복 제거
const unique = (arr, isSorted) => {
  const uniqueSorted = () => [...new Set(arr)];
  const uniqueUnsorted = () =>
    arr.reduce((acc, cur) => {
      return acc.indexOf(cur) !== -1 ? acc : [...acc, cur];
    }, []);

  return !!isSorted ? uniqueSorted(arr) : uniqueUnsorted(arr);
};

describe('unique 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Normal', () => {
      const [firstArray, secondArray] = [
        [2, 1, 2],
        [1, 2, 1],
      ];
      const firstUniqueArray = unique(firstArray);
      const secondUniqueArray = unique(secondArray);

      expect(firstUniqueArray).toEqual([2, 1]);
      expect(secondUniqueArray).toEqual([1, 2]);
    });

    it('case: 2, Advanced', () => {
      const [firstArray, secondArray, thirdArray] = [
        [1, 2, 3],
        [1, 1, 2, 2, 3],
        [1, 2, 3, 3, 3, 3, 3],
      ];
      const firstUniqueArray = unique(firstArray, undefined, true);
      const secondUniqueArray = unique(secondArray, undefined, true);
      const thirdUniqueArray = unique(thirdArray, undefined, true);

      expect(firstUniqueArray).toEqual([1, 2, 3]);
      expect(secondUniqueArray).toEqual([1, 2, 3]);
      expect(thirdUniqueArray).toEqual([1, 2, 3]);
    });

    it.only('case: 3, Advanced', () => {
      const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
      ];

      const unique = (objects) => {
        return objects.reduce((acc, cur) => {
          const isDuplicate = acc.some((obj) =>
            Object.entries(obj).every(([key, value]) => cur[key] === value)
          );

          return isDuplicate ? acc : [...acc, cur];
        }, []);
      };

      const uniqueObjects = unique(objects);

      expect(uniqueObjects).toEqual([
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ]);
    });
  });
});
