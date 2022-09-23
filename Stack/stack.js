class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(ele) {
    this.items[this.count] = ele;
    console.log(`${ele} Pushed To ${this.count}`);
    this.count++;
  }
  pop() {
    if (this.count === 0) return;
    let removeEle = this.items[this.count - 1];
    console.log(`Removed ${removeEle}`);
    this.count--;
    return removeEle;
  }
  isEmpty() {
    const checkEmpty =
      this.count === 0 ? "Stack Is Empty" : "Stack Is Not Empty";
    console.log(checkEmpty);
    return checkEmpty;
  }
  length() {
    console.log(this.count);
  }
}

const stack = new Stack();

stack.isEmpty();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.isEmpty();
stack.length();
