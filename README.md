The project name is Dev  Stack.

Dev Stack is a React application that helps developers explore technologies and build a stack for their next project. Browse frontend, backend, database, and other tools, then add your favorites to your personal selection.



Technologies Used:

React	
TypeScript	
Tailwind CSS	
React icon
React tostify
Local JSON and Fetch API	


Three Main Features :

1. Explore technologies — View cards with a technology's name, icon, description, category, difficulty, rating, and badge.
2. Build your own stack — Add technologies to Your Stack, see the selected count, and receive a success notification. An added technology's button becomes disabled to prevent duplicate selections.
3. Manage your selection — Remove one technology or clear the whole stack. When the stack is empty, a helpful message appears.


React Questions and Answers:


1. What is JSX, and why is it used in React?

--> JSX lets us write HTML-like markup inside JavaScript. It makes a component's UI easier to describe and lets us include JavaScript values using {}. This project uses TSX files, which support JSX with TypeScript.

2. What is the difference between props and state?

--> Props are data a component receives from its parent. State is data a component remembers and can update.

3. What does the useState hook do, and where did you use it in this project?

--> useState lets a component remember a value between renders. Its setter updates the value and asks React to render the updated UI. In DataMap, I used it to store selected technologies and their count.


4. What does the useEffect hook do, and why did you need it to load the JSON data?

--> useEffect runs code after a component renders to synchronize it with something outside React, such as a network request. It can be used to fetch JSON and save the result in state.
I did not use useEffect in this project. My async loader uses fetch() to load the JSON and returns a Promise. DataMap reads that Promise with use(), while Suspense displays a loading message until the data is ready.

5. Why does every item in a .map() list need a unique key prop?

--> A key helps React recognize each item when the list changes. 

6. What is conditional rendering? Show one place you used it.

--> Conditional rendering means showing different content based on a condition. In YourStackMap, I show an empty message when no technologies are selected. Otherwise, I show the selected count.

7. How do you pass data from a parent to a child, and how does a child send something back?

--> A parent passes data to a child through props. To let the child request a change, the parent also passes a function. The child calls that function with the new value.
In this project, DataMap passes addedCard and setAddedCard to TachCard. When the user adds a technology, TachCard calls the setter to update the parent's state.