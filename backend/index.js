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
        "coord": [23.03838030838844,-81.64982015192382]  ,
        "preciousstone": "diamonds",
        "silvercoins": 7300,
        "goldcoins": 8600,
        "cat" : "treasure"
    },
    {
        "id" : 2,
        "isfavorite" : "false",
        "name" : "Captain Kidd's Fortune",
        "coord": [19.317747508172097,-81.18234802668346]   ,
        "preciousstone": "emeralds",
        "silvercoins": 1600,
        "goldcoins": 7300,
        "cat" : "treasure"
    },
    {
        "id" : 3,
        "isfavorite" : "false",
        "name" : "The Hidden Jewels of Anne Bonny",
        "coord": [19.675479708053718,-80.07644212168778]   ,
        "preciousstone": "rubis",
        "silvercoins": 2300,
        "goldcoins": 9700,
        "cat" : "treasure"
    },
    {
        "id" : 4,
        "isfavorite" : "false",
        "name" : "The Cursed Aztec Gold",
        "coord": [19.74611645286318,-79.73897525891327]   ,
        "preciousstone": "saphires",
        "silvercoins":  6600,
        "goldcoins": 3200,
        "cat" : "treasure"
    },
    {
        "id" : 5,
        "isfavorite" : "false",
        "name" : "The Emerald Hoard of Captain Flint",
        "coord": [24.547606212283043,-78.35176412113559]   ,
        "preciousstone": "diamonds",
        "silvercoins": 2400,
        "goldcoins": 8700,
        "cat" : "treasure"
    },
    {
        "id" : 6,
        "isfavorite" : "false",
        "name" : "The Sunken Treasures of the Caribbean",
        "coord": [25.13335457086768,-78.14387771457115]   ,
        "preciousstone": "rubis",
        "silvercoins": 4400,
        "goldcoins": 6200,
        "cat" : "treasure"
    },
    {
        "id" : 7,
        "isfavorite" : "false",
        "name" : "The Ghost Ship's Secret Stash",
        "coord": [24.81020587562943,-77.90191156922563]   ,
        "preciousstone": "diamonds",
        "silvercoins": 1400,
        "goldcoins": 8600,
        "cat" : "treasure"
    },
    {
        "id" : 8,
        "isfavorite" : "false",
        "name" : "The Ruby Skull of Captain Blood",
        "coord": [24.38692648052683,-77.95984712515342]   ,
        "preciousstone": "saphire",
        "silvercoins": 7600,
        "goldcoins": 4300,
        "cat" : "treasure"
    },
    {
        "id" : 9,
        "isfavorite" : "false",
        "name" : "The Pirate Queen's Diamond Trove",
        "coord": [23.980908865281567,-77.74514477083277]   ,
        "preciousstone": "emeralds",
        "silvercoins": 8400,
        "goldcoins": 2100,
        "cat" : "treasure"
    },
    {
        "id" : 10,
        "isfavorite" : "false",
        "name" : "The Forgotten Chest of Calico Jack",
        "coord": [23.746374965536226,-77.6727089065958]   ,
        "preciousstone": "diamonds",
        "silvercoins": 6500,
        "goldcoins": 3200,
        "cat" : "treasure"
    },
    {
        "id" : 11,
        "isfavorite" : "false",
        "name" : "The Golden Fleece of Captain Morgan",
        "coord": [21.9061665729723,-79.66457960769569]   ,
        "preciousstone": "rubis",
        "silvercoins": 4000,
        "goldcoins": 7000,
        "cat" : "treasure"
    },
    {
        "id" : 12,
        "isfavorite" : "false",
        "name" : "The Neptune's Bounty",
        "coord": [21.065915311174354,-78.2931072758126]   ,
        "preciousstone": "emeralds",
        "silvercoins": 1400,
        "goldcoins": 8500,
        "cat" : "treasure"
    },
    {
        "id" : 13,
        "isfavorite" : "false",
        "name" : "The Pirate's Eye Diamond",
        "coord": [20.018318699278588,-77.35310938542084]   ,
        "preciousstone": "diamonds",
        "silvercoins": 4000,
        "goldcoins": 7000,
        "cat" : "treasure"
    },
    {
        "id" : 14,
        "isfavorite" : "false",
        "name" : "The Lost Scepter of Captain Kidd",
        "coord": [20.219328205733536,-74.52435676109951]   ,
        "preciousstone": "rubis",
        "silvercoins": 2500,
        "goldcoins": 7500,
        "cat" : "treasure"
    },
    {
        "id" : 15,
        "isfavorite" : "false",
        "name" : "The Pearl of the Spanish Main",
        "coord": [21.01827696693266,-73.23346320641201]   ,
        "preciousstone": "saphires",
        "silvercoins": 4000,
        "goldcoins": 7000,
        "cat" : "treasure"
    },
    {
        "id" : 16,
        "isfavorite" : "false",
        "name" : "The Black Pearl's Hidden Loot",
        "coord": [21.486206155302423,-72.99725715172451]   ,
        "preciousstone": "rubis",
        "silvercoins": 9000,
        "goldcoins": 1000,
        "cat" : "treasure"
    },
    {
        "id" : 17,
        "isfavorite" : "false",
        "name" : "The Skeleton Key's Treasures",
        "coord": [22.359638470707985,-74.03546515953701]   ,
        "preciousstone": "saphires",
        "silvercoins": 2000,
        "goldcoins": 3000,
        "cat" : "treasure"
    },
    {
        "id" : 18,
        "isfavorite" : "false",
        "name" : "The Pirate's Cove Treasure Cache",
        "coord": [22.7303089363564,-74.21950097104005]   ,
        "preciousstone": "emeralds",
        "silvercoins": 5000,
        "goldcoins": 5000,
        "cat" : "treasure"
    },
    {
        "id" : 19,
        "isfavorite" : "false",
        "name" : "The Mysterious Chest of Captain Roberts",
        "coord": [24.151152092195172,-75.4913088234545]   ,
        "preciousstone": "rubis",
        "silvercoins": 1000,
        "goldcoins": 8000,
        "cat" : "treasure"
    },
    {
        "id" : 20,
        "isfavorite" : "false",
        "name" : "The Mythical Kraken's Horde",
        "coord": [24.760258911212926,-76.20548233663104]   ,
        "preciousstone": "diamonds",
        "silvercoins": 2000,
        "goldcoins": 6000,
        "cat" : "treasure",
    },
    {
        
        "id" : 21,
        "isfavorite" : "false",
        "name" : "El Bravo",
        "nation": "spain",
        "coord": [24.582482295446866,-79.20003056126968]   ,
        "cargovalue": 1000,
        "url": "https://images.midilibre.fr/api/v1/images/view/6254476e9667396a7739a6d7/large/image.jpg?v=1",
        "members":20,
        "canons": 8,
        "speed":0.05, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 45,
        "cat" : "ship"
},
{
    
        "id" : 22,
        "isfavorite" : "false",
        "name" : "La Furia",
        "nation": "spain",
        "coord": [24.22734072362143,-80.39466004700276]   ,
        "cargovalue": 2000,
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BriculMircea2.jpg/280px-BriculMircea2.jpg",
        "members":24,
        "canons": 12,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 60,
        "cat" : "ship"
},
{
    
        "id" : 23,
        "isfavorite" : "false",
        "name" : "El Invencible",
        "nation": "spain",
        "coord": [24.12468402764425,-79.09212854320346]   ,
        "cargovalue": 3000,
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tall_ship_Christian_Radich_under_sail.jpg/300px-Tall_ship_Christian_Radich_under_sail.jpg",
        "members":28,
        "canons": 16,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 75,
        "cat" : "ship"
},
{
    
        "id" : 24,
        "isfavorite" : "false",
        "name" : "La Victoria",
        "nation": "spain",
        "coord": [21.089873355528347,-81.82821542988242]   ,
        "cargovalue": 4000,
        "url": "https://blog.vogweek.vogavecmoi.com/wp-content/uploads/sites/3/2020/09/3_mats_francais-1024x576.png",
        "members":32,
        "canons": 20,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 90,
        "cat" : "ship"

},
{
    
        "id" : 25,
        "isfavorite" : "false",
        "name" : "El Rayo",
        "nation": "spain",
        "coord": [20.1767325321609,-80.44861105603584]   ,
        "cargovalue": 5000,
        "url": "https://blog.vogweek.vogavecmoi.com/wp-content/uploads/sites/3/2020/09/Le_Francais-1024x550.jpeg",
        "members":36,
        "canons": 24,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 105,
        "cat" : "ship"

},
{
    
        "id" : 26,
        "isfavorite" : "false",
        "name" : "De Zeearend",
        "nation": "dutch",
        "coord": [19.199994236470708,-79.87056453068112]   ,
        "cargovalue": 6000,
        "url": "https://info.vieuxgreement.com/3-trois-mats/trois-mats-barque/photo-simon-bolivar/large/",
        "members":40,
        "canons": 24,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 120,
        "cat" : "ship"

},
{
    
        "id" : 27,
        "isfavorite" : "false",
        "name" : "De Windhond",
        "nation": "dutch",
        "coord": [19.18106901820956,-78.0901812325886]   ,
        "cargovalue": 7000,
        "url": "https://vergue.com/media/3-mats-general-de-sonis.jpg",
        "members":20,
        "canons": 8,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 135,
        "cat" : "ship"

},
{
    
        "id" : 28,
        "isfavorite" : "false",
        "name" : "De Dolfijn",
        "nation": "dutch",
        "coord": [19.205817352795954,-75.8936044362407]   ,
        "cargovalue": 8000,
        "url": "https://media.bateaux.com/bateaux/29860/bateau-traditionnel-grands-voiliers-voile-tradition-3.jpg",
        "members":24,
        "canons": 8,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 150,
        "cat" : "ship"

},
{
    
        "id" : 29,
        "isfavorite" : "false",
        "name" : "The flying dutchman",
        "nation": "dutch",
        "coord": [20.665000904520884,-73.80492965795898]   ,
        "cargovalue": 9000,
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D0%9A%D1%80%D1%83%D0%B7%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D1%80%D0%BD_10.JPG/1200px-%D0%9A%D1%80%D1%83%D0%B7%D0%B5%D0%BD%D1%88%D1%82%D0%B5%D1%80%D0%BD_10.JPG",
        "members":28,
        "canons": 12,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 165,
        "cat" : "ship"

},
{
    
        "id" : 30,
        "isfavorite" : "false",
        "name" : "De Admiraal",
        "nation": "dutch",
        "coord": [22.053166627447947,-73.11898111453807]   ,
        "cargovalue": 10000,
        "url": "https://www.francebleu.fr/s3/cruiser-production/2021/08/99d09f05-39ad-4faa-b7bb-1ae89459d7fb/1200x680_ab7a6805bd.jpg",
        "members":20,
        "canons": 8,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 180,
        "cat" : "ship"

},
{
    
        "id" : 31,
        "isfavorite" : "false",
        "name" : "HMS Revenge",
        "nation": "british",
        "coord": [21.70557375057205,-75.02268100470627]  ,
        "cargovalue": 1000,
        "url": "https://www.vieuxgreement.com/upload_files/image_258.jpg",
        "members":36,
        "canons": 20,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 195,
        "cat" : "ship"

},
{
    
        "id" : 32,
        "isfavorite" : "false",
        "name" : "HMS Vengeance",
        "nation": "british",
        "coord": [23.01278044471122,-77.51213470723388]   ,
        "cargovalue": 2000,
        "url": "https://escaleasete.com/wp-content/uploads/2020/12/MFP6328-1024x683.jpg",
        "members":40,
        "canons": 18,
       "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 210,
        "cat" : "ship"

},
{
    
        "id" : 33,
        "isfavorite" : "false",
        "name" : "HMS Thunderbolt",
        "nation": "british",
        "coord": [23.47592125325548,-74.32902517428059]   ,
        "cargovalue": 3000,
        "url": "https://www.podcastjournal.net/photo/art/grande/8349791-13083621.jpg?v=1444058596",
        "members":27,
        "canons": 14,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 225,
        "cat" : "ship"

},
{
    
        "id" : 34,
        "isfavorite" : "false",
        "name" : "HMS Dreadnought",
        "nation": "british",
        "coord": [24.821952964200204,-75.21536317982448]   ,
        "cargovalue": 4000,
        "url": "https://i0.wp.com/misscorail.com/wp-content/uploads/2018/11/le-plus-beau-voilier-du-monde.jpg?fit=800%2C480&ssl=1",
        "members":29,
        "canons": 16,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 240,
        "cat" : "ship"

},
{
    
        "id" : 35,
        "isfavorite" : "false",
        "name" : "HMS Britannia",
        "nation": "british",
        "coord": [25.709915840935498,-76.27126149947242]   ,
        "cargovalue": 5000,
        "url": "https://seatizens.org/wp-content/uploads/2022/12/1657548621450.jpeg",
        "members":20,
        "canons": 8,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 265,
        "cat" : "ship"

},
{
    
        "id" : 36,
        "isfavorite" : "false",
        "name" : "La Tempête",
        "nation": "french",
        "coord": [25.886169803980803,-78.09788851959333]   ,
        "cargovalue": 6000,
        "url": "https://www.armada.org/template/img/bateau/b_157/big/bda3aa7cce64284735f935421ecf55c0cc37fc1f.jpg",
        "members":32,
        "canons": 18,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 280,
        "cat" : "ship"

},
{
    
        "id" : 37,
        "isfavorite" : "false",
        "name" : "Le Faucon",
        "nation": "french",
        "coord": [27.424914183291516,-77.53525656824809]   ,
        "cargovalue": 7000,
        "url": "https://www.mesailor.com/wp-content/uploads/2018/12/Le-Sagres-II.jpg",
        "members":38,
        "canons": 22,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 295,
        "cat" : "ship"

},
{
    
        "id" : 38,
        "isfavorite" : "false",
        "name" : "L'eclair",
        "nation": "french",
        "coord": [26.472698156623096,-75.26160690185287]   ,
        "cargovalue": 8000,
        "url": "https://www.monacruises.com/html/images/bateau/Royal-Clipper_1479523101.jpg",
        "members":28,
        "canons": 16,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 310,
        "cat" : "ship"

},
{
    
        "id" : 39,
        "isfavorite" : "false",
        "nation": "french",
        "name" : "Le Vaillant",
        "coord": [24.926838266718182,-74.03614826810087]   ,
        "cargovalue": 9000,
        "url": "https://www.techno-science.net/illustration/Definitions/1200px/g/gorchfock-untersegeln-kielerfoerde2006_db0ac2cca622ec64cc2c598e198d28c6.jpg",
        "members":24,
        "canons": 12,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 325,
        "cat" : "ship"

},
{
    
        "id" : 40,
        "isfavorite" : "false",
        "nation": "french",
        "name" : "La Victoire",
        "coord": [23.31889001064491,-73.18063941057589]   ,
        "cargovalue": 10000,
        "url": "https://image.over-blog.com/IuvBZkN9OadXgmjf78yciutGT4c=/filters:no_upscale()/image%2F0551828%2F20220703%2Fob_d97b49_kaskelot-br-2008-geoar-skreo-dz.jpg",
        "members":40,
        "canons": 24,
        "speed":0.01, // Vitesse en degrés de latitude/longitude par milliseconde
        "heading": 340,
        "cat" : "ship"

},
]

const ships= 
[
   
]