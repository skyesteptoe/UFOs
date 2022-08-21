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

// Getting ready to filter table. Starting by grabbing datetime value from filter
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// Check to see if date was entered and filter using that date 
if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
}

// Rebuild the table using the filtered data
// If no date is entered, filteredData will just be original tableData
buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
