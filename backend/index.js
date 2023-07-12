const express = require("express");
const cors = require("cors")
const app = express();
// REGLAGE DU PORT
const port = 4242;

app.use(cors(

))
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });

  app.get('/', (req, res) => {
    
    res.send("Yo le back");
  });

//  ROUTES POUR TOUTES LES BATEAUX ET TRESORS

app.get('/treasures', (req, res) => {
    
    res.json(treasures);
  });

app.get('/ships', (req, res) => {
    
    res.json(ships);
  });

  // ROUTES POUR LES ID
  app.get('/treasures/:id', (req, res) => {
    const id = req.params.id;
    
    const treasure = treasures.find(fig => fig.id === parseInt(id));
    
    if (treasure) {
      res.json(treasure);
    } else {
      res.status(404).json({ message: 'treasure not found' });
    }
  });

  app.get('/ships/:id', (req, res) => {
    const id = req.params.id;
    
    const ship = ships.find(fig => fig.id === parseInt(id));
    
    if (ship) {
      res.json(ship);
    } else {
      res.status(404).json({ message: 'ship not found' });
    }
  });
const treasures = 
[
    {
        "id" : 1,
        "isfavorite" : "false",
        "name" : "The Lost Chest of Blackbeard",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 7300,
        "goldcoins": 8600
    },
    {
        "id" : 2,
        "isfavorite" : "false",
        "name" : "Captain Kidd's Fortune",
        "coord": 5  ,
        "preciousstone": "emeralds",
        "silvercoins": 1600,
        "goldcoins": 7300
    },
    {
        "id" : 3,
        "isfavorite" : "false",
        "name" : "The Hidden Jewels of Anne Bonny",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 2300,
        "goldcoins": 9700
    },
    {
        "id" : 4,
        "isfavorite" : "false",
        "name" : "The Cursed Aztec Gold",
        "coord": 5  ,
        "preciousstone": "saphires",
        "silvercoins": 5600,
        "goldcoins": 3200
    },
    {
        "id" : 5,
        "isfavorite" : "false",
        "name" : "The Emerald Hoard of Captain Flint",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 2400,
        "goldcoins": 8700
    },
    {
        "id" : 6,
        "isfavorite" : "false",
        "name" : "The Sunken Treasures of the Caribbean",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 4400,
        "goldcoins": 6200
    },
    {
        "id" : 7,
        "isfavorite" : "false",
        "name" : "The Ghost Ship's Secret Stash",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 1400,
        "goldcoins": 8600
    },
    {
        "id" : 8,
        "isfavorite" : "false",
        "name" : "The Ruby Skull of Captain Blood",
        "coord": 5  ,
        "preciousstone": "saphire",
        "silvercoins": 7600,
        "goldcoins": 4300
    },
    {
        "id" : 9,
        "isfavorite" : "false",
        "name" : "The Pirate Queen's Diamond Trove",
        "coord": 5  ,
        "preciousstone": "emeralds",
        "silvercoins": 8400,
        "goldcoins": 2100
    },
    {
        "id" : 10,
        "isfavorite" : "false",
        "name" : "The Forgotten Chest of Calico Jack",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 6500,
        "goldcoins": 3200
    },
    {
        "id" : 11,
        "isfavorite" : "false",
        "name" : "The Golden Fleece of Captain Morgan",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 12,
        "isfavorite" : "false",
        "name" : "The Neptune's Bounty",
        "coord": 5  ,
        "preciousstone": "emeralds",
        "silvercoins": 1400,
        "goldcoins": 8500
    },
    {
        "id" : 13,
        "isfavorite" : "false",
        "name" : "The Pirate's Eye Diamond",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 14,
        "isfavorite" : "false",
        "name" : "The Lost Scepter of Captain Kidd",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 2500,
        "goldcoins": 7500
    },
    {
        "id" : 15,
        "isfavorite" : "false",
        "name" : "The Pearl of the Spanish Main",
        "coord": 5  ,
        "preciousstone": "saphires",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 16,
        "isfavorite" : "false",
        "name" : "The Black Pearl's Hidden Loot",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 9000,
        "goldcoins": 1000
    },
    {
        "id" : 17,
        "isfavorite" : "false",
        "name" : "The Skeleton Key's Treasures",
        "coord": 5  ,
        "preciousstone": "saphires",
        "silvercoins": 2000,
        "goldcoins": 3000
    },
    {
        "id" : 18,
        "isfavorite" : "false",
        "name" : "The Pirate's Cove Treasure Cache",
        "coord": 5  ,
        "preciousstone": "emeralds",
        "silvercoins": 5000,
        "goldcoins": 5000
    },
    {
        "id" : 19,
        "isfavorite" : "false",
        "name" : "The Mysterious Chest of Captain Roberts",
        "coord": 5  ,
        "preciousstone": "rubis",
        "silvercoins": 1000,
        "goldcoins": 8000
    },
    {
        "id" : 20,
        "isfavorite" : "false",
        "name" : "The Mythical Kraken's Horde",
        "coord": 5  ,
        "preciousstone": "diamonds",
        "silvercoins": 2000,
        "goldcoins": 6000
    }

]


const ships= 
[
    {
        
            "id" : 1,
            "isfavorite" : "false",
            "name" : "El Bravo",
            "nation": "spain",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 2,
            "isfavorite" : "false",
            "name" : "La Furia",
            "nation": "spain",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 3,
            "isfavorite" : "false",
            "name" : "El Invencible",
            "nation": "spain",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 4,
            "isfavorite" : "false",
            "name" : "La Victoria",
            "nation": "spain",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 5,
            "isfavorite" : "false",
            "name" : "El Rayo",
            "nation": "spain",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 6,
            "isfavorite" : "false",
            "name" : "De Zeearend",
            "nation": "dutch",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 7,
            "isfavorite" : "false",
            "name" : "De Windhond",
            "nation": "dutch",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 8,
            "isfavorite" : "false",
            "name" : "De Dolfijn",
            "nation": "dutch",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 9,
            "isfavorite" : "false",
            "name" : "The flying dutchman",
            "nation": "dutch",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 10,
            "isfavorite" : "false",
            "name" : "De Admiraal",
            "nation": "dutch",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 11,
            "isfavorite" : "false",
            "name" : "HMS Revenge",
            "nation": "british",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 12,
            "isfavorite" : "false",
            "name" : "HMS Vengeance",
            "nation": "british",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 13,
            "isfavorite" : "false",
            "name" : "HMS Thunderbolt",
            "nation": "british",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 14,
            "isfavorite" : "false",
            "name" : "HMS Dreadnought",
            "nation": "british",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 15,
            "isfavorite" : "false",
            "name" : "HMS Britannia",
            "nation": "british",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 16,
            "isfavorite" : "false",
            "name" : "La Tempête",
            "nation": "french",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 17,
            "isfavorite" : "false",
            "name" : "Le Faucon",
            "nation": "french",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 18,
            "isfavorite" : "false",
            "name" : "L'eclair",
            "nation": "french",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 19,
            "isfavorite" : "false",
            "nation": "french",
            "name" : "Le Vaillant",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
    {
        
            "id" : 20,
            "isfavorite" : "false",
            "nation": "french",
            "name" : "La Victoire",
            "coord": 5  ,
            "cargovalue": 1000
        

    },
]