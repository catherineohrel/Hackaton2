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
        "coord": [25.079, -77.343]  ,
        "preciousstone": "diamonds",
        "silvercoins": 7300,
        "goldcoins": 8600
    },
    {
        "id" : 2,
        "isfavorite" : "false",
        "name" : "Captain Kidd's Fortune",
        "coord": [25.023, -77.408]   ,
        "preciousstone": "emeralds",
        "silvercoins": 1600,
        "goldcoins": 7300
    },
    {
        "id" : 3,
        "isfavorite" : "false",
        "name" : "The Hidden Jewels of Anne Bonny",
        "coord": [25.132, -77.497]   ,
        "preciousstone": "rubis",
        "silvercoins": 2300,
        "goldcoins": 9700
    },
    {
        "id" : 4,
        "isfavorite" : "false",
        "name" : "The Cursed Aztec Gold",
        "coord": [25.185, -77.319]   ,
        "preciousstone": "saphires",
        "silvercoins":  6600,
        "goldcoins": 3200
    },
    {
        "id" : 5,
        "isfavorite" : "false",
        "name" : "The Emerald Hoard of Captain Flint",
        "coord": [24.920, -77.736]   ,
        "preciousstone": "diamonds",
        "silvercoins": 2400,
        "goldcoins": 8700
    },
    {
        "id" : 6,
        "isfavorite" : "false",
        "name" : "The Sunken Treasures of the Caribbean",
        "coord": [24.769, -77.784]   ,
        "preciousstone": "rubis",
        "silvercoins": 4400,
        "goldcoins": 6200
    },
    {
        "id" : 7,
        "isfavorite" : "false",
        "name" : "The Ghost Ship's Secret Stash",
        "coord": [24.551, -77.786]   ,
        "preciousstone": "diamonds",
        "silvercoins": 1400,
        "goldcoins": 8600
    },
    {
        "id" : 8,
        "isfavorite" : "false",
        "name" : "The Ruby Skull of Captain Blood",
        "coord": [24.718, -77.978]   ,
        "preciousstone": "saphire",
        "silvercoins": 7600,
        "goldcoins": 4300
    },
    {
        "id" : 9,
        "isfavorite" : "false",
        "name" : "The Pirate Queen's Diamond Trove",
        "coord": [24.539, -77.959]   ,
        "preciousstone": "emeralds",
        "silvercoins": 8400,
        "goldcoins": 2100
    },
    {
        "id" : 10,
        "isfavorite" : "false",
        "name" : "The Forgotten Chest of Calico Jack",
        "coord": [24.322, -77.996]   ,
        "preciousstone": "diamonds",
        "silvercoins": 6500,
        "goldcoins": 3200
    },
    {
        "id" : 11,
        "isfavorite" : "false",
        "name" : "The Golden Fleece of Captain Morgan",
        "coord": [24.535, -77.628]   ,
        "preciousstone": "rubis",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 12,
        "isfavorite" : "false",
        "name" : "The Neptune's Bounty",
        "coord": [24.685, -77.495]   ,
        "preciousstone": "emeralds",
        "silvercoins": 1400,
        "goldcoins": 8500
    },
    {
        "id" : 13,
        "isfavorite" : "false",
        "name" : "The Pirate's Eye Diamond",
        "coord": [24.750, -77.297]   ,
        "preciousstone": "diamonds",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 14,
        "isfavorite" : "false",
        "name" : "The Lost Scepter of Captain Kidd",
        "coord": [24.834, -77.159]   ,
        "preciousstone": "rubis",
        "silvercoins": 2500,
        "goldcoins": 7500
    },
    {
        "id" : 15,
        "isfavorite" : "false",
        "name" : "The Pearl of the Spanish Main",
        "coord": [24.646, -76.936]   ,
        "preciousstone": "saphires",
        "silvercoins": 4000,
        "goldcoins": 7000
    },
    {
        "id" : 16,
        "isfavorite" : "false",
        "name" : "The Black Pearl's Hidden Loot",
        "coord": [24.378, -76.900]   ,
        "preciousstone": "rubis",
        "silvercoins": 9000,
        "goldcoins": 1000
    },
    {
        "id" : 17,
        "isfavorite" : "false",
        "name" : "The Skeleton Key's Treasures",
        "coord": [25.034, -77.498]   ,
        "preciousstone": "saphires",
        "silvercoins": 2000,
        "goldcoins": 3000
    },
    {
        "id" : 18,
        "isfavorite" : "false",
        "name" : "The Pirate's Cove Treasure Cache",
        "coord": [24.826, -77.690]   ,
        "preciousstone": "emeralds",
        "silvercoins": 5000,
        "goldcoins": 5000
    },
    {
        "id" : 19,
        "isfavorite" : "false",
        "name" : "The Mysterious Chest of Captain Roberts",
        "coord": [25.220, -77.130]   ,
        "preciousstone": "rubis",
        "silvercoins": 1000,
        "goldcoins": 8000
    },
    {
        "id" : 20,
        "isfavorite" : "false",
        "name" : "The Mythical Kraken's Horde",
        "coord": [25.169, -77.350]   ,
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
            "coord": [25.079, -77.343]   ,
            "cargovalue": 1000,
            "url": "https://images.midilibre.fr/api/v1/images/view/6254476e9667396a7739a6d7/large/image.jpg?v=1"

    },
    {
        
            "id" : 2,
            "isfavorite" : "false",
            "name" : "La Furia",
            "nation": "spain",
            "coord": [25.023, -77.408]   ,
            "cargovalue": 1000,
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BriculMircea2.jpg/280px-BriculMircea2.jpg"

    },
    {
        
            "id" : 3,
            "isfavorite" : "false",
            "name" : "El Invencible",
            "nation": "spain",
            "coord": [25.132, -77.497]   ,
            "cargovalue": 1000,
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tall_ship_Christian_Radich_under_sail.jpg/300px-Tall_ship_Christian_Radich_under_sail.jpg"

    },
    {
        
            "id" : 4,
            "isfavorite" : "false",
            "name" : "La Victoria",
            "nation": "spain",
            "coord": [25.185, -77.319]   ,
            "cargovalue": 1000,
            "url": "https://blog.vogweek.vogavecmoi.com/wp-content/uploads/sites/3/2020/09/3_mats_francais-1024x576.png"

    },
    {
        
            "id" : 5,
            "isfavorite" : "false",
            "name" : "El Rayo",
            "nation": "spain",
            "coord": [24.920, -77.736]   ,
            "cargovalue": 1000,
            "url": "https://blog.vogweek.vogavecmoi.com/wp-content/uploads/sites/3/2020/09/Le_Francais-1024x550.jpeg"

    },
    {
        
            "id" : 6,
            "isfavorite" : "false",
            "name" : "De Zeearend",
            "nation": "dutch",
            "coord": [24.769, -77.784]   ,
            "cargovalue": 1000,
            "url": "https://info.vieuxgreement.com/3-trois-mats/trois-mats-barque/photo-simon-bolivar/large/150-simon-bolivar-trois-mats-venezuela.jpg"

    },
    {
        
            "id" : 7,
            "isfavorite" : "false",
            "name" : "De Windhond",
            "nation": "dutch",
            "coord": [24.551, -77.786]   ,
            "cargovalue": 1000,
            "url": "https://vergue.com/media/3-mats-general-de-sonis.jpg"

    },
    {
        
            "id" : 8,
            "isfavorite" : "false",
            "name" : "De Dolfijn",
            "nation": "dutch",
            "coord": [24.718, -77.978]   ,
            "cargovalue": 1000,
            "url": "https://media.bateaux.com/bateaux/29860/bateau-traditionnel-grands-voiliers-voile-tradition-3.jpg"

    },
    {
        
            "id" : 9,
            "isfavorite" : "false",
            "name" : "The flying dutchman",
            "nation": "dutch",
            "coord": [24.539, -77.959]   ,
            "cargovalue": 1000,
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9A%D1%80%D1%83%D0%B7%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D1%80%D0%BD_10.JPG/1200px-%D0%9A%D1%80%D1%83%D0%B7%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D1%80%D0%BD_10.JPG"

    },
    {
        
            "id" : 10,
            "isfavorite" : "false",
            "name" : "De Admiraal",
            "nation": "dutch",
            "coord": [24.322, -77.996]   ,
            "cargovalue": 1000,
            "url": "https://www.francebleu.fr/s3/cruiser-production/2021/08/99d09f05-39ad-4faa-b7bb-1ae89459d7fb/1200x680_ab7a6805bd.jpg"

    },
    {
        
            "id" : 11,
            "isfavorite" : "false",
            "name" : "HMS Revenge",
            "nation": "british",
            "coord": [24.535, -77.628]  ,
            "cargovalue": 1000,
            "url": "https://www.vieuxgreement.com/upload_files/image_258.jpg"

    },
    {
        
            "id" : 12,
            "isfavorite" : "false",
            "name" : "HMS Vengeance",
            "nation": "british",
            "coord": [24.685, -77.495]   ,
            "cargovalue": 1000,
            "url": "https://escaleasete.com/wp-content/uploads/2020/12/MFP6328-1024x683.jpg"

    },
    {
        
            "id" : 13,
            "isfavorite" : "false",
            "name" : "HMS Thunderbolt",
            "nation": "british",
            "coord": [24.750, -77.297]   ,
            "cargovalue": 1000,
            "url": "https://www.podcastjournal.net/photo/art/grande/8349791-13083621.jpg?v=1444058596"

    },
    {
        
            "id" : 14,
            "isfavorite" : "false",
            "name" : "HMS Dreadnought",
            "nation": "british",
            "coord": [24.834, -77.159]   ,
            "cargovalue": 1000,
            "url": "https://i0.wp.com/misscorail.com/wp-content/uploads/2018/11/le-plus-beau-voilier-du-monde.jpg?fit=800%2C480&ssl=1"

    },
    {
        
            "id" : 15,
            "isfavorite" : "false",
            "name" : "HMS Britannia",
            "nation": "british",
            "coord": [24.646, -76.936]   ,
            "cargovalue": 1000,
            "url": "https://seatizens.org/wp-content/uploads/2022/12/1657548621450.jpeg"

    },
    {
        
            "id" : 16,
            "isfavorite" : "false",
            "name" : "La Tempête",
            "nation": "french",
            "coord": [24.378, -76.900]   ,
            "cargovalue": 1000,
            "url": "https://www.armada.org/template/img/bateau/b_157/big/bda3aa7cce64284735f935421ecf55c0cc37fc1f.jpg"

    },
    {
        
            "id" : 17,
            "isfavorite" : "false",
            "name" : "Le Faucon",
            "nation": "french",
            "coord": [25.034, -77.498]   ,
            "cargovalue": 1000,
            "url": "https://www.mesailor.com/wp-content/uploads/2018/12/Le-Sagres-II.jpg"

    },
    {
        
            "id" : 18,
            "isfavorite" : "false",
            "name" : "L'eclair",
            "nation": "french",
            "coord": [24.826, -77.690]   ,
            "cargovalue": 1000,
            "url": "https://www.monacruises.com/html/images/bateau/Royal-Clipper_1479523101.jpg"

    },
    {
        
            "id" : 19,
            "isfavorite" : "false",
            "nation": "french",
            "name" : "Le Vaillant",
            "coord": [25.220, -77.130]   ,
            "cargovalue": 1000,
            "url": "https://www.techno-science.net/illustration/Definitions/1200px/g/gorchfock-untersegeln-kielerfoerde2006_db0ac2cca622ec64cc2c598e198d28c6.jpg"

    },
    {
        
            "id" : 20,
            "isfavorite" : "false",
            "nation": "french",
            "name" : "La Victoire",
            "coord": [25.169, -77.350]   ,
            "cargovalue": 1000,
            "url": "https://image.over-blog.com/IuvBZkN9OadXgmjf78yciutGT4c=/filters:no_upscale()/image%2F0551828%2F20220703%2Fob_d97b49_kaskelot-br-2008-geoar-skreo-dz.jpg"

    },
]