function Legend(options) {

    var width = options.width,
    height = options.height,
    startColor = options.min_color,
    endColor = options.max_color,
    margin = options.margin,
    maxValue = options.max_value,
    minValue = options.min_value;

    var key = d3.select("#legend")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

    var legend = key
    .append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "100%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

    legend
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", endColor)
    .attr("stop-opacity", 1);

    legend
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", startColor)
    .attr("stop-opacity", 1);

    key.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var y = d3.scale.linear()
    .range([height, 0])
    .domain([minValue, maxValue]);

    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right");

    key.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (width + margin.left) + "," + margin.top + ")")
    .call(yAxis)

}