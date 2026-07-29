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
      "id": 820001,
      "name": "Naomi",
      "breed": "Labradoodle",
      "breedGroup": "Hybrid",
      "gender": "Female",
      "age": "8 weeks",
      "status": "Ready to go home",
      "weight": "3.1 lbs",
      "price": 1850,
      "hypoallergenic": true,
      "image": "assets/breeds/Goldendoodle2.webp",
      "gallery": ["assets/breeds/Goldendoodle2.webp"],
      "location": "San Diego, CA",
      "description": "Meet Naomi! An adorable, playful Labradoodle looking for a loving home."
    },
    {
      "id": 820002,
      "name": "Ian",
      "breed": "Havamalt",
      "breedGroup": "Hybrid",
      "gender": "Male",
      "age": "17 weeks",
      "status": "Ready to go home",
      "weight": "4.0 lbs",
      "price": 1650,
      "hypoallergenic": true,
      "image": "assets/breeds/Maltipoo.webp",
      "gallery": ["assets/breeds/Maltipoo.webp"],
      "location": "Dallas, TX",
      "description": "Meet Ian! A gentle, affectionate Havamalt puppy with a heart of gold."
    },
    {
      "id": 820003,
      "name": "Genna",
      "breed": "Dachshund",
      "breedGroup": "Hound",
      "gender": "Female",
      "age": "12 weeks",
      "status": "Ready to go home",
      "weight": "3.8 lbs",
      "price": 1750,
      "hypoallergenic": false,
      "image": "assets/breeds/Dachshund2.webp",
      "gallery": ["assets/breeds/Dachshund2.webp"],
      "location": "Miami, FL",
      "description": "Meet Genna! A sweet, inquisitive Dachshund puppy ready to brighten your day."
    },
    {
      "id": 820004,
      "name": "Sarge",
      "breed": "Doxiepoo",
      "breedGroup": "Hybrid",
      "gender": "Male",
      "age": "14 weeks",
      "status": "Ready to go home",
      "weight": "4.2 lbs",
      "price": 1900,
      "hypoallergenic": true,
      "image": "assets/breeds/Cavapoo.webp",
      "gallery": ["assets/breeds/Cavapoo.webp"],
      "location": "Atlanta, GA",
      "description": "Meet Sarge! A brave, loving Doxiepoo puppy who loves snuggles and playtime."
    },
    {
      "id": 820005,
      "name": "Edward",
      "breed": "Cavalier King Charles Spaniel",
      "breedGroup": "Companion",
      "gender": "Male",
      "age": "10 weeks",
      "status": "Ready to go home",
      "weight": "4.5 lbs",
      "price": 2100,
      "hypoallergenic": false,
      "image": "assets/breeds/Cavalier King Charles Spaniel.webp",
      "gallery": ["assets/breeds/Cavalier King Charles Spaniel.webp"],
      "location": "Charlotte, NC",
      "description": "Meet Edward! A sweet, affectionate Cavalier King Charles Spaniel puppy."
    },
    {
      "id": 820006,
      "name": "Jenny",
      "breed": "Dachshund",
      "breedGroup": "Hound",
      "gender": "Female",
      "age": "8 weeks",
      "status": "Ready to go home",
      "weight": "3.2 lbs",
      "price": 1800,
      "hypoallergenic": false,
      "image": "assets/breeds/Dachshund.webp",
      "gallery": ["assets/breeds/Dachshund.webp"],
      "location": "Orlando, FL",
      "description": "Meet Jenny! A delightful Dachshund puppy with a curious spirit."
    },
    {
      "id": 820007,
      "name": "Lake",
      "breed": "Goldendoodle",
      "breedGroup": "Hybrid",
      "gender": "Male",
      "age": "13 weeks",
      "status": "Ready to go home",
      "weight": "5.1 lbs",
      "price": 1950,
      "hypoallergenic": true,
      "image": "assets/breeds/Goldendoodle.webp",
      "gallery": ["assets/breeds/Goldendoodle.webp"],
      "location": "Denver, CO",
      "description": "Meet Lake! A friendly and energetic Goldendoodle puppy."
    },
    {
      "id": 820008,
      "name": "Blu",
      "breed": "French Bulldog",
      "breedGroup": "Companion",
      "gender": "Female",
      "age": "13 weeks",
      "status": "Ready to go home",
      "weight": "4.8 lbs",
      "price": 2200,
      "hypoallergenic": false,
      "image": "assets/breeds/French Bulldog.webp",
      "gallery": ["assets/breeds/French Bulldog.webp"],
      "location": "Austin, TX",
      "description": "Meet Blu! A charming French Bulldog puppy with a big personality."
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
