// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Start to build a table anc clear any existing data
function buildTable(data) {
  tbody.html("");
}

// Loop through each object in the data and append a row ("tr") and cells ("td") for each value in the row
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
  });
});

