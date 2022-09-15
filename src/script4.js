var arr = [{  Company: "Samsung",  Model: "Galaxy",  Memory: 64,  Price: 15000},
        {Company: "Nokia",  Model: "S730",  Memory: 128,  Price: 22000},
        {Company: "Xiaomi",  Model: "Note",  Memory: 32,  Price: 12000},
        {Company: "Motorala",  Model: "G10",  Memory: 32,  Price: 15000},
        {Company: "Apple",  Model: "S12",  Memory: 64,  Price: 25000}];
  

function add() {
    var company=document.getElementById("company").value;
    var model=document.getElementById("model").value;
    var memory=document.getElementById("memory").value;
    var price=document.getElementById("price").value;
    
    var data={
        Company:company,
        Model:model,
        Memory:memory,
        Price:price,
    }
    arr.push(data);
    var html="<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(RS)</th></tr>";
    arr.forEach((ele) => {
        html+="<tr><td>"+
        ele.Company+
        "</td><td>"+
        ele.Model+
        "</td><td>"+
        ele.Memory+
        "</td><td>"+
        ele.Price+
        "</td></tr>"
    });
    html+="</table>";
    document.getElementById("demo").innerHTML = html;
}