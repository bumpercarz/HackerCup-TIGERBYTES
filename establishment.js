const establishments = [
      {
        id: 'mcdo',
        name: "McDonald's",
        type: "Fast Food Restaurant",
        lat: 14.6760,
        lng: 121.0437,
        image: "https://images.unsplash.com/photo-1552566558-b5cb8c2e9c18?w=400&h=200&fit=crop",
        address: "Ground Floor, SM City North EDSA, Quezon City",
        phone: "+63 2 123 4567",
        hours: "24/7",
        description: "World's leading global foodservice retailer with over 36,000 locations worldwide.",
        amenities: ["Drive-Thru", "WiFi", "McCafé", "24/7 Service"],
        parkingType: "general",
        parking: {
          available: true,
          spaces: 50,
          type: "Free parking",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        }
      },
      {
        id: 'jollibee',
        name: "Jollibee",
        type: "Fast Food Restaurant",
        lat: 14.6542,
        lng: 121.0622,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop",
        address: "456 Commonwealth Avenue, Quezon City",
        phone: "+63 2 987 6543",
        hours: "6:00 AM - 12:00 AM",
        description: "The Philippines' largest fast food chain, famous for its fried chicken and sweet-style spaghetti.",
        amenities: ["Drive-Thru", "Party Packages", "Delivery", "WiFi"],
        parkingType: "reserved",
        parking: {
          available: true,
          spaces: 30,
          type: "Reserved parking - ₱20/hour",
          image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=200&fit=crop"
        }
      },
      {
        id: 'kfc',
        name: "KFC",
        type: "Fast Food Restaurant",
        lat: 14.6890,
        lng: 121.0340,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=200&fit=crop",
        address: "789 Katipunan Avenue, Quezon City",
        phone: "+63 2 555 0123",
        hours: "10:00 AM - 11:00 PM",
        description: "Kentucky Fried Chicken - famous for finger lickin' good fried chicken with 11 herbs and spices.",
        amenities: ["Drive-Thru", "Delivery", "Catering", "WiFi"],
        parkingType: "general",
        parking: {
          available: true,
          spaces: 25,
          type: "Free parking for customers",
          image: "https://images.unsplash.com/photo-1559758144-958be2b1a7b8?w=400&h=200&fit=crop"
        }
      },
      {
        id: 'smdc',
        name: "SMDC",
        type: "Real Estate Development",
        lat: 14.6500,
        lng: 121.0500,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop",
        address: "Mall of Asia Complex, Pasay City",
        phone: "+63 2 888 9999",
        hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 5:00 PM",
        description: "SM Development Corporation - Leading real estate developer in the Philippines.",
        amenities: ["Showroom", "Model Units", "Consultation", "Financing"],
        parkingType: "reserved",
        parking: {
          available: true,
          spaces: 100,
          type: "Validated parking - First 3 hours free",
          image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=200&fit=crop"
        }
      },
      {
        id: 'manila-hotel',
        name: "Manila Hotel",
        type: "Luxury Hotel",
        lat: 14.5995,
        lng: 120.9842,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
        address: "One Rizal Park, Manila",
        phone: "+63 2 527 0011",
        hours: "24/7",
        description: "The Manila Hotel is a 5-star luxury hotel located in the heart of Manila, offering world-class hospitality since 1912.",
        amenities: ["Spa", "Pool", "Fine Dining", "Business Center", "Concierge"],
        parkingType: "reserved",
        parking: {
          available: true,
          spaces: 200,
          type: "Valet parking - ₱150/day",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=200&fit=crop"
        }
      },
      {
        id: 'okada',
        name: "Okada Manila",
        type: "Integrated Resort",
        lat: 14.5378,
        lng: 120.9772,
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c38a?w=400&h=200&fit=crop",
        address: "New Seaside Drive, Entertainment City, Parañaque",
        phone: "+63 2 888 0777",
        hours: "24/7",
        description: "Okada Manila is a luxury integrated resort featuring world-class gaming, dining, entertainment, and accommodations.",
        amenities: ["Casino", "Shopping", "Spa", "Multiple Restaurants", "Entertainment Shows"],
        parkingType: "general",
        parking: {
          available: true,
          spaces: 3000,
          type: "Free parking with validation",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop"
        }
      }
    ];