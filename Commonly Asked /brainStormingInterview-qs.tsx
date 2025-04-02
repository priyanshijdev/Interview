 Which things cause React components to re-render?
- What is useEffect, and what is a case where you might want to use it?
- How can useCallback solve a common issue with JavaScript in React?
- What is React Context and how does it work?
- When would you want to use the useMemo hook?
- How do you decide how to structure your components?

Answer 1:
🧐 What is a necessary and unnecessary re-render?
Necessary re-render — re-render of a component that is the source of the changes, or a component that directly uses the new information. 
  For example, if a user types in an input field, the component that manages its state needs to update itself on every keystroke, i.e. re-render.

Unnecessary re-render — re-render of a component that is propagated through the app via different re-renders mechanisms due to either 
  mistake or inefficient app architecture. For example, if a user types in an input field, and the entire page re-renders on every keystroke, 
   the page has been re-rendered unnecessarily.

When React component re-renders itself?(main)
There are four reasons why a component would re-render itself: state changes, parent (or children) re-renders, context changes, and hooks changes. 
 There is also a big myth: that re-renders happen when the component’s props change.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Answer 2:
useEffect use cases -----
Running once on mount: fetch API data
Running on state change: validating input field
Running on state change: live filtering
Running on state change: trigger animation on new array value
Running on props change: update paragraph list on fetched API data update
Running on props change: updating fetched API data to get BTC updated price
