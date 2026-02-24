1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById gets the element that has the given id, it is used for single element. getElementsByClassName gets the elements that has the given class name, can be used for multiple items together. querySelector can get element,id,class but it will only select the first one. querySelectorAll can get elements,id,classes its not restricted to first element , can get all elements or classes with same name.

2. How do you create and insert a new element into the DOM?

Answer: First, we have to get the element where the new element will be appended.Then, create new element using document.createElement . we can add innerText or innerHTML to the new element if we want. Then we will insert the new element using appendChild to the parent element. 

3. What is Event Bubbling? And how does it work?

Answer:Event Bubbling is when an event happens on an element, it goes up to its parent element. And then it goes to the grandparent and so on till the top. First the event fires on the target element we clicked. Then it triggers the same event on its parent elements one by one.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:Event Delegation is a technique where we put a single event listener on a parent element instead of putting listeners on all the child elements. It is useful because it saves memory since we use fewer event listeners. Also if we add new child elements later, we don't need to attach new listeners to them because the parent handles it.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:preventDefault stops the default behavior of an element. For example it stops a link from opening a new page or stops a form from reloading the page when submitted. stopPropagation stops the event from bubbling up to the parent elements. So if we click a button, the parent div will not know about the click event.