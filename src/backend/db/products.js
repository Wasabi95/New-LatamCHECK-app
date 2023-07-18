import { v4 as uuid } from 'uuid';
import OTAN from "./imagery/otan.png"
import CRYPTO from "./imagery/crypto.png"
import GATES from "./imagery/geogates.png"





export const products = [
  {
    _id: uuid(),
    name: 'Putin ha sido derrotado y la OTAN admite a Ucrania como miembro',
    date: new Date("2023-07-15").toISOString(),
    tags: ["Putin", "OTAN", "NATO ", "Ucrania", "Vladimir", "", "", ""],
    status: "FALSO",    
    category: 'Resto del Mundo',
    afirmacion: "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro el 10 de julio",
    analisis:
    'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?ref=search&v=667484881903196&external_log_id=05b10ee7-2d83-45e7-a743-906ca3ad57ea&q=putin%20ha%20sido%20derrotado" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y ha sido compartido más de 2 mil veces, y en <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dXWEr-D6J8I" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Youtube</a></em> con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.<br/> <br/> El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN. <br/> <br/>En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    veredicto: "FALSO. Aunque la OTAN ha afirmado que Ucrania podría convertirse en miembro, el organismo ha dicho que esto pasará cuando todos los miembros estén de acuerdo con esa decisión, lo que no ha ocurrido. Además, la guerra entre Rusia y Ucrania continúa; no ha sido derrotada ninguna de las partes.",
    image:OTAN,
    description:
    'wasabito pito is 39.62 <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>TikTok</a></em>, Thin. Graphics Card is Integrated',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: 'redmi',    
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'Mediante orden ejecutiva EO-14067, Biden convierte el dolar en una criptomoneda"',
    date: new Date("2023-07-15").toISOString(),
    tags: ["Biden", "Falso", "Criptomoneda", "cryptocurrency", "EO-14067", "14067"],
    status: "FALSO",
    category: 'Estados Unidos',
    afirmacion: "Joe Biden Convierte el Dolar en una Criptomoneda",
    analisis: 'Una publicación que circula en <em><a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/CuhHqTfMIT2/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Instagram</a></em> afirma falsamente que Joe Biden firmó la orden ejecutiva <em><a target="_blank" rel="noreferrer" href="https://www.whitehouse.gov/briefing-room/statements-releases/2022/03/09/fact-sheet-president-biden-to-sign-executive-order-on-ensuring-responsible-innovation-in-digital-assets/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>EO-14067</a></em> para convertir el dólar en una criptomoneda. Esta ley fue firmada el 9 de marzo de 2022, lo cual hace más de un año. La publicación insinúa erróneamente que esto es algo reciente después de que Joe Biden hablara sobre la eliminación de lagunas para los comerciantes de criptomonedas en su <em><a target="_blank" rel="noreferrer" href="https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/06/28/remarks-by-president-biden-on-bidenomics-chicago-il/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>discurso</a></em> "Bidenomics" el 28 de junio.',
    veredicto: "Esta información es FALSA, ya que no existe evidencia alguna ni comunicado oficial por parte de la Casa Blanca que afirme que el dólar se ha convertido en una criptomoneda.",
    image: CRYPTO, 
    description:
    'For this model, triki is 39.62  <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={tiktokLinkStyle}>TikTok</a>, Thin. Graphics Card is Integrated',
     colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',   
    price: 54499,
    originalPrice: 74999,
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
   name: 'La neblina reciente en la ciudad de Nueva York fue causada por  Bill Gates',
   date: new Date("2023-06-25").toISOString(),
   tags: ["Bill", "Gates", "neblina", "haze", "NYC", "climatico", "medio ambiente", "oscurecer"],
   status: "FALSO",
   category: 'Estados Unidos',
   afirmacion: "La neblina reciente en la ciudad de Nueva York fue causada por tecnologia de Bill Gates que pretende oscurecer el sol",
   analisis: 'Una publicación en <em><a target="_blank" rel="noreferrer" href="https://archive.org/details/elizabeth-glass-for-senate-ny-27-o-follow" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Instagram</a></em> y en este  <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=tkrZVx0A4X4" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>video</a></em>  afirma falsamente que la reciente neblina que cubrió la ciudad de Nueva York y otras ciudades del norte de Estados Unidos no fue causada por los incendios forestales en Canadá, sino por una geoingeniería creada por Bill Gates para oscurecer el sol y enfriar el planeta. Esto surge a raíz de la noticia de que Gates ha invertido en la tecnología de geoingeniería solar de la Universidad de Harvard, que experimenta con la liberación de polvo y azufre en la estratosfera en un intento de reducir el calor del sol y enfriar la Tierra.',
   veredicto: 'Esta información es FALSA, ya que carece de evidencia sólida. Organizaciones de buena reputación, como el "Servicio Meteorológico Nacional de Nueva York", han afirmado que el humo o neblina observados en la ciudad de Nueva York fueron causados por los fuertes incendios forestales en Canadá.',
   image: GATES,
   description:
    'For this model, triki is 39.62  <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={tiktokLinkStyle}>TikTok</a>, Thin. Graphics Card is Integrated',
    price: 13499,
    originalPrice: 24999,   
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',  
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
     name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
    date: new Date("2023-12-31").toISOString(),
    tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
    status: "FALSO",
    afirmacion: "Hello People",
    analisis: 'For this model, triki is 39.62  <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={tiktokLinkStyle}>TikTok</a>, Thin. Graphics Card is Integrated',
    veredicto: "Esta informacion es falsa",
    price: 21399,
    originalPrice: 29999,
    image:CRYPTO,
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Covid-19',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2022-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://images.pexels.com/photos/256523/pexels-photo-256523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'Medio Ambiente',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2021-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2016-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://images.pexels.com/photos/2975498/pexels-photo-2975498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2017-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://images.pexels.com/photos/2229887/pexels-photo-2229887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'Covid-19',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2018-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230705090623-02b-millionaire-sells-private-jet-environment-stephen-prince-crop-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Resto del Mundo',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2019-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230710104300-03-meta-threads-app-restricted-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },

  {
    _id: uuid(),
     name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
    date: new Date("2023-12-31").toISOString(),
    tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
    status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230707154306-elon-musk-0616-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
     name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
    date: new Date("2023-12-30").toISOString(),
    tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
    status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230707140934-03-joe-biden-fareed-zakaria-070723.jpg?c=16x9&q=h_438,w_780,c_fill',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Mexico',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2023-12-9").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230710160107-02-prime-day-preparation-amazon-uk-0707-restricted.jpg?c=16x9&q=h_438,w_780,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'America Latina',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
     name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
    date: new Date("2023-12-25").toISOString(),
    tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
    status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230627132222-putin-meeting-kremlin.jpg?c=16x9&q=h_438,w_780,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Covid-19',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2022-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230710091651-11-margot-robbie-barbie-style-0709-restricted.jpg?c=16x9&q=h_438,w_780,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'Medio Ambiente',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2021-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230711092413-burger-king-real-cheeseburger.jpg?c=16x9&q=h_438,w_780,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2016-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230503155036-trump-carroll-split.jpg?c=16x9&q=h_720,w_1280,c_fill',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2017-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230711122109-03-nato-summit-071123-family-photo.jpg?c=16x9&q=h_720,w_1280,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'Covid-19',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2018-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/230704192721-trump-republican-campaign-2024.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Resto del Mundo',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2019-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230608100817-china-factory-0527-restricted-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
     name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
    date: new Date("2023-12-25").toISOString(),
    tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
    status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230609124546-charging-bull-sculpture-manhattan-file-restricted-102322-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Covid-19',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2022-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230525162623-us-capitol-dome-0420-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'Medio Ambiente',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2021-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230528141212-03-kevin-mccarthy-debt-ceiling-0528-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2016-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230707135310-mtg-jordan-boebert-split-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2017-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230202091617-marjorie-taylor-greene-020123-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'Covid-19',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2018-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230710185246-the-lead-5p-prigozhin-putin-meeting-fred-pleitgen-jake-tapper-live-00004920-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Resto del Mundo',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2019-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230711013728-exp-putin-prigozhin-pleitgen-pkg-071112aseg1-cnni-world-00011424-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'Putin ha sido derrotado y la OTAN admite a Ucrania como miembro',
    date: new Date("2023-07-15").toISOString(),
    tags: ["Putin", "OTAN", "NATO ", "Ucrania", "Vladimir", "", "", ""],
    status: "FALSO",    
    category: 'Resto del Mundo',
    afirmacion: "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro el 10 de julio",
    analisis:
    'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?ref=search&v=667484881903196&external_log_id=05b10ee7-2d83-45e7-a743-906ca3ad57ea&q=putin%20ha%20sido%20derrotado" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y ha sido compartido más de 2 mil veces, y en <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dXWEr-D6J8I" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Youtube</a></em> con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.<br/> <br/> El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN. <br/> <br/>En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    veredicto: "FALSO. Aunque la OTAN ha afirmado que Ucrania podría convertirse en miembro, el organismo ha dicho que esto pasará cuando todos los miembros estén de acuerdo con esa decisión, lo que no ha ocurrido. Además, la guerra entre Rusia y Ucrania continúa; no ha sido derrotada ninguna de las partes.",
    description:
    'wasabito pito is 39.62 <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>TikTok</a></em>, Thin. Graphics Card is Integrated',
    image:OTAN,
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: 'redmi',    
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2021-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230528141212-03-kevin-mccarthy-debt-ceiling-0528-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2016-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230707135310-mtg-jordan-boebert-split-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2017-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230202091617-marjorie-taylor-greene-020123-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'Covid-19',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2018-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230710185246-the-lead-5p-prigozhin-putin-meeting-fred-pleitgen-jake-tapper-live-00004920-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Resto del Mundo',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2019-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230711013728-exp-putin-prigozhin-pleitgen-pkg-071112aseg1-cnni-world-00011424-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'Putin ha sido derrotado y la OTAN admite a Ucrania como miembro',
    date: new Date("2023-07-15").toISOString(),
    tags: ["Putin", "OTAN", "NATO ", "Ucrania", "Vladimir", "", "", ""],
    status: "FALSO",    
    category: 'Resto del Mundo',
    afirmacion: "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro el 10 de julio",
    analisis:
    'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?ref=search&v=667484881903196&external_log_id=05b10ee7-2d83-45e7-a743-906ca3ad57ea&q=putin%20ha%20sido%20derrotado" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y ha sido compartido más de 2 mil veces, y en <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dXWEr-D6J8I" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Youtube</a></em> con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.<br/> <br/> El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN. <br/> <br/>En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    veredicto: "FALSO. Aunque la OTAN ha afirmado que Ucrania podría convertirse en miembro, el organismo ha dicho que esto pasará cuando todos los miembros estén de acuerdo con esa decisión, lo que no ha ocurrido. Además, la guerra entre Rusia y Ucrania continúa; no ha sido derrotada ninguna de las partes.",
    description:
    'wasabito pito is 39.62 <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>TikTok</a></em>, Thin. Graphics Card is Integrated',
    image:OTAN,
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: 'redmi',    
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2021-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 31990,
    originalPrice: 51999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230528141212-03-kevin-mccarthy-debt-ceiling-0528-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2016-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 54499,
    originalPrice: 74999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230707135310-mtg-jordan-boebert-split-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#00ff00',
        colorQuantity: 8,
      },
      {
        color: '#000',
        colorQuantity: 2,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated',
    category: 'Estados Unidos',
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2017-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "VERDADERO",
    price: 13499,
    originalPrice: 24999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230202091617-marjorie-taylor-greene-020123-story-body.jpg?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 9,
      },
      {
        color: '#00ff00',
        colorQuantity: 2,
      },
      {
        color: '#ff0000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 9,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz. Tapu streams NETFLIX using this device 🧡',
    category: 'Covid-19',
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2018-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "FALSO",
    price: 21399,
    originalPrice: 29999,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230710185246-the-lead-5p-prigozhin-putin-meeting-fred-pleitgen-jake-tapper-live-00004920-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#000',
        colorQuantity: 4,
      },
    ],
    company: 'redmi',
    description:
      'For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.',
    category: 'Resto del Mundo',
    isShippingAvailable: false,
    stock: 4,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: uuid(),
    name: 'The WEF "Wants to slaughter millions of Dogs and Cats to fight Climate Change"',
   date: new Date("2019-12-25").toISOString(),
   tags: ["Politica", "Falso", "Ron", "Desantis", "Bandera", "Puerto Rico", "hb-1011", "sb-668"],
   status: "PARCIAL",
    price: 1299,
    originalPrice: 1599,
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/230711013728-exp-putin-prigozhin-pleitgen-pkg-071112aseg1-cnni-world-00011424-story-body.png?c=16x9&q=h_270,w_480,c_fill',
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 5,
      },
      {
        color: '#000',
        colorQuantity: 7,
      },
      {
        color: '#ffb900',
        colorQuantity: 3,
      },
    ],
    company: 'redmi',
    description:
      'This is a "In Ear" product and wireless and equipped with 9.2 mm dynamic drivers. Features include Dual-Mic Noise Cancellation, Dual Pairing Multi-Point Connection with Flexi Arc and Skin-friendly Design. This product is Atamaram Bhide\'s 🧡 and is in under common man budget.',
    category: 'HOAX',
    isShippingAvailable: true,
    stock: 15,
    reviewCount: 8238,
    stars: 2.5,
  },
  {
    _id: uuid(),
    name: 'Putin ha sido derrotado y la OTAN admite a Ucrania como miembro',
    date: new Date("2023-07-15").toISOString(),
    tags: ["Putin", "OTAN", "NATO ", "Ucrania", "Vladimir", "", "", ""],
    status: "FALSO",    
    category: 'Resto del Mundo',
    afirmacion: "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro el 10 de julio",
    analisis:
    'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?ref=search&v=667484881903196&external_log_id=05b10ee7-2d83-45e7-a743-906ca3ad57ea&q=putin%20ha%20sido%20derrotado" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y ha sido compartido más de 2 mil veces, y en <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dXWEr-D6J8I" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Youtube</a></em> con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.<br/> <br/> El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN. <br/> <br/>En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    veredicto: "FALSO. Aunque la OTAN ha afirmado que Ucrania podría convertirse en miembro, el organismo ha dicho que esto pasará cuando todos los miembros estén de acuerdo con esa decisión, lo que no ha ocurrido. Además, la guerra entre Rusia y Ucrania continúa; no ha sido derrotada ninguna de las partes.",
    description:
    'wasabito pito is 39.62 <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@wasabithebengalcat?lang=en" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>TikTok</a></em>, Thin. Graphics Card is Integrated',
    image:OTAN,
    colors: [
      {
        color: '#0000ff',
        colorQuantity: 10,
      },
      {
        color: '#00ff00',
        colorQuantity: 6,
      },
      {
        color: '#ff0000',
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: 'redmi',    
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
];
products.sort((a, b) => new Date(b.date) - new Date(a.date));