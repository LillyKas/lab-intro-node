class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
  
  this.items.push(item) 
  this.items.sort(function(a, b){return a-b}) 
  return this.items
  }

  get(pos) {


if (this.items[pos] <= this.items[this.items.length-1]){
      return this.items[pos]
    } 
    
    else {
      throw new Error('OutOfBounds');
    } 
  }

  max() {

  if( this.items.length === 0){
    throw new Error('EmptySortedList');
  } else {

    return Math.max(...this.items)
  }

  }

  min() {
    if( this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
  
      return Math.min(...this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
