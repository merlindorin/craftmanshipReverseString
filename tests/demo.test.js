const { describe, it } = require('mocha');
const assert = require('assert');

const demo = require('../src/demo');

describe('test demo', () => {
  it('should be true', () =>{
    assert(demo(), 'value must be true');
  }); 
});
