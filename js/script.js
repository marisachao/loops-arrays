// loop
var count = 1;
var list = '';

while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");



// array

var myItems = [
  "question one", 
  "question two"
  ];
  
document.write("<p>" + myItems[0] + "</p>" );
