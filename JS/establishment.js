const establishments = [
  {
    "id": "the-manila-hotel-manila",
    "name": "The Manila Hotel",
    "type": "Hotel",
    "lat": 14.5831972,
    "lng": 120.9742972,
    "image": "Images/manilamain.jpg",
    "address": "One Rizal Park, Ermita, Manila, 0913 Metro Manila, Philippines",
    "phone": "+63-2 8527 0011, +63-2 5301 5500",
    "hours": "Open 24 hours (front desk/lobby); various outlets have specific hours",
    "description": "A historic five-star hotel opened in 1912, known as the 'Grand Dame' of the Philippines, offering over 500 rooms, heritage architecture, and world-class amenities.",
    "amenities": [
      "Outdoor pool with swim-up bar",
      "Children’s pool",
      "Full-service spa",
      "Health club",
      "Heritage Museum",
      "Art Gallery",
      "Business Center",
      "Executive Club Lounge",
      "Gift shop / deli",
      "Hair salon",
      "Laundry & concierge services",
      "24-hour room service",
      "Wi-Fi"
    ],
    "parkingType": "reserved",
    "parking": {
      "available": true,
      "spaces": null,
      "type": "Free self parking (uncovered)",
      "image": "Images/manilapark.jpeg"
    }
  },
  
  {
    "id": "okada-manila-entertainment-city",
    "name": "Okada Manila",
    "type": "Integrated Resort",
    "lat": 14.5151576,
    "lng": 120.9814988,
    "image": "Images/bayleafmain.jpg", 
    "address": "New Seaside Drive, Entertainment City, Parañaque City, 1701, Metro Manila, Philippines",
    "phone": "+632-8888-0777",
    "hours": "", 
    "description": "A grand luxury integrated resort opened in December 2016, featuring nearly 1,000 rooms, a vast casino, The Fountain, Cove Manila indoor beach club, world-class spa and extensive entertainment and dining offerings.",
    "amenities": [
      "Casino with 3,000+ slot machines and 500 table games",
      "The Fountain – massive multicolor dancing water feature",
      "Cove Manila – indoor beach club & nightclub",
      "The Retreat Spa",
      "PLAY Kids’ Club (indoor kids facility)",
      "Fitness center",
      "Luxury shopping zone (~8,400 sqm)",
      "Shuttle service"
    ],
    "parkingType": "reserved",
    "parking": {
      "available": true,
      "spaces": null,
      "type": "Free private parking, valet, parking garage and accessible parking available on-site",
      "image": "Images/bayleafpark.jpeg"
    }
  },
  {
    "id": "the-bayleaf-intramuros",
    "name": "The Bayleaf Intramuros",
    "type": "Hotel",
    "lat": 14.5900,
    "lng": 120.9740,
    "image": "<see above image>",
    "address": "Muralla Corner Victoria Streets, Intramuros, Manila, 1002, Metro Manila, Philippines",
    "phone": "+63 (2) 5318-5000 | 5328-3170",
    "hours": "24-hour lobby/front desk; check-in from 14:00, check-out by 12:00",
    "description": "A stylish boutique hotel established in 2011 inside the historic Intramuros walls, offering 57 modern rooms, rooftop dining with panoramic views, and prime access to Manila’s heritage landmarks.",
    "amenities": [
      "Free Wi-Fi throughout",
      "On-site dining: Sky Deck (rooftop bar), 9 Spoons, Raffaele, Cioccolata Churros Café",
      "Ballroom (Muralla) & 5 function rooms (Herb-themed names)",
      "Concierge & business center",
      "Free on-site parking",
      "Banquet and event services",
      "Elevator",
      "Luggage storage",
      "Currency exchange",
      "Valet & car hire services"
    ],
    "parkingType": "reserved",
    "parking": {
      "available": true,
      "spaces": null,
      "type": "Free self-parking (covered) and valet parking available; parking spots may be limited",
      "image": ""
    }
  },
  {
    "id": "diamond-hotel-philippines",
    "name": "Diamond Hotel Philippines",
    "type": "Hotel",
    "lat": 14.5726,
    "lng": 120.9821,
    "image": "Images/diamondmain.jpg",
    "address": "Roxas Boulevard corner Dr. J. Quintos Street, Manila, Philippines 1000",
    "phone": "(632) 528-3000; (632) 5305-3000",
    "hours": "24-hour lobby/front desk; check-in from 14:00 (2 PM), check-out by 12:00 (noon)",
    "description": "A 5-star deluxe hotel along Manila Bay known for its classic elegance, prime location, ~482–500 rooms with bay views, event venues, dining, fitness, pool, and business amenities.",
    "amenities": [
      "Outdoor swimming pool and children’s pool with sun loungers",
      "Fitness centre / health club",
      "Sauna",
      "Tennis court",
      "Restaurants and bars (e.g., Yurakuen Japanese Restaurant, Corniche)",
      "Business centre",
      "Meeting & banquet facilities",
      "Wi-Fi (in rooms, surcharge; public areas free)",
      "Limo/town car service",
      "Electric car charging station",
      "Laundry, dry-cleaning, concierge, 24-hour reception",
      "Accessibility features"
    ],
    "parkingType": "reserved",
    "parking": {
      "available": true,
      "spaces": null,
      "type": "Free self-parking (uncovered), valet parking (approx. PHP 150/day), parking garage, accessible parking, electric vehicle charging",
      "image": "Images/diamondpark.jpeg"
    }
  },
  
  {
    "id": "solaire-resort-entertainment-city",
    "name": "Solaire Resort Entertainment City",
    "type": "Integrated Resort",
    "lat": 14.523166,
    "lng": 120.981260,
    "image": "Images/solairemain.jpg",
    "address": "1 Aseana Avenue, Entertainment City, Tambo, Parañaque City 1701, Metro Manila, Philippines",
    "phone": "+632 8888-8888",
    "hours": "24-hour operations; check-in from 15:00, check-out by 12:00",
    "description": "A premier luxury integrated resort opened in March 2013, featuring two towers (Bay & Sky), over 790 rooms, expansive gaming, gourmet dining, theatre, spa, fitness, art gallery, retail mall, and world-class entertainment.",
    "amenities": [
      "793 rooms across Bay and Sky Towers",
      "18,500 m² gaming area with 360 table games & 1,620 slot machines",
      "Column-free Grand Ballroom (1,300 capacity)",
      "The Theatre at Solaire (1,740-seat lyric theatre)",
      "The Shoppes – luxury retail brands (e.g., Gucci, Dior, Louis Vuitton)",
      "14 dining outlets: Finestra, Yakumi, Red Lantern, Fresh, Waterside, Oasis, Kiwa, The Patisserie, Lucky Noodles, Food Court, etc.",
      "Outdoor pool with cabanas (7 AM–9 PM)",
      "Spa, sauna, fitness center",
      "Art gallery",
      "Multilingual staff, business services, limo/town car service",
      "Free Wi-Fi in rooms and public areas"
    ],
    "parkingType": "reserved",
    "parking": {
      "available": true,
      "spaces": null,
      "type": "Free self-parking (casino/theatre car park) and valet (PHP 150 + PHP 50/hr thereafter)",
      "image": "Images/solairepark.jpeg"
    }
  },
  {
    "id": "prc", // unique identifier (string)
    "name": "Professional Regulation Commission", // establishment name
    "type": "Government Building", // category/type (e.g., "Integrated Resort", "Hotel", "Restaurant")
    "lat": 14.604666720206733, // latitude (number)
    "lng": 120.98808379421557, // longitude (number)
    "image": "Images/prcmain.jpg", // main image URL
    "address": "JX3Q+W9X, P. Paredes, Nicanor Reyes St, Sampaloc, Manila, 1008 Metro Manila", // full address
    "phone": "23100026", // contact number
    "hours": "Mon-Fri: 8:00 AM - 5:00 PM",
    "description": "The Professional Regulation Commission (PRC) administers, implements, and enforces the regulatory laws and policies of the country with respect to the regulation and licensing of the various professions and occupations under its jurisdiction.", // brief description
    "amenities": ["Restroom"], // array of strings describing features
    "parkingType": "general", // category like 'general', 'VIP', 'reserved', etc.
    "parking": {
      "available": true, // boolean
      "spaces": 45, // number of spaces
      "type": "Free parking", // description (e.g., "Free parking with validation")
      "image": "Images/prcpark.jpeg" // parking image URL
    }
  },
  {
    "id": "moret", // unique identifier (string)
    "name": "812 Moret St", // establishment name
    "type": "Parking Lot", // category/type (e.g., "Integrated Resort", "Hotel", "Restaurant")
    "lat": 14.606876927394119, // latitude (number)
    "lng": 120.9915064353213, // longitude (number)
    "image": "Images/moretmain.jpeg", // main image URL
    "address": "812 Moret St, Sampaloc, Manila, 1008 Metro Manila", // full address
    "phone": "N/A", // contact number
    "hours": "Daily 6:00 AM - 9:00 PM",
    "description": "Small parking lot near University Tower 1 in Moret Street.", // brief description
    "amenities": [], // array of strings describing features
    "parkingType": "general", // category like 'general', 'VIP', 'reserved', etc.
    "parking": {
      "available": true, // boolean
      "spaces": 31, // number of spaces
      "type": "Pay parking", // description (e.g., "Free parking with validation")
      "image": "Images/moretmain.jpeg" // parking image URL
    }
  },
  {
    "id": "dogland", // unique identifier (string)
    "name": "Dog's Land Veterinary Clinic", // establishment name
    "type": "Veterinary care", // category/type (e.g., "Integrated Resort", "Hotel", "Restaurant")
    "lat": 14.629304589043068, // latitude (number)
    "lng": 120.99609053612384, // longitude (number)
    "image": "Images/dogmain.jpg", // main image URL
    "address": "485 Mayon St, La Loma, Quezon City, 1114 Metro Manila", // full address
    "phone": "0234101884", // contact number
    "hours": "Mon-Fri 9:00 AM - 4:00 PM",
    "description": "A small veterinary clinic for pets located in Mayon St, La Loma, QC.", // brief description
    "amenities": ["Pet Appointments"], // array of strings describing features
    "parkingType": "general", // category like 'general', 'VIP', 'reserved', etc.
    "parking": {
      "available": true, // boolean
      "spaces": 2, // number of spaces
      "type": "Free parking", // description (e.g., "Free parking with validation")
      "image": "Images/dogpark.jpeg" // parking image URL
    }
  },
  {
    "id": "greencourt", // unique identifier (string)
    "name": "Green Court Parking", // establishment name
    "type": "Veterinary care", // category/type (e.g., "Integrated Resort", "Hotel", "Restaurant")
    "lat": 14.566794569616917, // latitude (number)
    "lng": 120.99226404436467, // longitude (number)
    "image": "Images/greencourtmain.jpg", // main image URL
    "address": "HX8R+PW2, Fidel A.Reyes, Malate, Manila, 1004 Metro Manila", // full address
    "phone": "N/A", // contact number
    "hours": "Daily 6:00 AM - 9:00 PM",
    "description": "A small little parking space in Fidel Reyes between Starbucks and 7-Eleven in La Salle.", // brief description
    "amenities": ["Wheelchair Accessible Entrance"], // array of strings describing features
    "parkingType": "general", // category like 'general', 'VIP', 'reserved', etc.
    "parking": {
      "available": true, // boolean
      "spaces": 30, // number of spaces
      "type": "Pay parking", // description (e.g., "Free parking with validation")
      "image": "Images/greencourtpark.jpeg" // parking image URL
    }
  },
  {
    "id": "intramuros", // unique identifier (string)
    "name": "Intramuros Administration Parking Lot", // establishment name
    "type": "Parking Lot", // category/type (e.g., "Integrated Resort", "Hotel", "Restaurant")
    "lat": 14.591311334277902, // latitude (number)
    "lng": 120.9730436600574, // longitude (number)
    "image": "Images/intramurosmain.jpg", // main image URL
    "address": "HXRF+G67, Postigo St, Intramuros, Manila, 1002 Metro Manila", // full address
    "phone": "N/A", // contact number
    "hours": "Daily 5:30 PM - 10:00 AM",
    "description": "Parking Near Manila Cathedral.", // brief description
    "amenities": ["Wheelchair Accessible Parking Lot"], // array of strings describing features
    "parkingType": "general", // category like 'general', 'VIP', 'reserved', etc.
    "parking": {
      "available": true, // boolean
      "spaces": 50, // number of spaces
      "type": "Pay parking", // description (e.g., "Free parking with validation")
      "image": "Images/intramurospark.jpeg" // parking image URL
    }
  }
];