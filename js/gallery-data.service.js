(function() {

  angular
    .module( "app" )
    .factory( "GalleryData", GalleryData );

    GalleryData.$inject = [];

    function GalleryData() {

      // Return the API.
      return {

        get: function() { return items; }

      };

    } // end GalleryData


    // The information to be displayed in the gallery.
    var items = [
      {
        name: "Japanese macaque (日本猿)",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/JapaneseMacaqueM2218.jpg/200px-JapaneseMacaqueM2218.jpg",
        linkUrl: "https://en.wikipedia.org/wiki/Japanese_macaque",
        desc: "a terrestrial Old World monkey species native to Japan. They are also sometimes known as the snow monkey because they live in areas where snow covers the ground for months each year – no other non-human primate is more northern-living, nor lives in a colder climate. Individuals have brown-grey fur, red faces, and short tails. There are two subspecies."
      },
      {
        name: "Goeldi's marmoset (Callimico goeldii)",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Callimico_goeldii_in_Venezuela.jpg/330px-Callimico_goeldii_in_Venezuela.jpg",
        linkUrl: "https://en.wikipedia.org/wiki/Goeldi%27s_marmoset",
        desc: "a small, South American New World monkey that lives in the upper Amazon Basin region of Bolivia, Brazil, Colombia, Ecuador, and Peru. It is the only species classified in the genus Callimico, and the monkeys are sometimes referred to as \"callimicos\"."
      },
      {
        name: "Bonnet macaque",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cute_Monkey_cropped.jpg/330px-Cute_Monkey_cropped.jpg",
        linkUrl: "https://en.wikipedia.org/wiki/Bonnet_macaque",
        desc: "a macaque endemic to southern India. Its distribution is limited by the Indian Ocean on three sides and the Godavari and Tapti Rivers along with a related competing species of rhesus macaque in the north. Land use changes in the last few decades have resulted in changes in its distribution boundaries with the rhesus macaque, raising concern for its status in the wild."
      },
      {
        name: "Common squirrel monkey",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Saimiri_sciureus-1_Luc_Viatour.jpg/330px-Saimiri_sciureus-1_Luc_Viatour.jpg",
        linkUrl: "https://en.wikipedia.org/wiki/Common_squirrel_monkey",
        desc: "a small New World monkey of the family Cebidae, native to the tropical areas of South America."
      },
      {
        name: "",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tokyo_monkey_statue.jpg/255px-Tokyo_monkey_statue.jpg",
        linkUrl: "",
        desc: "Simian statue at a Buddhist shrine in Tokyo, Japan"
      },
      {
        name: "",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/AnimaltestingMonkeyCovance2.jpg/255px-AnimaltestingMonkeyCovance2.jpg",
        linkUrl: "",
        desc: "The use of monkeys in laboratories is controversial."
      },
      {
        name: "Crab-eating macaque (aka the long-tailed macaque)",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Macaca_fascicularis_in_Lopburi.JPG/330px-Macaca_fascicularis_in_Lopburi.JPG",
        linkUrl: "https://en.wikipedia.org/wiki/Crab-eating_macaque",
        desc: "a cercopithecine primate native to Southeast Asia. It is referred to as the cynomolgus monkey in laboratories.[2] It has a long history alongside humans;[7] they have been alternately seen as agricultural pests,[8] sacred animals in some temples,[9] and more recently, the subject of medical experiments."
      },
      {
        name: "",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Animals_of_Hindustan_monkeys_called_bandar_that_can_be_taught_to_do_tricks%2C_from_Illuminated_manuscript_Baburnama_%28Memoirs_of_Babur%29.jpg/255px-Animals_of_Hindustan_monkeys_called_bandar_that_can_be_taught_to_do_tricks%2C_from_Illuminated_manuscript_Baburnama_%28Memoirs_of_Babur%29.jpg",
        linkUrl: "https://en.wikipedia.org/wiki/Baburnama",
        desc: "Illustration of Indian monkeys known as bandar (बंदर) from the illuminated manuscript Baburnama (Memoirs of Babur)"
      },

      {
        name: "Sam, a rhesus macaque",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Monkey_Sam_Before_The_Flight_On_Little_Joe_2.jpg/255px-Monkey_Sam_Before_The_Flight_On_Little_Joe_2.jpg",
        linkUrl: "",
        desc: "flown to a height of 55 miles (89 km) by NASA in 1959"
      },
    ];

})(); // end module
