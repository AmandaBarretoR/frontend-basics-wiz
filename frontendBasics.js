const form = document.querySelector("form");
const randomArray = [];

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputNum = document.querySelector("input").value;
  if((inputNum < 10 || inputNum > 100) && inputNum !== ""){
        alert('Entre um número válido!');
  } else{ 
        await randomNum();
        ascOrder();
        descOrder();
        oddAsc();
        evenDesc();
        document.querySelector("input").value = "";
  }
});

const randomNum = () => {
  const inputNum = document.querySelector("input").value;
  const h3RandomNum = document.querySelector("#randomNum");
  for (i = 0; i < inputNum; i++) {
    const num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    randomArray.push(num);
  }
  const p = document.createElement("p");
  p.innerText = `${randomArray}`;
  h3RandomNum.append(p);
};

const ascOrder = () => { 
  randomArray.sort(function(a, b){
      return a -b;
  });
  const h3AscOrder = document.querySelector("#ascOrder");
  const p = document.createElement("p");
  p.innerText = `${randomArray}`;
  h3AscOrder.append(p);
};

const descOrder = () => {
  const descOrderElements = randomArray.reverse();
  const h3DescOrder = document.querySelector("#descOrder");
  const p = document.createElement("p");
  p.innerText = `${descOrderElements}`;
  h3DescOrder.append(p);
};

const oddAsc = () => {
  const ascOddArray = [];
  for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] % 2 !== 0) {
      ascOddArray.push(randomArray[i]);
    }
  }
  ascOddArray.sort();
  const h3oddAsc = document.querySelector("#oddAsc");
  const p = document.createElement("p");
  p.innerText = `${ascOddArray}`;
  h3oddAsc.append(p);
};

const evenDesc = () => {
  const descEvenArray = [];
  for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] % 2 === 0) {
      descEvenArray.push(randomArray[i]);
    }
  }
  descEvenArray.reverse();
  const h3EvenDesc = document.querySelector("#evenDesc");
  const p = document.createElement("p");
  p.innerText = `${descEvenArray}`;
  h3EvenDesc.append(p);
};
