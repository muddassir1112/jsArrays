var arr = [{Company: "Samsung",  Model: "Galaxy",  Memory: 64,  Price: 15000,  Quantity: 20},
{Company: "Nokia",  Model: "S730",  Memory: 128,  Price: 22000,  Quantity: 15},
{Company: "Xiaomi",  Model: "Note",  Memory: 32,  Price: 12000,  Quantity: 21},
{Company: "Motoroala",  Model: "G10",  Memory: 32,  Price: 15000,  Quantity: 13},
{Company: "Apple",Model: "S12",Memory: 64,Price: 25000,Quantity: 18}
  ];
  
  function Show() {
    let table =
      "<table border=1><tr><th>Company</th><th>Model</th> <th>Memory(GB)</th><th>Price(RS)</th><th>Quantity</th>";
    arr.forEach((element) => {
      table +=
        "<tr><td>" +
        element.Company +
        "</td><td>" +
        element.Model +
        "</td> <td>" +
        element.Memory +
        "</td> <td>" +
        element.Price +
        "</td> <td> " +
        element.Quantity + "</td></tr>";
      document.getElementById("demo").innerHTML = table;
    });
  
    table += "</table>";
  }
  
  function update() {
    let item = document.getElementById("data").value;
    let quantity = document.getElementById("quan").value;
    if (item == "Samsung") {
        arr[0].Quantity= parseInt(quantity);
    } else if (item == "Nokia") {
        arr[1].Quantity= parseInt(quantity);
    } else if (item == "Xiaomi") {
        arr[2].Quantity= parseInt(quantity);
    } else if (item == "Motoroala") {
        arr[3].Quantity= parseInt(quantity);
    } else if (item == "Apple") {
        arr[4].Quantity= parseInt(quantity);
    }
  
    let table =
      "<table border=1><tr><th>Company</th><th>Model</th> <th>Memory(GB)</th><th>Price(RS)</th><th>Quantity</th>";
    document.getElementById("res").innerHTML = table;
    arr.forEach((element) => {
      table +=
        "<tr><td>" +
        element.Company +
        "</td><td>" +
        element.Model +
        "</td> <td>" +
        element.Memory +
        "</td> <td>" +
        element.Price +
        "</td> <td> " +
        element.Quantity;
      ("</td></tr>");
      document.getElementById("res").innerHTML = table;
    });
  
    table += "</table>";
  }