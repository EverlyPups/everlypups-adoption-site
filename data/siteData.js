// PawHaven Central Data Registry

const SITE_DATA = {
  allFilterBreeds: [
    "Akita", "American Corgi", "American Shepadoodle", "Auggie", "Aussiedoodle", 
    "Australian Shepherd", "Basset Hound", "Beagle", "Bernedoodle", "Bernese Mountain Dog", 
    "Bichon Frise", "Bichonpoo", "Boston Terrier", "Boxer", "Bulldog", 
    "Cava-Corgi", "Cavachon", "Cavalier King Charles Spaniel", "Cavapoo", "Chihuahua", 
    "Chow Chow", "Cockapoo", "Cocker Spaniel", "Coton de Tulear", "Dachshund", 
    "Doberman Pinscher", "Dogue de Bordeaux", "Doxiepoo", "French Bulldog", "Frenchton", 
    "German Shepherd Dog", "Golden Retriever", "Goldendoodle", "Great Bordeaux", "Great Dane", 
    "Havamalt", "Havanese", "Havapoo", "Irish Doodle", "Irish Setter", 
    "Jack-A-Poo", "Keeshond", "Kerry Blue Terrier", "Labradoodle", "Labrador Retriever", 
    "Lagotto Romagnolo", "Mal-Shi", "Maltese", "Maltipoo", "Mastiff", 
    "Miniature Pinscher", "Miniature Schnauzer", "Morkie", "Old English Sheepdog", "Papillon", 
    "Pekingese", "Pembroke Welsh Corgi", "Pomapoo", "Pomeranian", "Pomsky", 
    "Poo-Ton", "Poodle", "Pug", "Puggle", "Rhodesian Ridgeback", 
    "Rottweiler", "Jack Russell Terrier", "Saint Berdoodle", "Saint Bernard", "Schnau-Tzu", 
    "Sheepadoodle", "Shiba Inu", "Shichon", "Shih Tzu", "Shih-Poo", 
    "Siberian Husky", "Silky Terrier", "Soft Coated Wheaten Terrier", "Victorian Bulldog", "West Highland White Terrier", 
    "Whoodle", "Yorkiepoo", "Yorkshire Terrier"
  ],

  favoriteBreeds: [
    {
      name: "Goldendoodle",
      mainImg: "assets/breeds/Goldendoodle.webp",
      insetImg: "assets/breeds/Goldendoodle2.webp"
    },
    {
      name: "Bernedoodle",
      mainImg: "assets/breeds/Bernedoodle.webp",
      insetImg: "assets/breeds/Bernedoodle2.webp"
    },
    {
      name: "Cavapoo",
      mainImg: "assets/breeds/Cavapoo.webp",
      insetImg: "assets/breeds/Cavapoo2.webp"
    },
    {
      name: "Golden Retriever",
      mainImg: "assets/breeds/Golden Retriever.webp",
      insetImg: "assets/breeds/Golden Retriever2.webp"
    },
    {
      name: "Maltipoo",
      mainImg: "assets/breeds/Maltipoo.webp",
      insetImg: "assets/breeds/Maltipoo2.webp"
    },
    {
      name: "Poodle",
      mainImg: "assets/breeds/Poodle.webp",
      insetImg: "assets/breeds/Poodle2.webp"
    },
    {
      name: "Dachshund",
      mainImg: "assets/breeds/Dachshund.webp",
      insetImg: "assets/breeds/Dachshund2.webp"
    },
    {
      name: "Cavalier King Charles Spaniel",
      mainImg: "assets/breeds/Cavalier King Charles Spaniel.webp",
      insetImg: "assets/breeds/Cavalier King Charles Spaniel2.webp"
    },
    {
      name: "Labrador Retriever",
      mainImg: "assets/breeds/Labrador Retriever.webp",
      insetImg: "assets/breeds/Labrador Retriever2.webp"
    },
    {
      name: "French Bulldog",
      mainImg: "assets/breeds/French Bulldog.webp",
      insetImg: "assets/breeds/French Bulldog2.webp"
    },
    {
      name: "German Shepherd",
      mainImg: "assets/breeds/German Shepard.webp",
      insetImg: "assets/breeds/German Shepard2.webp"
    },
    {
      name: "Yorkshire Terrier",
      mainImg: "assets/breeds/Yorkshire Terrier.webp",
      insetImg: "assets/breeds/Yorkshire Terrier2.webp"
    }
  ],

  puppies: [
    {
      "id": 817786,
      "name": "Ian",
      "breed": "Havamalt",
      "variety": "F1 Hybrid",
      "breedGroup": "Hybrid",
      "gender": "Male",
      "age": "17 weeks",
      "birthday": "March 28, 2026",
      "color": "Cream & White",
      "status": "Ready to go home",
      "weight": "4.0 lbs",
      "estAdultWeight": "7 - 12 lbs",
      "price": 1850,
      "hypoallergenic": true,
      "image": "https://photos.puppyspot.com/6/listing/817786/photo/505023599_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/6/listing/817786/photo/505023599_medium.jpg",
        "https://photos.puppyspot.com/0/listing/822590/photo/505019391_medium.JPG",
        "https://photos.puppyspot.com/2/listing/821422/photo/505020467_medium.JPG"
      ],
      "location": "Columbus, OH",
      "breeder": "USDA Certified Star Breeder (10+ Yrs Experience)",
      "momBreed": "Havanese (10 lbs)",
      "dadBreed": "Maltese (7 lbs)",
      "microchip": "985141002847163",
      "description": "Meet Ian! A sweet, affectionate Havamalt puppy with a gentle temperament and playful spirit. Ian loves belly rubs, playing with soft squeaky toys, and cuddling up after outdoor playtime. He has received full nose-to-tail vet checks and is completely up to date on all vaccinations."
    },
    {
      "id": 822590,
      "name": "Genna",
      "breed": "Dachshund",
      "variety": "Miniature Smooth Coat",
      "breedGroup": "Hound",
      "gender": "Female",
      "age": "12 weeks",
      "birthday": "May 2, 2026",
      "color": "Red Dapple",
      "status": "Ready to go home",
      "weight": "3.8 lbs",
      "estAdultWeight": "9 - 13 lbs",
      "price": 1650,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/0/listing/822590/photo/505019391_medium.JPG",
      "gallery": [
        "https://photos.puppyspot.com/0/listing/822590/photo/505019391_medium.JPG",
        "https://photos.puppyspot.com/6/listing/817786/photo/505023599_medium.jpg",
        "https://photos.puppyspot.com/1/listing/819541/photo/505024107_medium.jpg"
      ],
      "location": "Dallas, TX",
      "breeder": "Highland Oaks Kennels (USDA Licensed)",
      "momBreed": "Miniature Dachshund (11 lbs)",
      "dadBreed": "Miniature Dachshund (10 lbs)",
      "microchip": "985141002847992",
      "description": "Meet Genna! An inquisitive, loving Dachshund puppy ready to brighten your everyday life. Genna has an adventurous personality, loves exploring the yard, and gets along wonderfully with children and other household pets."
    },
    {
      "id": 821422,
      "name": "Sarge",
      "breed": "Doxiepoo",
      "variety": "F1 Designer",
      "breedGroup": "Hybrid",
      "gender": "Male",
      "age": "14 weeks",
      "birthday": "April 18, 2026",
      "color": "Black & Tan Fleece",
      "status": "Reserved",
      "weight": "4.2 lbs",
      "estAdultWeight": "8 - 14 lbs",
      "price": 1450,
      "hypoallergenic": true,
      "image": "https://photos.puppyspot.com/2/listing/821422/photo/505020467_medium.JPG",
      "gallery": [
        "https://photos.puppyspot.com/2/listing/821422/photo/505020467_medium.JPG",
        "https://photos.puppyspot.com/6/listing/824806/photo/505041874_medium.jpg"
      ],
      "location": "Atlanta, GA",
      "breeder": "Peach State Pups (USDA Licensed)",
      "momBreed": "Dachshund (10 lbs)",
      "dadBreed": "Toy Poodle (6 lbs)",
      "microchip": "985141002848011",
      "description": "Meet Sarge! A brave, cuddle-loving Doxiepoo puppy who thrives on playtime. Sarge combines the intelligence of the Toy Poodle with the devoted affection of the Dachshund."
    },
    {
      "id": 824806,
      "name": "Xylander",
      "breed": "Cavalier King Charles Spaniel",
      "variety": "Blenheim",
      "breedGroup": "Companion",
      "gender": "Male",
      "age": "9 weeks",
      "birthday": "May 24, 2026",
      "color": "Chestnut & White",
      "status": "Ready to go home",
      "weight": "4.5 lbs",
      "estAdultWeight": "12 - 18 lbs",
      "price": 2250,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/6/listing/824806/photo/505041874_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/6/listing/824806/photo/505041874_medium.jpg",
        "https://photos.puppyspot.com/7/listing/819907/photo/505037095_medium.jpg"
      ],
      "location": "Charlotte, NC",
      "breeder": "Royal Crest Cavaliers (AKC & USDA Star Breeder)",
      "momBreed": "Cavalier King Charles (14 lbs)",
      "dadBreed": "Cavalier King Charles (15 lbs)",
      "microchip": "985141002849104",
      "description": "Meet Xylander! A charming, aristocratic Cavalier King Charles Spaniel puppy with a heart of gold. Xylander is incredibly sweet-natured, loves lap snuggles, and comes with full health certifications."
    },
    {
      "id": 819907,
      "name": "Juneo",
      "breed": "German Shepherd Dog",
      "variety": "Standard Coat",
      "breedGroup": "Working",
      "gender": "Male",
      "age": "10 weeks",
      "birthday": "May 17, 2026",
      "color": "Black & Tan",
      "status": "Ready to go home",
      "weight": "6.5 lbs",
      "estAdultWeight": "65 - 85 lbs",
      "price": 1950,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/7/listing/819907/photo/505037095_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/7/listing/819907/photo/505037095_medium.jpg",
        "https://photos.puppyspot.com/2/listing/823332/photo/505028073_medium.jpg"
      ],
      "location": "Denver, CO",
      "breeder": "Rocky Mountain Shepherds (USDA Licensed)",
      "momBreed": "German Shepherd (70 lbs)",
      "dadBreed": "German Shepherd (82 lbs)",
      "microchip": "985141002846820",
      "description": "Meet Juneo! A loyal, highly intelligent German Shepherd puppy eager for obedience training, outdoor hikes, and family protection."
    },
    {
      "id": 824180,
      "name": "Sugar",
      "breed": "Dachshund",
      "variety": "Miniature Longhair",
      "breedGroup": "Hound",
      "gender": "Female",
      "age": "8 weeks",
      "birthday": "June 1, 2026",
      "color": "Shaded Cream",
      "status": "Ready to go home",
      "weight": "3.2 lbs",
      "estAdultWeight": "8 - 11 lbs",
      "price": 1750,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/0/listing/824180/photo/505003978_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/0/listing/824180/photo/505003978_medium.jpg",
        "https://photos.puppyspot.com/0/listing/822590/photo/505019391_medium.JPG"
      ],
      "location": "Orlando, FL",
      "breeder": "Sunshine Doxies (USDA Licensed)",
      "momBreed": "Miniature Dachshund (9 lbs)",
      "dadBreed": "Miniature Dachshund (10 lbs)",
      "microchip": "985141002847551",
      "description": "Meet Sugar! An adorable, silky-soft Dachshund puppy who loves warm cuddles and following you around the home."
    },
    {
      "id": 819541,
      "name": "Tilly",
      "breed": "Dachshund",
      "variety": "Miniature Smooth",
      "breedGroup": "Hound",
      "gender": "Male",
      "age": "15 weeks",
      "birthday": "April 11, 2026",
      "color": "Chocolate & Tan",
      "status": "Ready to go home",
      "weight": "4.1 lbs",
      "estAdultWeight": "9 - 12 lbs",
      "price": 1550,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/1/listing/819541/photo/505024107_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/1/listing/819541/photo/505024107_medium.jpg",
        "https://photos.puppyspot.com/0/listing/824180/photo/505003978_medium.jpg"
      ],
      "location": "Austin, TX",
      "breeder": "Lone Star Doxies (USDA Certified)",
      "momBreed": "Miniature Dachshund (10 lbs)",
      "dadBreed": "Miniature Dachshund (11 lbs)",
      "microchip": "985141002848990",
      "description": "Meet Tilly! A lively, playful Dachshund puppy with boundless curiosity and a affectionate personality."
    },
    {
      "id": 823332,
      "name": "Layla",
      "breed": "Golden Retriever",
      "variety": "English Cream / Standard",
      "breedGroup": "Sporting",
      "gender": "Female",
      "age": "7 weeks",
      "birthday": "June 9, 2026",
      "color": "Golden Cream",
      "status": "Ready by Jul. 30",
      "weight": "5.0 lbs",
      "estAdultWeight": "55 - 70 lbs",
      "price": 2100,
      "hypoallergenic": false,
      "image": "https://photos.puppyspot.com/2/listing/823332/photo/505028073_medium.jpg",
      "gallery": [
        "https://photos.puppyspot.com/2/listing/823332/photo/505028073_medium.jpg",
        "https://photos.puppyspot.com/7/listing/819907/photo/505037095_medium.jpg"
      ],
      "location": "Nashville, TN",
      "breeder": "Goldens of Music City (OFA Certified & USDA Licensed)",
      "momBreed": "Golden Retriever (60 lbs)",
      "dadBreed": "Golden Retriever (68 lbs)",
      "microchip": "985141002849005",
      "description": "Meet Layla! A happy, sweet-tempered Golden Retriever puppy who adores water, fetching balls, and giving gentle puppy kisses."
    }
  ],

  breeds: [
    { name: "Goldendoodle", group: "Hybrid" },
    { name: "Bernedoodle", group: "Hybrid" },
    { name: "Cavapoo", group: "Hybrid" },
    { name: "Golden Retriever", group: "Sporting" },
    { name: "Maltipoo", group: "Hybrid" },
    { name: "Poodle", group: "Non-Sporting" },
    { name: "Dachshund", group: "Hound" },
    { name: "Cavalier King Charles Spaniel", group: "Companion" },
    { name: "Labrador Retriever", group: "Sporting" },
    { name: "French Bulldog", group: "Companion" },
    { name: "German Shepherd", group: "Herding" },
    { name: "Yorkshire Terrier", group: "Toy" }
  ],

  faqs: [
    {
      question: "How does PawHaven vet breeders?",
      answer: "Every breeder in our network undergoes rigorous background checks, facility evaluations, and unannounced USDA compliance audits."
    },
    {
      question: "What is included with the 10-Year Health Guarantee?",
      answer: "Our 10-Year Health Guarantee covers congenital and hereditary conditions to give your family long-term peace of mind."
    },
    {
      question: "How does flight chaperone travel work?",
      answer: "A dedicated puppy chaperone accompanies your puppy in-cabin during travel directly to your nearest major airport."
    },
    {
      question: "Are there local puppy sales near me?",
      answer: "Yes, we offer nationwide delivery, so no matter where you are, you can get a puppy from Premier Pups."
    },
    {
      question: "What should I expect when ordering a puppy from our nationwide \"puppy sales near me\" service?",
      answer: "Expect a simple ordering process, timely nationwide delivery, and the peace of mind of a 10-year health guarantee on your new puppy."
    },
    {
      question: "What steps do we take to ensure the health and well-being of our puppies?",
      answer: "We work closely with dedicated, professional dog breeders who utilize premium quality health screening practices. Each puppy is guaranteed a 10-year health plan that underscores our commitment to their longevity."
    },
    {
      question: "What type of veterinary care do the puppies receive before sale?",
      answer: "Prior to sale, our puppies receive comprehensive veterinary care including vaccinations, de-worming, and thorough nose-to-tail health checks to ensure they are in perfect health when they arrive at their new homes."
    }
  ]
};
