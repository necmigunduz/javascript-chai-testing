var expect = chai.expect;

let obj1, obj2, obj3 = new Object(null);

beforeEach(function () {
  let obj1 = {
    name: "Foo",
    num: 33,
  };
  let obj2 = {
    test: "thing",
    num: 55,
  };
  let obj3 = {
    name: "Foo",
    test: "thing",
    num: 55,
  };
});

// WRITE YOUR TESTS HERE!
describe("replaceWith", function () {
  it("changes old with new", function () {
    expect(replaceWith("awesome", "e", "z")).equal("awzsomz");
  });
});

describe("expand", function () {
  it("takes an array and a number and returns a copy of the array with as many numbers as specified", function () {
    expect(expand([1, 2, 3], 3)).eql([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
});

describe("expand", function () {
  it("takes in any number of arguments and returns `true` if all of them are numbers", function () {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6)).to.be.true;
  });

  it("takes in any number of arguments and returns `false` if at least one is not number", function () {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).to.be.false;
  });
});

describe("mergeArrays", function () {
  it("takes in two arrays and returns one array with the values sorted", function () {
    expect(mergeArrays([2, 1], [3, 4])).eql([1, 2, 3, 4]);
  });
});

describe("mergeObjects", function () {
  it("takes in two objects and return an object with the keys and values combined", function () {
    expect(mergeObjects(obj1,obj2)).eql(obj3);
  });
});
