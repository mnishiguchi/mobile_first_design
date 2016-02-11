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
          templateUrl: "partials/species.html",
          controller:   SpeciesController,
          controllerAs: "vm",
      })
      .when("/resources", {
          title:       "Resources",
          templateUrl: "partials/resources.html"
      })
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

    function HomeController() {

      this.data_1 = data_1;
      this.data_2 = data_2;

    } // end HomeController


  angular
    .module( "app" )
    .controller( "SpeciesController", SpeciesController );

    SpeciesController.$inject = [];

    function SpeciesController() {

      this.bees = data_2;

    } // end SpeciesController


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
      "$location",
      "$window",
      "$scope"
    ];

    function AppNavbarController( $route, $location, $window, $scope ) {

      var breakpoint = 480;

      var vm  = this;

      vm.pages = [];      // path:  The "#" paths, e.g., "#/about".
                          // title: The same as the page title.
      vm.activeTab;       // The name of the active tab.
      vm.isMobile;        // The current display type.
      vm.isShownMenu;     // The visibility of hamburger button.
      vm.toggleMenu  = function() { vm.isShownMenu = ! vm.isShownMenu };

      // Initialize the state of the navbar.
      handleResizing();


      // Keep watch on window resizing.
      angular.element( $window ).on('resize', function() {

        // Update the state of the navbar
        $scope.$apply( function() { handleResizing(); });

      });


      // Regex to filter out paths with trailing slash.
      var pathRegex = /^\/\w*[^\/]$/;
      /*
        console.info( $route.routes );
        ---
        {
          /             : { controller: HomeController(), title: "Home", ... }
          /description  : { ... }
          /description/ : { ... }  // invalid path
          /resources    : { ... }
          /resources/   : { ... }  // invalid path
          /species      : { ... }
          /species/     : { ... }  // invalid path
          ...
        }
       */

      // Extract paths from routes info.
      angular.forEach( $route.routes, function( value, key ) {

        // If a valid path name is found, push its data to the lists.
        if ( key === "/" || key.match( pathRegex ) ) {

          vm.pages.push({
             path:  "#" + key,
             title: value.title
          });

          // If the current path is found, remember the title as a active tab.
          if ( key === $location.path() ) { vm.activeTab = value.title; }

        }

      }); // end angular.forEach


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Sets the state of the navbar according to the current screen width.
       */
      function handleResizing() {

        vm.isMobile    = ( $window.innerWidth < breakpoint ) ? true : false;
        vm.isShownMenu = ( vm.isMobile ) ? false : true;

      }

    } // end AppNavbarController


  /**
   * The app footer.
   */
  angular
    .module( "app" )
    .component( "appFooter", {

      template: "<footer>&copy; 2016 Masatoshi Nishiguchi</footer>"

    });


  //=============================================//
  // Data.
  //=============================================//


  var data_1  = [
    {
      name: "Coevolution",
      imgUrl: "img/Amegilla_cingulata.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Bee#Coevolution",
      desc: "The ancestors of bees were wasps in the family Crabronidae, which were predators of other insects."
    },
    {
      name: "Evolution",
      imgUrl: "img/fossil.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Bee#Evolution",
      desc: "Melittosphex burmensis, a fossil bee preserved in amber from the Early Cretaceous of Myanmar"
    },
    {
      name: "Sociality",
      imgUrl: "img/Wasp_attack.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Bee#Sociality",
      desc: "Willing to die for their sisters: worker honey bees killed defending their hive against wasps, along with a dead wasp. Such eusocial behaviour is favoured by the haplodiploid sex determination system of bees."
    },
  ];

  var data_2 = [
    {
      name: "Ampulicidae",
      imgUrl: "img/Ampulicidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Ampulicidae",
      desc: "The Ampulicidae, or cockroach wasps, are a small (about 170 species), primarily tropical family of sphecoid wasps, all of which use various cockroaches as prey for their larvae."
    },
    {
      name: "Sphecidae",
      imgUrl: "img/Sphecidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Sphecidae",
      desc: "The Sphecidae are a cosmopolitan family of parasitoidal wasps that includes sand wasps, mud daubers, and other thread-waisted wasps."},
    {
      name: "Crabroninae",
      imgUrl: "img/Crabroninae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Crabroninae",
      desc: "The subfamily Crabroninae is the most diverse group in the wasp family Crabronidae, containing over 100 genera. The subfamily consists of solitary, predatory wasps. The adult females of many groups dig tunnels in the ground for nesting, but others use different techniques, including the construction of tube-like mud nests (e.g., Trypoxylon politum)."
    },
    {
      name: "Bembicini ",
      imgUrl: "img/Bembicini.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Bembicini",
      desc: "The Bembicini, or sand wasps, are a large tribe of crabronid wasps, comprising 20 genera. Bembicines are predators on various groups of insects. The type of prey captured tends to be rather consistent within each genus, with flies (Diptera) being the most common type of prey taken."
    },
    {
      name: "Nyssonini",
      imgUrl: "img/Nyssonini.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Nyssonini",
      desc: "The Nyssonini are a group of cleptoparasitic bembicine wasps generally distinguished by the petiolate second submarginal cell of the forewing and rather strongly sculptured head and mesosoma (a common trait in cleptoparasitic wasps). Most species also bear sharp propodeal projections and spiny hind tibiae."
    },
    {
      name: "Pemphredoninae",
      imgUrl: "img/Pemphredoninae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Pemphredoninae",
      desc: "The subfamilly Pemphredoninae also known as the aphid wasps, is a large group in the wasp family Crabronidae. Historically, this subfamily has frequently been accorded family status. The subfamily consists of solitary, predatory wasps, each genus having its own distinct and consistent prey preferences."
    },
    {
      name: "Anthophila",
      imgUrl: "img/Anthophila.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Bee",
      desc: "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the European honey bee, for producing honey and beeswax. Bees are a monophyletic lineage within the superfamily Apoidea, presently considered as a clade Anthophila."
    },
    {
      name: "Melittidae",
      imgUrl: "img/Melittidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Melittidae",
      desc: "The Melittidae are a small bee family, with some 60 species in four genera, restricted to Africa and the northern temperate zone. Historically, the family has included the Dasypodaidae and Meganomiidae as subfamilies, but recent molecular studies indicate Melittidae (sensu lato) was paraphyletic, so each of the three historical subfamilies is now accorded family status, with Dasypodaidae as the basal group of bees, followed by meganomiids and melittids, which are sister taxa."
    },
    {
      name: "Apidae",
      imgUrl: "img/Apidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Apidae",
      desc: "The Apidae is the largest family within the Apoidea, with at least 5700 species of bees, comprising the common honey bees, stingless bees (also used for honey production), carpenter bees, orchid bees, cuckoo bees, bumblebees, and various other less well-known tribes and groups. Many are valuable pollinators in natural habitats and for agricultural crops."
    },
    {
      name: "Megachilidae",
      imgUrl: "img/Megachilidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Megachilidae",
      desc: "The Megachilidae are a cosmopolitan family of (mostly) solitary bees whose pollen-carrying structure (called a scopa) is restricted to the ventral surface of the abdomen (rather than mostly or exclusively on the hind legs as in other bee families)."
    },
    {
      name: "Andrenidae",
      imgUrl: "img/Andrenidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Andrenidae",
      desc: "The Andrenidae (commonly known as mining bees) are a large, nearly cosmopolitan family of solitary, ground-nesting bees. Most of the family's diversity is located in temperate or arid areas (warm temperate xeric). It includes some enormous genera (e.g., Andrena with over 1300 species, and Perdita with nearly 800)."
    },
    {
      name: "Halictidae",
      imgUrl: "img/Halictidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Halictidae",
      desc: "The Halictidae is the second largest family of Apoidea bees. Halictid species occur all over the world and are usually dark-colored and often metallic in appearance. Several species are all or partly green and a few are red; a number of them have yellow markings, especially the males, which commonly possess yellow faces, a pattern widespread among the various families of bees."
    },
    {
      name: "Colletidae",
      imgUrl: "img/Colletidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Colletidae",
      desc: "The Colletidae are a family of bees, and are often referred to collectively as plasterer bees or polyester bees, due to the method of smoothing the walls of their nest cells with secretions applied with their mouthparts; these secretions dry into a cellophane-like lining."
    },
    {
      name: "Stenotritidae",
      imgUrl: "img/Stenotritidae.jpg",
      linkUrl: "https://en.wikipedia.org/wiki/Stenotritidae",
      desc: "The Stenotritidae are the smallest of all formally recognized bee families, with only 21 species in two genera, all of them restricted to Australia. Historically, they were generally considered to belong in the family Colletidae, but the stenotritids are presently considered their sister taxon, and deserving of family status."
    },
  ];

})(); // end module
