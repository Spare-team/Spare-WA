
// ======================================================================
$(function() {
  var sideNav = $('.menu');
  // var topNav = $('.top-nav');
  // var navItems = $("li a", sideNav);
  
  go();
  function go() {
            
      $(function() { setTimeout(collapse, 1000); });

      $('.menu')
        .mouseenter(expand)
        .mouseleave(collapse);

        setFocus();
    
  }
  
  function navItemClicked() {
    // speed up hiding and showing nav (useful on mobile)
    var homeClicked = ($(this).attr("href") === "/");
    // bubble so link handlers happen first
    setTimeout(function() {
      if (homeClicked) {
        $('body').addClass('home');
      }
      else {
        $('body').removeClass('home');
      }
    }, 0);
    // reduces flickering on mobile
    if (homeClicked) {
      sideNav.addClass("white-nav");
    }
  }
  
  function watchPageChanges() {
    $(window).on('url-changed', function() {
      var url = getRelativeUrl();
      if (url === Navigation.lastUrl) { return; }
      
      // updateTopNav(url);
      updateSideNav(url);
      updateWhiteNav();
      
    });
  }
  
  function collapse() {
    // if (isHome() || !collapsableNav) { return; }
    $('body').addClass('nav-collapsed');
  }
  
  function expand() {
    $('body').removeClass('nav-collapsed');
  }
 

//=====================================
// Aggregando propiedad focus

   // var focus=;

function setFocus(){
  // var m=$('#menuItems a').on("click",function(element){
  //     console.log("mamas cacaroto")
  //     var as=$('#menuItems .selected').removeClass("focus");
  //     // if(as.length>0)
  //     // {
  //     //     for (var r in as) {
  //     //         as[r].removeClass("focus");
  //     //     }
  //     // }
  //     element.addClass("focus");
  //   });

  // for(var i in m){
  //   m[i].click(focus);

  // }
}









}




);

