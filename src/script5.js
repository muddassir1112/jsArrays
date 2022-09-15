var data = [{Name: "Samsung Galaxy",  Price: 15000},
            {Name: "Nokia S730",  Price: 22000},
            {Name: "Xiaomi Note",  Price: 12000},
            {Name: "Motorola G10",  Price: 15000},
            {Name: "Apple",  Price: 25000},
];
  
  var arr = [];
  
  function addProduct() {
    let item = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
  
    if (item === "Samsung") {
      var list = {
        Name: item,
        Quantity: quantity,
        Price: data[0].Price,
      };
      arr.push(list);
    } else if (item === "Nokia") {
      var list = {
        Name: item,
        Quantity: quantity,
        Price: data[1].Price,
      };
      arr.push(list);
    } else if (item === "Xiaomi") {
      var list = {
        Name: item,
        Quantity: quantity,
        Price: data[2].Price,
      };
      arr.push(list);
    } else if (item === "Motorola") {
      var list = {
        Name: item,
        Quantity: quantity,
        Price: data[3].Price,
      };
      arr.push(list);
    } else if (item === "Apple") {
      var list = {
        Name: item,
        Quantity: quantity,
        Price: data[4].Price,
      };
      arr.push(list);
    }
  }
  
  function generateBill() {
    let company = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    var total = 0;
     var html= "<hr>";
     html +=
      "<table border=1px><tr><th>Description</th><th>Quantity</th><th>Price</th></tr>";
    for (let i = 0; i < arr.length; i++) {
      if (company === "Samsung") {
        total += 15000 * arr[i].Quantity;
        html +=
          "<tr><td>" +
          arr[i].Name +
          "</td><td>" +
          arr[i].Quantity +
          "</td><td>15000</td></tr>";
       
        
      } else if (company === "Motorola") {
        total += 15000 * arr[i].Quantity;
        html +=
          "<tr><td>" +
          arr[i].Name +
          "</td><td>" +
          arr[i].Quantity +
          "</td><td>15000</td></tr>";
        
        
      } else if (company === "Nokia") {
        total += 22000 * arr[i].Quantity;
        html +=
          "<tr><td>" +
          arr[i].Name +
          "</td><td>" +
          arr[i].Quantity +
          "</td><td>22000</td></tr>";
        
        
      } else if (company === "Xiaomi") {
        total += 12000 * arr[i].Quantity;
        html +=
          "<tr><td>" +
          arr[i].Name +
          "</td><td>" +
          arr[i].Quantity +
          "</td><td>12000</td></tr>";
        
        
      } else if (company === "Apple") {
        total += 25000 * arr[i].Quantity;
        html +=
          "<tr><td>" +
          arr[i].Name +
          "</td><td>" +
          arr[i].Quantity +
          "</td><td>25000</td></tr>";
          
      }
    }
    html += "<tr><th>Total</th><td></td><td>"+total+"</td><tr></table>";
     document.getElementById("demo").innerHTML= html;
  }