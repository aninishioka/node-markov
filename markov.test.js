'use strict';

const { MarkovMachine } = require('./markov')

describe('test getChains function', function() {
  test('test create chains successfully', function() {
    let machine;
    machine = new MarkovMachine("the cat in the hat");
    expect(machine.chains).toEqual({
      'the': ['cat', 'hat'],
      'cat': ['in'],
      'in': ['the'],
      'hat': [null]
    })
  });
})