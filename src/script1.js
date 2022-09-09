
function myFunction(){
let sam={company:"Samsung",
model:"Galaxy",
memory:"64(GB)",
price:"15000"
};
let nok={company:"Nokia",
model:"S730",
memory:"128(GB)",
price:"22000"
};
let xia={company:"Xiaomi",
model:"Note",
memory:"32(GB)",
price:"12000"
};
let moto={company:"Motorola",
model:"G10",
memory:"32(GB)",
price:"15000"
};
let app={company:"Apple",
model:"S12",
memory:"64(GB)",
price:"25000"
};

let val = document.getElementById('data').value;
let txt = val.toLowerCase();
let res;
if(txt =="samsung" || txt=='galaxy' || txt=='15000'){
   res = "<table border=1px solid grey;><tr><th>Company:</th><th>Model:</th><th>Memory:</th><th>Price:</th><tr><td>" + sam.company + "</td><td>" + sam.model + "</td><td>" + sam.memory + "</td><td>" + sam.price + "</td></tr>";
   document.getElementById('demo').innerHTML = res;
}
else if(txt=="xiaomi" || txt=='note' || txt=='22000')
{
    res = "<table border=1px solid grey;><tr><th>Company:</th><th>Model:</th><th>Memory:</th><th>Price:</th><tr><td>" + xia.company + "</td><td>" + xia.model + "</td><td>" + xia.memory + "</td><td>" + xia.price + "</td></tr>";
   document.getElementById('demo').innerHTML = res;
}
else if(txt=="nokia"|| txt=='s730' || txt=='12000')
{
    res = "<table border=1px solid grey;><tr><th>Company:</th><th>Model:</th><th>Memory:</th><th>Price:</th><tr><td>" + nok.company + "</td><td>" + nok.model + "</td><td>" + nok.memory + "</td><td>" + nok.price + "</td></tr>";
   document.getElementById('demo').innerHTML = res;
}
else if(txt=="motorola"|| txt=='g10' || txt=='15000')
{
    res = "<table border=1px solid grey;><tr><th>Company:</th><th>Model:</th><th>Memory:</th><th>Price:</th><tr><td>" + moto.company + "</td><td>" + moto.model + "</td><td>" + moto.memory + "</td><td>" + moto.price + "</td></tr>";
    document.getElementById('demo').innerHTML = res;
}
else if (txt=="apple"|| txt=='s12' || txt=='25000'){
    res = "<table border=1px solid grey;><tr><th>Company:</th><th>Model:</th><th>Memory:</th><th>Price:</th><tr><td>" + app.company + "</td><td>" + app.model + "</td><td>" + app.memory + "</td><td>" + app.price + "</td></tr>";
    document.getElementById('demo').innerHTML = res;
}
else{
    res= "Product Not Found";
    document.getElementById('demo').innerHTML = res;
}

}

    
