import { createLinkedList } from '..';

describe('LinkedList', () => {
  it('should have a null head and tail', () => {
    const linkedList = createLinkedList();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(linkedList.length).toEqual(0);
  });
  
  it('should push an item at the end', () => {
    const linkedList = createLinkedList();
    linkedList.push(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toEqual(null);
    expect(linkedList.tail.value).toEqual(1);
    expect(linkedList.length).toEqual(1);
  
    linkedList.push(2);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(2);
    expect(linkedList.length).toEqual(2);
  
    linkedList.push(3);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(3);
    expect(linkedList.length).toEqual(3);
  });
  
  it('should pop an item from the end', () => {
    const linkedList = createLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    
    expect(linkedList.length).toEqual(3);
    linkedList.pop();
    expect(linkedList.tail.value).toEqual(2);
    linkedList.pop();
    expect(linkedList.tail.value).toEqual(1);
    linkedList.pop();
    expect(linkedList.tail).toEqual(null);
    expect(linkedList.head).toEqual(null);
  });
  
  it('should get an item by index', () => {
    const linkedList = createLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    
    expect(linkedList.get(1).value).toEqual(2);
  });
  
  it('should delete an item by index', () => {
    const linkedList = createLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    
    expect(linkedList.delete(-1)).toEqual(null);
    expect(linkedList.delete(4)).toEqual(null);
    
    expect(linkedList.delete(1).value).toEqual(2);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.delete(1).value).toEqual(3);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.delete(0).value).toEqual(1);
    expect(linkedList.length).toEqual(0);
  });
  
  it('should check if is empty', () => {
    const linkedList = createLinkedList();
    
    expect(linkedList.isEmpty()).toEqual(true);
    linkedList.push(1);
    expect(linkedList.isEmpty()).toEqual(false);
    linkedList.pop();
    expect(linkedList.isEmpty()).toEqual(true);
  });
});
