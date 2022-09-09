var arr = [
  ["Samsung", "Galaxy", "64(GB)", 15000],
  ["Nokia", "S730", "128(GB)", 22000],
  ["Xiomi", "Note", "32(GB)", 12000],
  ["Motorola", "G10", "32(GB)", 15000],
  ["Apple", "S12", "64(GB)", 25000]
];
document.write("<table border='2px'><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th></tr>");
for(var a=0; a<arr.length; a++){
    document.write("<tr>");
    for(var b=0; b<arr[a].length; b++){
        document.write("<td>" + arr[a][b] + "</td>");
    };
    document.write("</tr>");
}
document.write("</table>");