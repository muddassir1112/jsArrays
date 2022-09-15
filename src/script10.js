var arr = [{Company: "Samsung",  Model: "Galaxy",  Memory: 64,  Price: 15000,},
{Company: "Nokia",  Model: "S730",  Memory: 128,  Price: 22000},
{Company: "Xiaomi",  Model: "Note",  Memory: 32,  Price: 12000},
{Company: "Motoroala",  Model: "G10",  Memory: 32,  Price: 15000},
{Company: "Apple",  Model: "S12",  Memory: 64,  Price: 25000}
  ];
  
  function Filter() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
  
    var html =
      "<table border=1><tr><th>Company</th><th>Model</th> <th>Memory(GB)</th><th>Price(RS)</th>";
    document.getElementById("demo").innerHTML = html;
    arr.forEach((element) => {
      if (element.Price >= min && element.Price <= max) {
        html += "<tr><td>" + element.Company + "</td><td>" + element.Model + "</td> <td >" + element.Memory + "</td> <td >" + element.Price + "</td> </tr>";
        document.getElementById("demo").innerHTML = html;
      }
    });
  
    html += "</table>";
  }
