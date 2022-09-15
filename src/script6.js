var obj1 = {
    company: "Samsung",
    model: "Galaxy",
    memory: '64(GB)',
    price: 15000,
    ind: "<input type='checkbox' id='d1'  value='box'> ",
  };
  var obj2 = {
    company: "Nokia",
    model: "S730",
    memory: '1289GB)',
    price: 22000,
    ind: "<input type='checkbox' id='d2'  value='box'> ",
  };
  var obj3 = {
    company: "Xiaomi",
    model: "Note",
    memory: '32(GB)',
    price: 12000,
    ind: "<input type='checkbox' id='d3'  value='box'> ",
  };
  var obj4 = {
    company: "Motorola",
    model: "G10",
    memory: '32(GB)',
    price: 15000,
    ind: "<input type='checkbox' id='d4'  value='box'> ",
  };
  var obj5 = {
    company: "Apple",
    model: "S12",
    memory: '64(GB)',
    price: 25000,
    ind: "<input type='checkbox' id='d5'  value='box'> ",
  };
  
  var arr = [obj1, obj2, obj3, obj4, obj5];
  function show() {
    var table =
      "<table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Action</th></tr>";
    document.getElementById("result").innerHTML = table;
    arr.forEach((element) => {
      table +=
        "<tr><td id='tds'>" + element.company + "</td id='tds'><td id='tds'>" + element.model + "</td> <td id='tds'>" + element.memory + "</td> <td id='tds'>" + element.price + "</td> <td id='tds'> " + element.ind + "</td></tr>";
      document.getElementById("result").innerHTML = table;
    });
  
    table += "</table>";
  }
  
  function update() {
    var tick1 = document.getElementById("d1").checked;
    var tick2 = document.getElementById("d2").checked;
    var tick3 = document.getElementById("d3").checked;
    var tick4 = document.getElementById("d4").checked;
    var tick5 = document.getElementById("d5").checked;

    if (tick1 == true) {
      delete arr[0];
    }
    if (tick2 == true) {
      delete arr[1];
    }
    if (tick3 == true) {
      delete arr[2];
    }
    if (tick4 == true) {
      delete arr[3];
    }
    if (tick5 == true) {
      delete arr[4];
    }
  
    let table =
      "<table border=1px><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
    arr.forEach((val) => {
      table += "<tr><td>" + val.company + "<td>" + val.model + "</td><td>" + val.memory + "</td><td>" + val.price + "</td></tr>";
    });
    table += "</table>";
    document.getElementById("demo").innerHTML = table;
  }