var width = 400,
    height = 400,
    radius = Math.min(width, height) / 2,
    innerRadius = 0.1 * radius;

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.order; });

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) { 
    return radius * d.data.score / 100;
//    return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius; 
  });

/* don't need outlineArc
var outlineArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);
*/

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); //align center


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function(d) {
    return d.data.label + ": <span style='color:green'>" + d.data.id + "</span>";
  });
svg.call(tip);

d3.csv('aster_data.csv', function(error, mydata) {

  mydata.forEach(function(d) {
    d.id     =  d.id;
    d.order  = +d.order;
    d.color  =  d.color;
    d.weight = +d.weight;
    d.score  = +d.score;
    d.width  = +d.weight;
    d.label  =  d.label;
  });
  // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }
  
  var path = svg.selectAll(".solidArc")
      .data(pie(mydata))
      .enter().append("path")
      .attr("fill", function(d) { return d.data.color; })
      .attr("class", "solidArc")
      .attr("stroke", "green")
      .attr("d", arc)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

/* don't need outlineArc
  var outerPath = svg.selectAll(".outlineArc")
      .data(pie(data))
      .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", "none")
      .attr("class", "outlineArc")
      .attr("d", outlineArc);  
*/

/* don't need center value
  // calculate the weighted mean score
  var score = 
    data.reduce(function(a, b) {
      //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
      return a + (b.score * b.weight); 
    }, 0) / 
    data.reduce(function(a, b) { 
      return a + b.weight; 
    }, 0);

  svg.append("svg:text")
    .attr("class", "aster-score")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle") // text-align: right
    .text(Math.round(score));
*/
});