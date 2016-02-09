(function() {

  //=============================================//
  // Module declaration.
  //=============================================//


  angular
    .module( "app", [
      "ngRoute"
    ]);


  //=============================================//
  // Configuration.
  //=============================================//


  angular
    .module( "app" )
    .config( config )
    .run( run );

  config.$inject = [
    "$routeProvider"
  ];

  function config( $routeProvider ) {

    $routeProvider

      .when("/", {
          title:       "Home",
          templateUrl: "partials/home.html",
          controller:   HomeController,
          controllerAs: "vm",
      })
      .when("/description", {
          title:       "Description",
          templateUrl: "partials/description.html"
      })
      .when("/species", {
          title:       "Species",
          templateUrl: "partials/species.html"
      })
      .when("/resources", {
          title:       "Resources",
          templateUrl: "partials/resources.html"
      })
      // .when("/gallery", {
      //     title:       "Gallery",
      //     templateUrl: "partials/gallery.html",
      //     controller:   GalleryController,
      //     controllerAs: "vm",
      //     resolve:      GalleryController.resolve
      // })
      .otherwise({
          redirectTo: "/"
      });

  } // end config


  run.$inject = [
    "$rootScope",  // To pass data to appNavbar.
    "$route"       // To access route data.
  ];

  function run( $rootScope, $route ) {

    var baseTitle = " | Bees";

    $rootScope.$on( "$routeChangeSuccess", function() {

      // Set page title.
      if ( $route.current.title ) {

        window.document.title = $route.current.title + baseTitle;

      }

    });

  } // end run


  //=============================================//
  // View controllers.
  //=============================================//

  angular
    .module( "app" )
    .controller( "HomeController", HomeController );

    HomeController.$inject = [];

    function HomeController( _data ) {

      this.bees_1 = [
        {
          name: "Evolution",
          imgUrl: "img/Amegilla_cingulata.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Evolution",
          imgUrl: "img/fossil.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Evolution",
          imgUrl: "img/Tetragonula_carbonaria.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
      ];

      this.bees_2 = [
        {
          name: "Ampulicidae",
          imgUrl: "img/Ampulicidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Sphecidae",
          imgUrl: "img/Sphecidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Crabroninae",
          imgUrl: "img/Crabroninae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Bembicini ",
          imgUrl: "img/Bembicini.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Nyssonini",
          imgUrl: "img/Nyssonini.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Pemphredoninae",
          imgUrl: "img/Pemphredoninae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Anthophila",
          imgUrl: "img/Anthophila.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Melittidae",
          imgUrl: "img/Melittidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Apidae",
          imgUrl: "img/Apidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Megachilidae",
          imgUrl: "img/Megachilidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Andrenidae",
          imgUrl: "img/Andrenidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Halictidae",
          imgUrl: "img/Halictidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Colletidae",
          imgUrl: "img/Colletidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
        {
          name: "Stenotritidae",
          imgUrl: "img/Stenotritidae.jpg",
          linkUrl: "_",
          desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
        },
      ];

    } // end HomeController


  // angular
  //   .module( "app" )
  //   .controller( "GalleryController", GalleryController );

  //   GalleryController.resolve = {
  //     _data: function( GalleryData ) {
  //       return GalleryData.getData();
  //     }
  //   };

  //   GalleryController.$inject = [
  //     "_data"
  //   ];

  //   function GalleryController( _data ) {

  //     this.monkeys = _data;

  //   } // end GalleryController


  angular
    .module( "app" )
    .controller( "ResourcesController", ResourcesController );

    ResourcesController.resolve = {
      _data: function( ResourcesData ) {
        return ResourcesData.getData();
      }
    };

    ResourcesController.$inject = [
      "_data"
    ];

    function ResourcesController( _data ) {

      this.resources = _data;

    } // end ResourcesController


  //=============================================//
  // Layout commponents.
  //=============================================//


  /**
   * The app navbar.
   * - Switch page contents when the user clicks on a navigation link.
   */
  angular
    .module( "app" )
    .component( "appNavbar", {

      bindings: {},
      templateUrl: 'layout/app-navbar.html',
      controller:  AppNavbarController,

    });

  angular
    .module( "app" )
    .controller( "AppNavbarController", AppNavbarController );

    AppNavbarController.$inject = [
      "$route",
      "$location"
    ];

    function AppNavbarController( $route, $location ) {

      var vm  = this;

      vm.paths     = [];  // The "#" paths, e.g., "#/about".
      vm.labels    = [];  // The same as the page title.
      vm.activeTab = "";  // The name of the active tab.

      // Reject trailing slash.
      var pathRegex = /^\/\w*[^\/]$/;

      // Extract a list of paths and labels from routes info.
      angular.forEach( $route.routes, function( value, key ) {

        // If a valid path name is found, push to the lists.
        if ( key === "/" || key.match( pathRegex ) ) {
          vm.paths.push( "#" + key );
          vm.labels.push( value.title );

          // If the current path is found, remember the title as a active tab.
          if ( key === $location.path() ) {
            vm.activeTab = value.title;
          }
        }

      }); // end angular.forEach

    } // end AppNavbarController


  /**
   * The app footer.
   */
  angular
    .module( "app" )
    .component( "appFooter", {

      bindings: {},
      templateUrl: 'layout/app-footer.html'

    });

})(); // end module
