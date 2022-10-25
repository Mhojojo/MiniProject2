document.addEventListener(
  "DOMContentLoaded",
  function () {
    let x = localStorage.getItem("text");
    let imgArray = [1, 2, 3, 4, 5, 6, 7, 8];
    if (x == "apt1") {
      //Property name
      document.querySelector("#propName").innerText =
        "Lifestyle International Realty";

      //Property description
      document.querySelector("#propDesc").innerText =
        "Make yourself at home in our cosy, modern home in one of Miami's most desirable & respectable suburban neighborhoods.";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/1-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "Fully renovated with over 3,000sqft of living space. Double car garage. Epic, gleaming pool with integrated hot tub & access to cabana bathroom. Fantastic, covered outdoor entertaining space with side slab for boat/RV parking. Spacious front yard with privacy hedging throughout.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "Situated on a substantially sized CORNER lot (.35 acres) located on the Baptist Hospital grid (never lose power!)";

      //location address
      document.querySelector("#locAdd").innerText =
        "J.P. Rizal Street, Barangay Olympia, Makati City 1200 Metro Manila";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.2948172128476!2d-80.3683647641545!3d25.661541812891784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c132ee792763%3A0x5c2130b03adc2aac!2s11540%20SW%20107th%20Ave%2C%20Miami%2C%20FL%2033176%2C%20USA!5e1!3m2!1sen!2sph!4v1666546150444!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured1-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured1-${i}.jpg`;
      }
    } else if (x == "apt2") {
      //Property name
      document.querySelector("#propName").innerText =
        "Seaview Hills Luxury Apartments";

      //Property description
      document.querySelector("#propDesc").innerText =
        "With garden views, Seaview Hills Luxury Apartments & Rooms is located in Dauis and has a restaurant, a tour desk, bar, garden, year-round outdoor pool and terrace";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/2-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "All self-catered units feature tiled floors and are fitted with a flat-screen TV, a safety deposit box, an equipped kitchen with a fridge, and a private bathroom with shower. Some units are air-conditioned and include a seating and/or dining area.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "Hinagdanan Cave is 5.1 km from the accommodation, while Tarsier Conservation Area is 41.8 km from the property. The nearest airport is Tagbilaran Airport, 5 km from Seaview Hills Luxury Apartments & Rooms.";

      //location address
      document.querySelector("#locAdd").innerText =
        "Purok 6, Barangay Songculan, 6339 Dauis, Bohol";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15734.371626874407!2d123.81845222562562!3d9.630276067507461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4d1547d9f9b5%3A0xa2a88b1bc0c2d543!2sSeaviewhills%20Apartments!5e0!3m2!1sen!2sph!4v1666481955192!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured2-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured2-${i}.jpg`;
      }
    } else if (x == "apt3") {
      //Property name
      document.querySelector("#propName").innerText = "Tierra Antigua Realty";

      //Property description
      document.querySelector("#propDesc").innerText =
        "Enjoy mountain views from your backyard with no direct neighbor to the south of the home with a resort style backyard.";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/3-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "Flexible Great room/open concept floor plan with 3 Bedrooms, 2 Bathrooms plus a separate office/den for a total of 2485 sqft.   Beautifully updated ''Chefs'' Kitchen features top of the line Granite, Stainless Steel Appliances, separate wine refrigerator, breakfast bar seating and is open to dining/living areas.  On the south side of the home is a SPACIOUS Owner's suite with a spa-like bathroom; separate soaking tub and shower, and a beautiful double vanity with granite countertops and vessel sinks, an impressive walk-in closet and a sliding glass door with access to the screened in porch.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "This home is nestled deep in the gated community of Sweetwater Reserve (low HOA) at the end of a quiet street on an elevated lot with a resort style backyard. Home resides on .85 acre lot and was built by the Monterey Homes Division.";

      //Location address
      document.querySelector("#locAdd").innerText =
        "Brgy. Tangub, Circumferential-Handumanan Access Road, Bacolod, Negros Occidental";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.3556368836662!2d-111.05226801169155!3d32.265852851303286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d675cdd353570d%3A0x1c7c6909a41be652!2s4075%20W%20Granite%20Dells%20Ct%2C%20Tucson%2C%20AZ%2085745%2C%20USA!5e1!3m2!1sen!2sph!4v1666490092789!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured3-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured3-${i}.jpg`;
      }
    } else if (x == "apt4") {
      //Property name
      document.querySelector("#propName").innerText =
        "RE/MAX Alternative Realty";

      //Property description
      document.querySelector("#propDesc").innerText =
        "This Spanish architectural gem is a nice blend of modern meets vintage charm. ";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/4-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "This home has just finished an extensive renovation that includes a floor plan change w/ a new kitchen that now opens into the family room w/ island seating that offers storage & finished w/ SS appliances & granite countertops. The staircase is refinished w/  gorgeous wood & wrought iron balusters added. Replaced flooring w/ new tile floors downstairs & LVP flooring upstairs, and the half bath finished off w/ a stunning redesign. Other significant updates are the gorgeous hurricane-impact windows framed in wood, the handcrafted double wooden door, extensive pavers, and the roof is a metal (barrel tile look) from 2007. The backyard oasis is lovely w/ fruit trees, a covered patio overlooking the pool w/ a pavered walkway leading to the covered boat house w/ a lift & the 94' corrugated sea wall is in great condition.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "Located in one of the best beach towns in Brevard, Melbourne Beach! A waterfront home situated on a deep water canal w/ easy access to the Indian River.";

      //Location address
      document.querySelector("#locAdd").innerText =
        "Allea Building, Santo Niño Village, Block 1 Lot 7 Maa Highway, Talomo, Davao City";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1426.3782284306335!2d-80.56483646798418!3d28.05857141845872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de13e7a5908c4d%3A0xda49f29f55595176!2s442%20Riverview%20Ln%2C%20Melbourne%20Beach%2C%20FL%2032951%2C%20USA!5e1!3m2!1sen!2sph!4v1666491016960!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured4-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured4-${i}.jpg`;
      }
    } else if (x == "apt5") {
      //Property name
      document.querySelector("#propName").innerText =
        "My Home Group Real Estate";

      //Property description
      document.querySelector("#propDesc").innerText =
        "This luxury home is waiting for you to enjoy the million dollar views and peaceful desert lifestyle.";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/5-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "Custom features are at every turn from the 36'' Viking range, cement countertops, high end appliances and hand forged sinks. The open great room showcases soaring wood beamed ceilings and multiple French doors to show off the stunning desert horizon.  The home is spacious and open with a split floorplan and many new upgrades.  New whole home water filtration system, HVAC and water heater,  walls are freshly painted, 1100 gallon rainwater collection tank, upgraded landscaping and irrigation system, and new custom built chicken coop.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "One of a kind Southwestern paradise on almost 4 acres with 360 degree views of the Catalinas and Tucson cityscape.";

      //Location address
      document.querySelector("#locAdd").innerText =
        "Pedro Cayetano Boulevard, Taguig, 1630 Metro Manila";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.4603408511452!2d-111.0437272998728!3d32.27136583564803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d67434664db2f7%3A0x2c8d0d0180dacaf6!2s3650%20W%20Dawnbreaker%20Pl%2C%20Tucson%2C%20AZ%2085745%2C%20USA!5e1!3m2!1sen!2sph!4v1666492886868!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured5-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured5-${i}.jpg`;
      }
    } else if (x == "apt6") {
      //Property name
      document.querySelector("#propName").innerText = "Long Realty Company";

      //Property description
      document.querySelector("#propDesc").innerText =
        "Enjoy sunrise views from the large back patio in the morning, mountain views during the day, & city lights at night.";

      //Floor Plan image
      document.querySelector("#floorImg").src = "img/featured/6-floorplan.jpg";

      //Floor plan description
      document.querySelector("#floorDesc").innerText =
        "Grill out back while your guests enjoy a dip in the pool or invite them into your newly updated kitchen. Owner is currently using the family room as a spacious dining room. Formal living & dining rooms are also flexible depending on your lifestyle. Most of the home is tiled, but carpeted rooms have padding so thick you will feel like you're walking on a cloud. All flooring has been replaced within the last 4 years. Home has OWNED SOLAR & most months the owner sells energy back to TEP. Complete GUEST SUITE w/kitchen, laundry area, & separate entrance. Suite can also be incorporated into the main home as a bedroom w/ ensuite.";

      //Location description
      document.querySelector("#locDesc").innerText =
        "Immaculately kept home on a hill! Enjoy sunrise views from the large back patio in the morning, mountain views during the day, & city lights at night.";

      //Location address
      document.querySelector("#locAdd").innerText =
        "ALong Conel Road, Brgy, General Santos City, 9500 South Cotabato";

      //Google maps location
      document.querySelector("#locGoogle").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1366.3781154810024!2d-111.06228385033126!3d32.29091770055522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d675a6fc5fbf61%3A0x2a5571e8adcb25df!2s4610%20N%20Cerritos%20Dr%2C%20Tucson%2C%20AZ%2085745%2C%20USA!5e1!3m2!1sen!2sph!4v1666496277462!5m2!1sen!2sph";

      //Featured images
      for (let i = 0; i < imgArray.length; i++) {
        document.querySelector(
          `#apt${i + 1}img`
        ).src = `img/featured/featured6-${i}.jpg`;
        document.querySelector(
          `#href${i + 1}img`
        ).href = `img/featured/featured6-${i}.jpg`;
      }
    }
  },
  false
);
