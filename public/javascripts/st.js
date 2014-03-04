
// ======================================================================
// Side navigation menu, Top (mobile) navigation menu 

var SideNav = (function() {
  var sideNav = $('.side-nav');
  var topNav = $('.top-nav');
  var navItems = $("li a", sideNav);
  
  init();
  function init() {
            
      $(function() { setTimeout(collapse, 1000); });

      $('.side-nav')
        .mouseenter(expand)
        .mouseleave(collapse);
    
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
  
  function isHome() {
    return '/' === location.pathname + location.search;
  }

  function updateWhiteNav() {
    if (isHome()) {
      sideNav.addClass("white-nav");
    }
    else {
      if (collapsableNav) {
        setTimeout(function() {
           sideNav.removeClass("white-nav");
        }, 250);
      }
      else {
        sideNav.removeClass("white-nav");
      }
    }
  }
 
})();


