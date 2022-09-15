var arr = [
  { Company: "Samsung", Model: "Galaxy", Memory: 64, Price: 15000 },
  { Company: "Nokia", Model: "S730", Memory: 128, Price: 22000 },
  { Company: "Xiaomi", Model: "Note", Memory: 32, Price: 12000 },
  { Company: "Motorala", Model: "G10", Memory: 32, Price: 15000 },
  { Company: "Apple", Model: "S12", Memory: 64, Price: 25000 },
];

function sorting() {
  var sort = document.getElementById("tsort").value;
  var data = document.getElementById("tdata").value;
  if (sort === "ascending" && data === "company") {
    arr.sort((a, b) =>
      a.Company > b.Company ? 1 : b.Company > a.Company ? -1 : 0
    );
  } else if (sort === "descending" && data === "company") {
    arr.sort((a, b) =>
      a.Company < b.Company ? 1 : b.Company < a.Company ? -1 : 0
    );
  } else if (sort === "ascending" && data === "model") {
    arr.sort((a, b) => (a.Model > b.Model ? 1 : b.Model > a.Model ? -1 : 0));
  } else if (sort === "descending" && data === "model") {
    arr.sort((a, b) => (a.Model < b.Model ? 1 : b.Model < a.Model ? -1 : 0));
  } else if (sort === "ascending" && data === "memory") {
    arr.sort(function (a, b) {
      return a.Memory - b.Memory;
    });
  } else if (sort === "descending" && data === "memory") {
    arr.sort(function (a, b) {
      return b.Memory - a.Memory;
    });
  } else if (sort === "ascending" && data === "price") {
    arr.sort(function (a, b) {
      return a.Price - b.Price;
    });
  } else if (sort === "descending" && data === "price") {
    arr.sort(function (a, b) {
      return b.Price - a.Price;
    });
  }

  let html =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
  arr.forEach((ele) => {
    html +=
      "<tr><td>" +
      ele.Company +
      "</td><td>" +
      ele.Model +
      "</td><td>" +
      ele.Memory +
      "</td><td>" +
      ele.Price +
      "</td></tr>";
  });
  html += "</table>";
  document.getElementById("demo").innerHTML = html;
}
