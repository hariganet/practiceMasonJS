$(function(){
  $("#container").mason({
    itemSelector: ".box",
    ratio: 1.5,
    sizes: [
      [1,1],
      [1,2],
      [2,2],
    ],
    columns:[
      [0,480,1],
      [480,780,2],
      [780,1080,3],
      [1080,1320,4],
      [1320,1680,5]
    ],
    filter:{
      itemSelector: '.filterBox',
      filter_class: 'custom_filter'
      },
    layout: 'fluid',
    gutter: 10
  });
});
