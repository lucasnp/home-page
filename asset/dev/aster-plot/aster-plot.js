var width = 400,
    height = 400,
    radius = Math.min(width, height) / 2,
    inR = 0.1 * radius;

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.rating; });

var arc = d3.svg.arc()
    .innerRadius(inR)
    .outerRadius(function(d) {
        return radius * d.data.rating / 10;
    })
    .startAngle(function(d){ return d.startAngle; })
    .endAngle(function(d){ return d.endAngle; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); //align center

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function(d) {
    return d.data.name + ": <span style='color:white'>" + d.data.rating + "</span>";
  });
svg.call(tip);


d3.csv('../../data/skill.csv', function(error, data) {

  data.forEach(function(d) {
    d.type = d.type;
    d.name = d.name;
    d.color = '#' + d.color;
    d.rating = +d.rating;
    d.arc = 1;
  });
  for (var i = 0; i < data.score; i++) { console.log(data[i].id) }
  
  var path = svg.selectAll(".solidArc")
      .data(pie(data))
      .enter().append("path")
      .attr("fill", function(d) { return d.data.color; })
      .attr("class", "solidArc")
      .attr("stroke", "none")
      .attr("d", arc)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
});