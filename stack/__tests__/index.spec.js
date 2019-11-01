import { createStack } from '..';

describe('Stack', () => {
  it('should be empty', () => {
    const stack = createStack();
    expect(stack.isEmpty()).toEqual(true);
  });
  
  it('should add items', () => {
    const stack = createStack();
    stack.add(1);
    expect(stack.peek()).toEqual(1);
    stack.add(2);
    expect(stack.peek()).toEqual(2);
  });
  
  it('should remove items', () => {
    const stack = createStack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    expect(stack.peek()).toEqual(3);
    stack.remove();
    expect(stack.peek()).toEqual(2);
    stack.remove();
    expect(stack.peek()).toEqual(1);
    stack.remove();
    expect(stack.isEmpty()).toEqual(true);
  });
  
  it('should return stack length', () => {
    const stack = createStack();
    stack.add(1);
    expect(stack.length).toEqual(1);
    stack.add(2);
    expect(stack.length).toEqual(2);
    stack.add(3);
    expect(stack.length).toEqual(3);
  });
});
