function isMinValueAtStart(element){
    min_value_at_start = element.checked;
    drawChart();
}

function changeLength(element){
    length = element.value;
    drawChart();
}
function changeThickness(element){
    thickness = element.value;
    drawChart();
}

function changeMarginTop(element){
    margin_top = element.value;
    drawChart();
}

function changeMarginLeft(element){
    margin_left = element.value;
    drawChart();
}

function changeMarginBottom(element){
    margin_bottom = element.value;
    drawChart();
}

function changeMarginRight(element){
    margin_right = element.value;
    drawChart();
}

function changeMinColor(element){
    min_color = element.value;
    drawChart();
}

function changeMaxColor(element){
    max_color = element.value;
    drawChart();
}

function changeMinValue(element){
    min_value = element.value;
    drawChart();
}

function changeMaxValue(element){
    max_value = element.value;
    drawChart();
}

function changeOrientation(element){
    orientation = element.value;
    drawChart();
}

function changeAxisPosition(element){
    axis_position = element.value;
    drawChart();
}

function changeAxisTickOrientation(element){
    axis_tick_orientation = element.value;
    drawChart();
}

function drawChart(){
    var chartElement = document.getElementById("legend");
    chartElement.innerHTML="";

    var chartOptions = {
            length : parseFloat(chartElement.offsetWidth*0.75),
            thickness: parseFloat(thickness),
            min_color : min_color,
            max_color : max_color,
            max_value : parseFloat(max_value),
            min_value : parseFloat(min_value),
            margin : {top:parseFloat(margin_top),bottom:parseFloat(margin_bottom),left:parseFloat(margin_left),right:parseFloat(margin_right)},
            orientation : orientation,
            axis_position : axis_position,
            axis_tick_orientation : axis_tick_orientation,
            min_value_at_start : min_value_at_start
    }
    console.log(chartOptions);
    Legend(chartOptions);
}

var length = document.getElementById("length").value;
var thickness = document.getElementById("thickness").value;

var margin_top = document.getElementById("margin_top").value;
var margin_bottom = document.getElementById("margin_bottom").value;
var margin_left = document.getElementById("margin_left").value;
var margin_right = document.getElementById("margin_right").value;

var min_color = document.getElementById("min_color").value;
var max_color = document.getElementById("max_color").value;
var max_value = document.getElementById("max_value").value;
var min_value = document.getElementById("min_value").value;

var orientation = document.getElementById("orientation").value;
var axis_position = document.getElementById("axis_position").value;
var axis_tick_orientation = document.getElementById("axis_tick_orientation").value;
var min_value_at_start = document.getElementById("min_value_at_start").checked;

drawChart();