var div_list = document.getElementsByTagName("div")

for(var i = 0; i<div_list.length; i++){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color_string = `rgb( ${red}, ${green}, ${blue} )`;
    div_list[i].innerHTML = color_string;
    div_list[i].style.backgroundColor = color_string;
}
