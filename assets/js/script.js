function scrolling(){var o=document.getElementById("dynamic-sticky-header");10<document.body.scrollTop||10<document.documentElement.scrollTop?o.classList.add("scrolling"):o.classList.remove("scrolling")}window.onscroll=function(){scrolling()};