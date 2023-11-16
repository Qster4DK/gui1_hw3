/*
Colby Mei
Nov 2023
GUI1
*/

function generateTable(event) { // get data from labels
  let mincols = parseInt(document.getElementById("mincols").value);
  let maxcols = parseInt(document.getElementById("maxcols").value);
  let minrows = parseInt(document.getElementById("minrows").value);
  let maxrows = parseInt(document.getElementById("maxrows").value);

  console.log(mincols); // tests
  console.log(maxcols);
  console.log(minrows);
  console.log(maxrows);

  var cols = maxcols - mincols; // differences
  var rows = maxrows - minrows;

  console.log(cols); // tests
  console.log(rows);
  // console.log(this);

  if (mincols > maxcols || mincols < -50 || maxcols > 50 || isNaN(cols)){ // checks valid column inputs
    document.querySelector(".column-error").innerHTML = "Please enter column values between -50 and 50. Make sure the maximum column value is larger than the minimum column value.";
    document.querySelector(".column-error").style.display = "block";
    event.preventDefault();
    return false;
 }
  document.querySelector(".column-error").innerHTML = ""; // removes error when right

 if (minrows > maxrows || minrows < -50 || maxrows > 50 || isNaN(rows)){ // checks valid rows
    document.querySelector(".row-error").innerHTML = "Please enter row values between -50 and 50. Make sure the maximum row value is larger than the minimum row value.";
    document.querySelector(".row-error").style.display = "block";
    event.preventDefault();
    return false;
 }
  document.querySelector(".row-error").innerHTML = ""; // removes error when right

  var html = "<thead> <tr> <th id=\"brick\"> </th>"; // sets table

  for (var i = minrows; i <= maxrows ;i++) { // top header row
    html += "<th>" + i + "</th>";
  }
  html += "</tr> </thead> <tbody> ";

  for (var i = mincols; i <= maxcols; i++){
    html += "<tr> <th>" + i + "</td>"; // left header column

      for(var j = minrows; j <= maxrows; j++){
        html += "<td>" + i*j + "</td>"; // comutes multiplication
        console.log("data: " + i*j); // tests
      }

    html += "</tr>"; // ends row
  }
  html += "</tbody>"; // ends table

  console.log(html); // tests
  console.log(document.getElementById("table"));
  document.getElementById("table").innerHTML=html; // updates table in html
}
