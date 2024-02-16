const assert = require('assert');
const tasks = require('../src/tasks');
it.optional = require('../extensions/it-optional');

describe('unit_tests', () => {
  it.optional('get array return average array`s values', () => {
    assert.equal(tasks.average([0, 0, 0, 0]), 0);
    assert.equal(tasks.average([10000, 10000, 10000, 10000]), 10000);
    assert.equal(tasks.average([0.1, 0.2, 0.3, 0.2]), 0.2);
    assert.equal(
      tasks.average([0.365126559, 0.354496625, 0.1874256, 0.62146]),
      0.38
    );
    assert.equal(
      tasks.average([123456789, 123456788, 12356787, 123456786]),
      95681787.5
    );
  });
  it.optional('get two arrays return info compare arrays by average', () => {
    assert.equal(
      tasks.compareArraysByAverage([0.1, 0.2, 0.3, 0.5], [0.1, 0.2, 0.3, 0.2]),
      'Первый список имеет большее среднее значение'
    );
    assert.equal(
      tasks.compareArraysByAverage(
        [123456789, 123456788, 12356787, 123456786],
        [123456789, 123456788, 12356787, 123456786]
      ),
      'Средние значения равны'
    );
    assert.equal(
      tasks.compareArraysByAverage([0.1, 0.2, 0.3, 0.5], [0.1, 0.2, 0.3, 0.2]),
      'Первый список имеет большее среднее значение'
    );
    assert.equal(
      tasks.compareArraysByAverage([0.1, 0.2, 0.3, 0.5], [0.1, 0.2, 0.3, 0.2]),
      'Первый список имеет большее среднее значение'
    );
    assert.equal(
      tasks.compareArraysByAverage(
        [0.365126559, 0.354496625, 0.1874256, 0.72146],
        [0.365126559, 0.354496625, 0.1874256, 0.62146]
      ),
      'Первый список имеет большее среднее значение'
    );
    assert.equal(
      tasks.compareArraysByAverage(
        [0.021, 0.222, 0.3845, 0.54523],
        [0.021, 0.2223, 0.385, 0.54]
      ),
      'Средние значения равны'
    );
  });
});
