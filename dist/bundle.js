/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
class LinkedList {
 constructor() {
  this.list = null
 }

  append(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode 
      }
      currentNode.nextNode = new Node(value)
    }
  }

  prepend(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      this.list = new Node(value, this.list)
    }
  }

  get size() {
    let length = 0
    let currentNode = this.list
    if (currentNode===null) {
      return length
    } else  {
      while (currentNode.nextNode!==null) {
        currentNode =  currentNode.nextNode
        length++
      } return length+1
    }
  }

  get head() {
    return this.list
  }

  get tail() {
    if (this.list.nextNode===null) {
      return this.list
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      } return currentNode
    }
  }

  at(index) {
    let currentNode = this.list
    for (let i=0; i<index;i++) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  pop() {
    let currentNode = this.list
    while(currentNode.nextNode!==null) {
      currentNode = currentNode.nextNode
    }
    currentNode = null
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let newList = new LinkedList()
newList.append('val1')
newList.append('val2')
newList.append('val3')
newList.prepend('head')
newList.append('val4')
newList.append('val5')
newList.append('val6')

newList.pop()
console.log(newList)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgTGlua2VkTGlzdCB7XG4gY29uc3RydWN0b3IoKSB7XG4gIHRoaXMubGlzdCA9IG51bGxcbiB9XG5cbiAgYXBwZW5kKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMubGlzdD09PW51bGwpIHtcbiAgICAgIHRoaXMubGlzdCA9IG5ldyBOb2RlKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmxpc3RcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZSBcbiAgICAgIH1cbiAgICAgIGN1cnJlbnROb2RlLm5leHROb2RlID0gbmV3IE5vZGUodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmxpc3Q9PT1udWxsKSB7XG4gICAgICB0aGlzLmxpc3QgPSBuZXcgTm9kZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ID0gbmV3IE5vZGUodmFsdWUsIHRoaXMubGlzdClcbiAgICB9XG4gIH1cblxuICBnZXQgc2l6ZSgpIHtcbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMubGlzdFxuICAgIGlmIChjdXJyZW50Tm9kZT09PW51bGwpIHtcbiAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9IGVsc2UgIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSAgY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgbGVuZ3RoKytcbiAgICAgIH0gcmV0dXJuIGxlbmd0aCsxXG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFxuICB9XG5cbiAgZ2V0IHRhaWwoKSB7XG4gICAgaWYgKHRoaXMubGlzdC5uZXh0Tm9kZT09PW51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5saXN0XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgIH0gcmV0dXJuIGN1cnJlbnROb2RlXG4gICAgfVxuICB9XG5cbiAgYXQoaW5kZXgpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmxpc3RcbiAgICBmb3IgKGxldCBpPTA7IGk8aW5kZXg7aSsrKSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50Tm9kZVxuICB9XG5cbiAgcG9wKCkge1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMubGlzdFxuICAgIHdoaWxlKGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IG51bGxcbiAgfVxufVxuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICB9XG59XG5cbmxldCBuZXdMaXN0ID0gbmV3IExpbmtlZExpc3QoKVxubmV3TGlzdC5hcHBlbmQoJ3ZhbDEnKVxubmV3TGlzdC5hcHBlbmQoJ3ZhbDInKVxubmV3TGlzdC5hcHBlbmQoJ3ZhbDMnKVxubmV3TGlzdC5wcmVwZW5kKCdoZWFkJylcbm5ld0xpc3QuYXBwZW5kKCd2YWw0Jylcbm5ld0xpc3QuYXBwZW5kKCd2YWw1Jylcbm5ld0xpc3QuYXBwZW5kKCd2YWw2JylcblxubmV3TGlzdC5wb3AoKVxuY29uc29sZS5sb2cobmV3TGlzdClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==