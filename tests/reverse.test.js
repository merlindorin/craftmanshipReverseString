const { describe, it } = require('mocha');
const assert = require('assert');

const reverse = require('../src/reverse');

describe('test reverse', () => {
  it('should reverse single letter', () => {
    assert(reverse('a') === 'a');
  });

  it('should reverse palindrome', () => {
    assert(reverse('aba') === 'aba');
    assert(reverse('kayak') === 'kayak');
  });

  it('should reverse two letters', () => {
    assert(reverse('ab') === 'ba');
    assert(reverse('xy') === 'yx');
  });

  it('should reverse any two letters', () => {
    assert(reverse('az') === 'za');
  });

  it('should reverse any three letters', () => {
    assert(reverse('aze') === 'eza');
    assert(reverse('qsd') === 'dsq');
  });

  it('should reverse any four  or more letters', () => {
    assert(reverse('azer') === 'reza');
  });

  it('should reverse no letter', () => {
    assert(reverse('') === '');
  });

  it('should reverse undefined', () => {
    assert(reverse() === '');
  });

  it('should reverse null', () => {
    assert(reverse(null) === '');
  });

  it('should reverse number', () => {
    assert(reverse(123) === '321');
  });
});
