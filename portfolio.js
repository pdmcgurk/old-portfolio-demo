var projects = [
  {name:"ChromatVis",
    image:"images/chromatvis.jpg",
    altText:"Aligned DNA sequence outputs and their differences",
    blurb:"<p>A DNA sequence visualizer that parses double peaks using a reference sequence</p>",
    url:"https://github.com/pdmcgurk/chromatvis"
  },
  {name:"Project2",
    image:"images/chromatvis.jpg",
    altText:"Dummy Image",
    blurb:"<p>A fake project to fill space.</p>",
    url:"#"
  },
  {name:"Project3",
    image:"images/chromatvis.jpg",
    altText:"Dummy Image",
    blurb:"<p>Another fake project to fill space.</p>",
    url:"#"
  }
];
var current = 0;
var intervalId;

$(document).ready(function(){
	$('#fullpage').fullpage();
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  $("#project1 .card-img-top").attr({
    src: projects[0].image,
    alt: projects[0].altText
  });
  $("#project1 .btn").html(projects[0].name);
  $("#project1 .btn").attr("href", projects[0].url);
  $("#project1 .card-text").html(projects[0].blurb)
  $("#project2 .card-img-top").attr({
    src: projects[1].image,
    alt: projects[1].altText
  });
  $("#project2 .btn").html(projects[1].name);
  $("#project2 .btn").attr("href", projects[1].url);
  $("#project2 .card-text").html(projects[1].blurb)
  intervalId = setInterval(slide, 8000, 1);
  $("#l-arrow").click(function(){
    clearInterval(intervalId);
    slide(-1);
    intervalId = setInterval(slide, 8000, 1);
  });
  $("#r-arrow").click(function(){
    clearInterval(intervalId);
    slide(1);
    intervalId = setInterval(slide, 8000, 1);
  });
});

function slide(direction){
  current = current + direction;
  let next;
  if (current === projects.length) {
    current = 0;
    next = 1;
  } else if (current < 0) {
    current = projects.length - 1;
    next = 0;
  } else {
    next = current + 1;
    if (next === projects.length) {
      next = 0;
    }
  }
  $("#project1 .card-img-top").attr({
    src: projects[current].image,
    alt: projects[current].altText
  });
  $("#project1 .btn").html(projects[current].name);
  $("#project1 .btn").attr("href", projects[current].url);
  $("#project1 .card-text").html(projects[current].blurb)
  $("#project2 .card-img-top").attr({
    src: projects[next].image,
    alt: projects[next].altText
  });
  $("#project2 .btn").html(projects[next].name);
  $("#project2 .btn").attr("href", projects[next].url);
  $("#project2 .card-text").html(projects[next].blurb)
}
