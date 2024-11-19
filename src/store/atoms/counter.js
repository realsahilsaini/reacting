import {atom} from 'recoil';
import { selector } from "recoil";

//Global Counter Atom
export const counterAtom = atom({
  key: 'counter',
  default: 0
});


//Selector to check if the count is even
export const evenSelector = selector({
  key: 'evenSelector',
  //A function that calculates the value of the selector
  get: ({get}) => {
    const count = get(counterAtom);
    return count % 2 === 0 ;
  }
})

// What is { get }?
// In the selector's get function, Recoil automatically calls the function and passes an object as an argument. This object contains a get function, among other potential properties.

// The object destructuring syntax { get } is used to pull out the get function from that object, so you can easily use it inside the function.