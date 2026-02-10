function calculateValues()  {
    let radii = parseFloat(document.getElementById("a").value);
    let area = Math.PI * radii ** 2;
    
    document.getElementById("area").value = area.toFixed(2);


}