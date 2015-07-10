d3.select('body').selectAll('div').data([8, 3, 7])
    .enter().append('div').style('opacity', 0)
    .text('creating divs!')
    .transition().duration(3000)
    .style('opacity', 1)

d3.select('body').selectAll('div').data([])
    .exit().transition().duration(3000)
    .text(function(d){return 'deleting divs '+d})
    .style('opacity', 0)
    .remove()

d3.select('body').selectAll('div').data([8, 3, 7, 5])
    .text(function(d){return 'existing divs '+d})
    .enter().append('div').style('opacity', 0)
    .text('creating divs!')
    .transition().duration(3000).style('opacity', 1)


var update = function(items){
  var selection = d3.select('body').selectAll('div')
    .data(items, 
        function(d){ return d.name; }) // this is the key function - we'll use the name property ot identify items
    .text(function(d){ return d.name + ' is now number ' + d.val }); //UPDATE selection

  selection.enter().append('div')
    .text(function(d){return d.name + ' is number ' + d.val}); //ENTER selection

  selection.exit().remove(); //EXIT selection

};

update([{name: 'amy', val: 1}, {name: 'ben', val: 2}, {name: 'cal', val: 3}]);

update([{name: 'ben', val: 102}, {name: 'amy', val: 101}, {name: 'dan', val: 104}]);