var arr = [{Company: "Samsung",Model: "Galaxy",Memory: 64,Price: 15000},
            {Company: "Nokia",Model: "S730",Memory: 128,Price: 22000},
            {Company: "Xiaomi",Model: "Note",Memory: 32,Price: 12000},
            {Company: "Motoarala",Model: "G10",Memory: 32,Price: 15000},
            {Company: "Apple",Model: "S12",Memory: 64,Price: 25000}];
  
  function search() {
    let html =
      "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
    let field = document.getElementById("field").value;
    let data = document.getElementById("data").value;
  
    data = data.toLowerCase();
  
    flag = false;
    arr.forEach((element) => {
      if (field == "Company") {
        if (element.Company.toLowerCase() == data) {
          html +=
            "<tr><td>" +
            element.Company +
            "<td>" +
            element.Model +
            "</td><td>" +
            element.Memory +
            "</td><td>" +
            element.Price +
            "</td><td>";
         flag = true;
        }
      } else if (field == "Model") {
        if (element.Model.toLowerCase() == data) {
          html +=
            "<tr><td>" +
            element.Company +
            "<td>" +
            element.Model +
            "</td><td>" +
            element.Memory +
            "</td><td>" +
            element.Price +
            "</td><td>";
           flag = true;
        }
      }
      if (field == "Memory") {
        if (element.Memory == data) {
          html +=
            "<tr><td>" +
            element.Company +
            "<td>" +
            element.Model +
            "</td><td>" +
            element.Memory +
            "</td><td>" +
            element.Price +
            "</td><td>";
           flag = true;
        }
      }
      if (field == "Price") {
        if (element.Price == data) {
          html +=
            "<tr><td>" +
            element.Company +
            "<td>" +
            element.Model +
            "</td><td>" +
            element.Memory +
            "</td><td>" +
            element.Price +
            "</td><td>";
           flag = true;
        }
      }
    });
    html += "</table>";
    if (flag == false) {
      document.getElementById("demo").innerHTML = "Please choose from the given list";
      return;
    }
    document.getElementById("demo").innerHTML = html;
  }