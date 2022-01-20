import 'mocha';
import { expect } from 'chai';

describe('Hello function', () => {
  it('should return hello world', () => {
    // const result = hello();
    expect('Hello World!').to.equal('Hello World!');
  });
});