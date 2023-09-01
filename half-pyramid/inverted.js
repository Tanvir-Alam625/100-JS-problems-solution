// Output:
//*****
//****
//***
//**
//*

const count = 12;
let star = "";
for (let i = count; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
