// Paws & Spot Puppy Adoption Dataset

const PUPPY_DATA = {
  breeds: [
    { id: "all", name: "All Breeds", count: 12 },
    { id: "golden-retriever", name: "Golden Retriever", count: 3, size: "Large", energy: "High", shedding: "Moderate" },
    { id: "french-bulldog", name: "French Bulldog", count: 3, size: "Small", energy: "Medium", shedding: "Low" },
    { id: "goldendoodle", name: "Goldendoodle", count: 2, size: "Medium", energy: "High", shedding: "Low (Hypoallergenic)" },
    { id: "poodle", name: "Poodle (Toy/Mini)", count: 2, size: "Small", energy: "Medium", shedding: "Hypoallergenic" },
    { id: "german-shepherd", name: "German Shepherd", count: 2, size: "Large", energy: "High", shedding: "High" }
  ],

  puppies: [
    {
      id: "pup-101",
      name: "Bella",
      breed: "Golden Retriever",
      breedId: "golden-retriever",
      gender: "Female",
      ageWeeks: 9,
      ageFormatted: "9 Weeks",
      price: 1850,
      originalPrice: 2100,
      sizeCategory: "Large",
      expectedWeight: "55 - 65 lbs",
      currentWeight: "6.4 lbs",
      color: "Cream & Honey",
      location: "Lancaster, PA",
      isFeatured: true,
      hasVideo: true,
      badges: ["10-Yr Health Guarantee", "Microchipped", "Hypoallergenic-Friendly"],
      temperament: ["Playful", "Gentle", "Affectionate", "Great with Kids"],
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-golden-retriever-puppy-playing-in-the-grass-42617-large.mp4",
      description: "Bella is a joyful, affectionate Golden Retriever puppy looking for a loving forever home. She loves outdoor fetch, cuddle times, and gets along wonderfully with children and other pets.",
      parents: {
        dam: "Sasha (Golden Retriever - 58 lbs, AKC Registered)",
        sire: "Duke (Golden Retriever - 68 lbs, OFA Hips Excellent)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-102",
      name: "Milo",
      breed: "French Bulldog",
      breedId: "french-bulldog",
      gender: "Male",
      ageWeeks: 8,
      ageFormatted: "8 Weeks",
      price: 2450,
      originalPrice: 2800,
      sizeCategory: "Small",
      expectedWeight: "22 - 28 lbs",
      currentWeight: "4.1 lbs",
      color: "Blue Fawn",
      location: "Austin, TX",
      isFeatured: true,
      hasVideo: true,
      badges: ["AKC Registered", "Flight Nanny Available", "Champion Bloodline"],
      temperament: ["Charming", "Quiet", "Curious", "Cuddle Bug"],
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-french-bulldog-puppy-running-towards-the-camera-42621-large.mp4",
      description: "Milo is a compact French Bulldog with adorable bat ears and a sweet demeanor. Perfect for apartment living, Milo loves belly rubs and sunbathing.",
      parents: {
        dam: "Coco (French Bulldog - 24 lbs, Blue Brindle)",
        sire: "Zeus (French Bulldog - 26 lbs, AKC Champion)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-103",
      name: "Teddy",
      breed: "Goldendoodle",
      breedId: "goldendoodle",
      gender: "Male",
      ageWeeks: 10,
      ageFormatted: "10 Weeks",
      price: 1950,
      originalPrice: 2200,
      sizeCategory: "Medium",
      expectedWeight: "35 - 45 lbs",
      currentWeight: "5.8 lbs",
      color: "Teddy Bear Red",
      location: "Columbus, OH",
      isFeatured: true,
      hasVideo: true,
      badges: ["Low Shedding", "Hypoallergenic", "Vet Certified Clean"],
      temperament: ["Intelligent", "Social", "Eager to Please", "Friendly"],
      image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eca3?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1591769225440-811ad7d6eca3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-puppy-running-in-the-grass-42616-large.mp4",
      description: "Teddy is an F1B Goldendoodle with soft teddy-bear curls. He is intelligent, quick to learn commands, and ideal for families with allergy sensitivities.",
      parents: {
        dam: "Honey (F1 Goldendoodle - 42 lbs)",
        sire: "Oliver (Standard Poodle - 48 lbs, Red Coat)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-104",
      name: "Chloe",
      breed: "Poodle (Toy/Mini)",
      breedId: "poodle",
      gender: "Female",
      ageWeeks: 8,
      ageFormatted: "8 Weeks",
      price: 1650,
      originalPrice: 1900,
      sizeCategory: "Small",
      expectedWeight: "10 - 14 lbs",
      currentWeight: "2.3 lbs",
      color: "Apricot",
      location: "Tampa, FL",
      isFeatured: false,
      hasVideo: true,
      badges: ["Non-Shedding", "Apartment Champion", "Smart & Quick"],
      temperament: ["Spirited", "Smart", "Loving", "Playful"],
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-golden-retriever-puppy-playing-in-the-grass-42617-large.mp4",
      description: "Chloe is a tiny Apricot Poodle with a big heart! Highly trainable and eager to join you on daily strolls or snuggle on the sofa.",
      parents: {
        dam: "Daisy (Toy Poodle - 11 lbs)",
        sire: "Buster (Miniature Poodle - 14 lbs)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-105",
      name: "Rocky",
      breed: "German Shepherd",
      breedId: "german-shepherd",
      gender: "Male",
      ageWeeks: 9,
      ageFormatted: "9 Weeks",
      price: 1750,
      originalPrice: 2000,
      sizeCategory: "Large",
      expectedWeight: "65 - 80 lbs",
      currentWeight: "8.2 lbs",
      color: "Black & Tan",
      location: "Denver, CO",
      isFeatured: true,
      hasVideo: true,
      badges: ["Loyal Companion", "Working Line", "Socialized Early"],
      temperament: ["Confident", "Loyal", "Watchful", "Energetic"],
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-puppy-running-in-the-grass-42616-large.mp4",
      description: "Rocky is a handsome, brave German Shepherd pup with excellent posture and a sharp mind. Already showing great focus and eager to learn.",
      parents: {
        dam: "Freya (German Shepherd - 68 lbs, Schutzhund I)",
        sire: "Rex (German Shepherd - 78 lbs, SV Imported Line)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-106",
      name: "Daisy",
      breed: "Golden Retriever",
      breedId: "golden-retriever",
      gender: "Female",
      ageWeeks: 10,
      ageFormatted: "10 Weeks",
      price: 1900,
      originalPrice: 2200,
      sizeCategory: "Large",
      expectedWeight: "60 - 70 lbs",
      currentWeight: "7.1 lbs",
      color: "Dark Golden",
      location: "Nashville, TN",
      isFeatured: false,
      hasVideo: false,
      badges: ["Water Lover", "Cuddle Specialist", "Family Favorite"],
      temperament: ["Calm", "Loving", "Patient", "Sweet"],
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: null,
      description: "Daisy is a dark golden beauty with a gentle soul. She loves lounging near your feet and giving warm puppy kisses.",
      parents: {
        dam: "Amber (Golden Retriever - 60 lbs)",
        sire: "Sammy (Golden Retriever - 72 lbs)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-107",
      name: "Oliver",
      breed: "French Bulldog",
      breedId: "french-bulldog",
      gender: "Male",
      ageWeeks: 8,
      ageFormatted: "8 Weeks",
      price: 2600,
      originalPrice: 2950,
      sizeCategory: "Small",
      expectedWeight: "24 - 28 lbs",
      currentWeight: "4.5 lbs",
      color: "Pied (White & Black)",
      location: "San Diego, CA",
      isFeatured: false,
      hasVideo: true,
      badges: ["AKC Registered", "Snuggle Champion", "Compact Frame"],
      temperament: ["Playful", "Silly", "Affectionate", "Comical"],
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-french-bulldog-puppy-running-towards-the-camera-42621-large.mp4",
      description: "Oliver has a funny personality that will keep you smiling all day long. Loves soft chew toys and lap naps.",
      parents: {
        dam: "Maya (French Bulldog - 22 lbs)",
        sire: "Bruno (French Bulldog - 27 lbs)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    },
    {
      id: "pup-108",
      name: "Luna",
      breed: "Goldendoodle",
      breedId: "goldendoodle",
      gender: "Female",
      ageWeeks: 9,
      ageFormatted: "9 Weeks",
      price: 2100,
      originalPrice: 2400,
      sizeCategory: "Medium",
      expectedWeight: "30 - 40 lbs",
      currentWeight: "5.1 lbs",
      color: "Cream & Caramel",
      location: "Charlotte, NC",
      isFeatured: false,
      hasVideo: true,
      badges: ["Hypoallergenic", "Gentle Temperament", "Microchipped"],
      temperament: ["Graceful", "Smart", "Social", "Joyful"],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-puppy-running-in-the-grass-42616-large.mp4",
      description: "Luna is a graceful Goldendoodle with silky wavy fleece. She thrives on human companionship and gets along wonderfully with kids.",
      parents: {
        dam: "Nala (F1 Goldendoodle - 38 lbs)",
        sire: "Winston (Poodle - 32 lbs)"
      },
      healthCheck: {
        deWormed: true,
        vaccinationsUpToDate: true,
        vetExamined: true,
        microchipped: true,
        healthGuarantee: "10 Years"
      }
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah & David M.",
      location: "Seattle, WA",
      adoptedPuppy: "Cooper (Goldendoodle)",
      rating: 5,
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      text: "Adopting Cooper through Paws & Spot was the smoothest experience! The Flight Nanny service was top notch, and Cooper arrived healthy, happy, and already microchipped. We love him so much!"
    },
    {
      id: 2,
      name: "Marcus Vance",
      location: "Chicago, IL",
      adoptedPuppy: "Kobe (French Bulldog)",
      rating: 5,
      date: "May 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text: "The 10-Year Health Guarantee gave me true peace of mind. Kobe came with all vet records, vaccination tags, and a starter puppy kit. Exceptional breeder standards!"
    },
    {
      id: 3,
      name: "Emily & Family",
      location: "Austin, TX",
      adoptedPuppy: "Daisy (Golden Retriever)",
      rating: 5,
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      text: "Our kids fell in love with Daisy's video preview on the website, and meeting her in person was even better! Thank you for matching us with our dream pup."
    }
  ],

  trustPillars: [
    {
      icon: "shield-check",
      title: "10-Year Health Guarantee",
      description: "Comprehensive health coverage protecting your new puppy against genetic health conditions for 10 full years."
    },
    {
      icon: "plane",
      title: "Nationwide Travel & Flight Nanny",
      description: "Private hand-delivery directly to your local airport or right to your doorstep with our certified Flight Nanny network."
    },
    {
      icon: "award",
      title: "USDA & Proprietary Breeder Screening",
      description: "We vet less than 10% of applicants. All breeders must pass strict health, sanitation, and humane care audits."
    },
    {
      icon: "heart-pulse",
      title: "Complete Vet Health Examination",
      description: "Every puppy undergoes a nose-to-tail veterinary checkup, up-to-date vaccinations, and microchip registration."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PUPPY_DATA;
}
