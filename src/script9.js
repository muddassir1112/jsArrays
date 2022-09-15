var data = [{Company: "Samsung", Model: "Galaxy", Memory: 64, Price: 15000, Rating: ""},
            {Company: "Nokia", Model: "S730", Memory: 128, Price: 22000, Rating: ""},
            {Company: "Xiaomi", Model: "Note", Memory: 32, Price: 12000, Rating: ""},
            {Company: "Motoroala",  Model: "G10",  Memory: 32,  Price: 15000,  Rating: ""},
            {Company: "Apple",  Model: "S12",  Memory: 64,  Price: 25000,  Rating: ""}
  ];
  
  function Show() {
    let html =
      "<table border=1px><tr><th>Company</th><th>Model</th> <th>Memory(GB)</th><th>Price(RS)</th><th>Rating</th></tr>";
    document.getElementById("demo").innerHTML = html;
    data.forEach((element) => {
      html += "<tr><td>" + element.Company + "</td><td>" + element.Model + "</td> <td>" + element.Memory + "</td> <td>" + element.Price + "</td> <td> " + element.Rating + "</td></tr>";
      document.getElementById("demo").innerHTML = html;
    });
  
    html += "</table>";
  }
  function Rating() {
    let tdata = document.getElementById("tdata").value;
    let trate = document.getElementById("trate").value;
  
    if (tdata == "Samsung") {
      data[0].Rating = trate;
    } else if (tdata == "Nokia") {
      data[1].Rating = trate;
    } else if (tdata == "Xiaomi") {
      data[2].Rating = trate;
    } else if (tdata == "Motoroala") {
      data[3].Rating = trate;
    } else if (tdata == "Apple") {
      data[4].Rating = trate;
    }

    let html =
      "<table border=1><tr><th>Company</th><th>Model</th> <th>Memory(GB)</th><th>Price(RS)</th><th>Rating</th></tr>";
    data.forEach((element) => {
      html += "<tr><td>" + element.Company + "</td id='tds'><td>" + element.Model + "</td> <td>" + element.Memory + "</td> <td>" + element.Price + "</td> <td> " + element.Rating + "</td></tr>";

    });
    
    html += "</table>";
    document.getElementById("result").innerHTML = html;
  }