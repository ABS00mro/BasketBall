let entryOne = document.getElementById("entry-one");
let entryTwo = document.getElementById("entry-two");
let btnOne = document.getElementById("plusOne-one");
let btnTwo = document.getElementById("plusTwo-one");
let btnThree = document.getElementById("plusThree-one");
let btnOne1 = document.getElementById("plusOne-two");
let btnTwo1 = document.getElementById("plusTwo-two");
let btnThree1 = document.getElementById("plusThree-two");
let count = 0;
let count2 = 0;
btnOne.addEventListener("click", () => {
  count += 1;
  entryOne.textContent = count;
});
btnTwo.addEventListener("click", () => {
  count += 2;
  entryOne.textContent = count;
});
btnThree.addEventListener("click", () => {
  count += 3;
  entryOne.textContent = count;
});
btnOne1.addEventListener("click", () => {
  count2 += 1;
  entryTwo.textContent = count2;
});
btnTwo1.addEventListener("click", () => {
  count2 += 2;
  entryTwo.textContent = count2;
});
btnThree1.addEventListener("click", () => {
  count2 += 3;
  entryTwo.textContent = count2;
});
