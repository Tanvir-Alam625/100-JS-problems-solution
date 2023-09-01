// Example Output:
//*****
//*****
//*****
//*****
//*****
//*****
//*****

const rows = 6;
const columns = 5;
let star = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
