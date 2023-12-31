import { v4 as uuid } from "uuid";
import OTAN from "./imagery/otan.png";
import CRYPTO from "./imagery/crypto.png";
import GATES from "./imagery/geogates.png";
import DESANTIS from "./imagery/santisptorico.png";
import PAPAFRANCISCO from "./imagery/papafrancisco1.png";
import MIKEPENCE from "./imagery/MikePenceglobos.png";
import LUCASVILLA from "./imagery/LucasVilla.png";
import MARKWAHLBERG from "./imagery/Mark Wahlberg.png";
import CABALVALENCIA from "./imagery/Cabal Valencia.png";
import BILLGATES from "./imagery/BillGates.png";
import DEBRIS from "./imagery/Debris (2).png";
import ONU from "./imagery/ONU.png";
import PINK from "./imagery/Pink.png";
import BABIES from "./imagery/Babies.png";
import TORNADO from "./imagery/Tornado.png";
import PERALES from "./imagery/Perales.png";
import SWIFT from "./imagery/TaylorSwift.png";
import EMIR from "./imagery/emir.png";
import PFIZER from "./imagery/PFIZER.jpg";



export const products = [
  {
    _id: uuid(),
    name: "Pfizer reconoce la miocarditis como efecto secundario de las vacunas contra el Covid.",
    date: new Date("2023-11-01").toISOString(),
    tags: ["Covid", "Covid-19", "Covid 19", "Pfizer", "vacunas", "miocarditis", "efecto secundario"],
    status: "PARCIAL",
    category: 'Estados Unidos',
    afirmacion: 'Pfizer confiesa oficialmente: su pócima génica experimental ARNm (que no es una vacuna), incrementa el riesgo de sufrir miocarditis y pericarditis.',
    analisis: 'La publicación viralizada en redes sociales, como X y Facebook, muestra un aparente <em><a target="_blank" rel="noreferrer" href="https://twitter.com/eduardomenoni/status/1714400487665963312" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>comunicado</a></em> de la empresa farmacéutica Pfizer. "Pfizer confiesa oficialmente: su pócima génica experimental ARNm (que no es una vacuna) incrementa el riesgo de sufrir miocarditis y pericarditis (enfermedades graves y de por vida), tras negarlo durante casi cuatro años de embolsarse millones. Hay un exceso mundial de muertes sin explicación y miles de jóvenes con patologías impropias de su edad. Nadie está en la cárcel por ello.", afirma una de las publicaciones de X. Una captura de pantalla es de un comunicado en inglés de Pfizer, que señala: "Las vacunas de ARNm contra el covid-19, autorizadas o aprobadas, muestran mayores riesgos de miocarditis (inflamación del músculo cardíaco) y pericarditis (inflamación del revestimiento exterior del corazón), especialmente durante la primera semana después de la vacunación.  Segun el British Heart Foundation, los casos de <em><a target="_blank" rel="noreferrer" href="https://www.https://twitter.com/eduardomenoni/status/1714400487665963312" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>miocarditis</a></em> a causa de la vacuna de Covid 19 son extreadamente raros',
    veredicto: 'El comunicado de Pfizer esta asociado con la Agenda 2030 la cual insinua que las vacunas son peligrosas para la salud y que la pandemia fue creada por elites mundiales para controlar la humanidad, aunque es cierto el communicado de Pfizer y es cierto que en algunos casos la vacuna produce miocarditis y periocarditis es "Enganoso" insinuar que es peligrosa para la salud, por tal razon calificamos esta noticia como "PARCIAL"  .',
    image: PFIZER,
    description: 'Se está difundiendo una imagen en las redes sociales, especialmente en Facebook, en la que aparentemente se observa a la reconocida cantante estadounidense Taylor Swift usando una prenda con el eslogan del partido político mexicano Movimiento de Regeneración Nacional (Morena) durante su más reciente concierto en México.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
        {
        _id: uuid(),
        name: "Emir de Qatar provoca una escasez mundial de gas en solidaridad con Palestina.",
        date: new Date("2023-10-19").toISOString(),
        tags: ["Palestina", "Israel", "amenaza", "emir de Qatar", "solidaridad", "gas natural", "Gaza"],
        status: "FALSO",
        category: 'El Resto del Mundo',
        afirmacion:  ' Vídeo muestra al Emir de Qatar  anunciando que si no cesan los bombardeos sobre Gaza, cortará el suministro de gas al mundo, como gesto de apoyo a Palestina.',
        // eslint-disable-next-line no-multi-str
        analisis: 'La publicación en Facebook muestra un <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/wakili.elmainari/videos/844930417313394" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> video </a></em> \
        que aparentemente presenta al Emir de Qatar, Jeque Tamim bin Hamad Al-Thani, discutiendo la posibilidad de causar una escasez global de gas natural como muestra de solidaridad con Palestina. \
        Tras el <em><a target="_blank" rel="noreferrer" href="https://www.reuters.com/world/middle-east/how-hamas-attack-israel-unfolded-2023-10-07/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> ataque sorpresa</a></em> de Hamás a Israel el 7 de octubre, coincidiendo con la festividad judía de Simjat Torá, \
        el grupo islamista llevó a cabo un ataque coordinado that involved land, sea, and air operations, including missile launches and a deep incursion into Israeli-controlled territory. \
        Furthermore, Israeli women and children were captured and transported to Gaza in exchange for the release of 36 Palestinian women and children from Israeli prisons. \
        Since the armed conflict began between the Palestinian militant group Hamas and Israel on October 7, 2023, \
        <em><a target="_blank" rel="noreferrer" href="https://www.dw.com/es/puede-ser-qatar-un-mediador-en-el-conflicto-entre-israel-y-ham%C3%A1s/a-67095308" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Qatar,</a></em> \
        has been involved in mediation efforts, facilitating discussions and negotiations among the parties involved to help reduce the escalation of the conflict and seek the release of hostages. They have served as mediators to help find a peaceful solution to the situation.',       
        veredicto: 'El discurso del Emir qatarí Al Thani que se mencionaba en el video corresponde a una participación en el Foro de Doha en 2017, donde no se hizo mención del suministro de gas. Por el contrario, Qatar ha actuado como mediador para ayudar a encontrar una solución pacífica a la situación. Es esencial contar con información precisa y verificada para evitar la propagación de desinformación.',
        image: EMIR,
        description: 'Se está difundiendo una imagen en las redes sociales, especialmente en Facebook, en la que aparentemente se observa a la reconocida cantante estadounidense Taylor Swift usando una prenda con el eslogan del partido político mexicano Movimiento de Regeneración Nacional (Morena) durante su más reciente concierto en México.',
        colors: [
            {
                color: "#0000ff",
                colorQuantity: 10,
            },
            {
                color: "#00ff00",
                colorQuantity: 6,
            },
            {
                color: "#ff0000",
                colorQuantity: 9,
            },
        ],
        price: 31990,
        originalPrice: 51999,
        company: "redmi",
        isShippingAvailable: true,
        stock: 25,
        reviewCount: 418,
        stars: 3.7,
    },

  {
    _id: uuid(),
    name: 'Taylor Swift luce una camiseta de Morena, respaldando al gobierno del presidente AMLO.',
    date: new Date("2023-08-28").toISOString(),
    tags: ["Taylor Swift", "conciertos", "camiseta", "apoyo", "AMLO","presidente"],
    status: "FALSO", 
    category: 'Mexico',
    afirmacion: 'Al concluir su concierto, Taylor Swift mostró su respaldo a la administración del presidente Andrés Manuel López Obrador vistiendo una camiseta en la que se lee “Morena, la esperanza de México.',
    analisis:'Se está difundiendo una imagen en las redes sociales, especialmente en  <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/photo?fbid=779895557475958&set=a.518920790240104" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> Facebook </a></em>,  en la que aparentemente se observa a la reconocida cantante estadounidense Taylor Swift usando una prenda con el eslogan del partido político mexicano Movimiento de Regeneración Nacional (Morena) durante su más reciente concierto en México.  <br/> En el marco de su "Eras Tour", la vocalista estadounidense ofreció una serie de cuatro conciertos en México los días 24, 25, 26 y 27 de agosto de 2023. Sin embargo, en ninguna de estas fechas la cantante lució una camiseta con elementos políticos. Mediante una búsqueda inversa de la imagen en Google, se revela que la fotografía de Taylor Swift con la camiseta de apoyo a Morena es falsa. La imagen original fue tomada el 28 de julio del presente año en California durante otro de sus conciertos, y en ese momento, la cantante llevaba una camiseta blanca simple, sin ninguna referencia política.',
    veredicto: 'Es importante destacar que esta información carece de veracidad. Taylor Swift nunca utilizó una camiseta de Morena en sus conciertos ni hizo comentarios relacionados con la política mexicana. La imagen ha sido manipulada. Además, no existen registros que confirmen que la artista estadounidense haya manifestado apoyo al presidente Andrés ManuelLópez Obrador o a su gobierno durante sus actuaciones en México, a diferencia de lo que afirman los mensajes virales.',
    image: SWIFT,
    description:
      'Se está difundiendo una imagen en las redes sociales, especialmente en Facebook , en la que aparentemente se observa a la reconocida cantante estadounidense Taylor Swift usando una prenda con el eslogan del partido político mexicano Movimiento de Regeneración Nacional (Morena) durante su más reciente concierto en México.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'El reconocido cantautor español José Luis Perales murió el 7 de agosto del 2023.',
    date: new Date("2023-08-8").toISOString(),
    tags: ["José Luis Perales", "cantante", "españa", "muerte", "falleció"],
    status: "FALSO", 
    category: 'Resto del Mundo',
    afirmacion: 'El cantautor y productor español José Luis Perales falleció el 7 de agosto del 2023.',
    analisis:'La noticia del presunto fallecimiento del cantante español José Luis Perales, a sus 78 años a causa de un infarto, ha circulado en las redes sociales, como Twitter <em><a target="_blank" rel="noreferrer" href="https://twitter.com/QuadratinMexico/status/1688639713601622016" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> 1 </a></em>, <em><a target="_blank" rel="noreferrer" href="https://twitter.com/drcumana/status/1688637015208665089" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> 2 </a></em>. Sin embargo, el mismo 7 de agosto de 2023, el propio cantante desmintió esta noticia a través de su cuenta de <em><a target="_blank" rel="noreferrer" href=""https://twitter.com/PeralesOficial/status/1688647093244571648" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>  Twitter </a></em> y brindó a sus seguidores un mensaje tranquilizador, declarando: "Estoy más vivo y feliz que nunca".',
    veredicto: 'Por lo tanto, la afirmación de que José Luis Perales falleció en esta fecha es completamente falsa.',
    image: PERALES,
    description:
      'La noticia del presunto fallecimiento del cantante español José Luis Perales, a sus 78 años a causa de un infarto, ha circulado en las redes sociales, como Twitter 1 , 2 . Sin embargo, el mismo 7 de agosto de 2023, el propio cantante desmintió esta noticia a través de su cuenta de Twitter y brindó a sus seguidores un mensaje tranquilizador, declarando: "Estoy más vivo y feliz que nunca".',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'Planta Pfizer en Carolina del Norte arrasada por tornado, incluyendo vacunas Covid-19.',
    date: new Date("2023-07-25").toISOString(),
    tags: ["Pfizer", "Covid-19", "tornado", "vacunas", "planta"],
    status: "FALSO", 
    category: 'Estados Unidos',
    afirmacion: 'Un tornado en Carolina del Norte ha causado daños significativos en un almacén de Pfizer, lo que ha provocado la destrucción de un gran suministro de vacunas contra el covid.',
    analisis:'Se ha difundido en redes sociales como <em><a target="_blank" rel="noreferrer" href="https://twitter.com/MattWallace888/status/1681790037690667009" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> Twitter </a></em> y <em><a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/Cu5iB3gN6sn/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> Instagram </a></em>, la noticia de que un tornado en Rocky Mount, Carolina del Norte, habría causado daños significativos a un almacén de Pfizer que contenía vacunas contra el COVID-19. <br/> El miércoles 19 de julio de 2023, la planta farmacéutica de Pfizer en Rocky Mount, Carolina del Norte, sufrió graves daños debido a un tornado. El Dr. Albert Bourla, presidente y director ejecutivo de Pfizer Inc., confirmó a través de un <em><a target="_blank" rel="noreferrer" href="https://www.pfizer.com/news/press-release/press-release-detail/pfizer-announces-post-tornado-relief-plans-rocky-mount?linkId=226198103" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>  comunicado de prensa</a></em>, que la instalación afectada sufrió daños importantes después de que el tornado tocó tierra cerca del lugar. Afortunadamente, no hubo heridos graves, ya que los trabajadores siguieron los procedimientos de seguridad y evacuaron el área, asegurando que todos se encuentran a salvo. Además, el Dr. Bourla informó que <em><a target="_blank" rel="noreferrer" href="https://cdn.pfizer.com/pfizercom/2023-07/Rocky_Mount_NC_Fact_Sheet_072023.pdf" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>  la planta de fabricación de Pfizer en Rocky Mount</a></em>, juega un papel crucial, ya que es responsable de producir aproximadamente el 25% de todos los productos inyectables estériles de la compañía. Esto incluye medicamentos como anestesia, analgesia, terapéuticos, antiinfecciosos y bloqueadores neuromusculares. Asimismo, esta planta abastece cerca del 8% de todos los productos inyectables estériles utilizados en hospitales de Estados Unidos.',
    veredicto: 'La afirmación de que un tornado destruyó un almacén con vacunas contra el COVID-19 en la planta de fabricación de Pfizer en Rocky Mount es completamente falsa. Esta planta en Carolina del Norte es responsable de producir medicamentos inyectables estériles, pero no está vinculada a la producción de vacunas contra el COVID-19.',
    image: TORNADO,
    description:
      'Se ha difundido en redes sociales, la noticia de que un tornado en Rocky Mount, Carolina del Norte, habría causado daños significativos a un almacén de Pfizer que contenía vacunas contra el COVID-19.El miércoles 19 de julio de 2023, la planta farmacéutica de Pfizer en Rocky Mount, Carolina del Norte, sufrió graves daños debido a un tornado. El Dr. Albert Bourla, presidente y director ejecutivo de Pfizer Inc., confirmó a través de un comunicado de prensa, que la instalación afectada sufrió daños importantes después de que el tornado tocó tierra cerca del lugar. Afortunadamente, no hubo heridos graves, ya que los trabajadores siguieron los procedimientos de seguridad y evacuaron el área, asegurando que todos se encuentran a salvo. Además, el Dr. Bourla informó que la planta de fabricación de Pfizer en Rocky Mount, juega un papel crucial, ya que es responsable de producir aproximadamente el 25% de todos los productos inyectables estériles de la compañía. Esto incluye medicamentos como anestesia, analgesia, terapéuticos, antiinfecciosos y bloqueadores neuromusculares. Asimismo, esta planta abastece cerca del 8% de todos los productos inyectables estériles utilizados en hospitales de Estados Unidos.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'WEF prohíbe la concepción natural y bebes seran criados en laboratorios para 2030.',
    date: new Date("2023-07-26").toISOString(),
    tags: ["Bebés", "El Foro Económico Mundial", "2030", "laboratorios", "Schwab", "concepción natural", "WEF","Klaus"],
    status: "FALSO", 
    category: 'Resto del Mundo',
    afirmacion: 'El Foro Económico Mundial (WEF, por sus siglas en inglés) ha prohibido  la concepción natural y que todos los bebés serán criados en laboratorios para el año 2030.',
    analisis:'Ha estado circulando en redes sociales  como <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@mirandarayos/video/7256624060367605038" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> Tiktok</a></em> y <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/photo/?fbid=10210226011364124&set=a.10200310060511550" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> Facebook</a></em> información errónea sobre que el Foro Económico Mundial, ha implementado la prohibición de la concepción natural y que todos los bebés serán criados en laboratorios para el año 2030. <br/> El Foro Económico Mundial <em><a target="_blank" rel="noreferrer" href="https://es.weforum.org/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> WEF</a></em>,  a través de un vocero oficial de la organización, en declaraciones a la Agencia France-Presse  <em><a target="_blank" rel="noreferrer" href="https://factual.afp.com/doc.afp.com.33PR7HK" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> AFP</a></em>, ha confirmado que estas afirmaciones no tienen fundamento y que el estudio mencionado en las publicaciones virales, supuestamente publicado en el sitio web del WEF, no contiene tales propuestas. Además, es importante señalar que el Foro Económico Mundial no tiene la autoridad legal para hacer cumplir tales medidas a escala global o dictar cómo los países manejan sus políticas reproductivas. El WEF es principalmente un foro para discusiones y colaboraciones, y no tiene autoridad legal sobre las políticas de los países.',
    veredicto: 'Estas publicaciones son FALSAS,  la afirmación de que el Foro Económico Mundial prohibió la concepción natural y ordenó la crianza de bebés en laboratorio para 2030 es infundada y ha sido refutada por la propia organización. <br/> Es crucial tener cuidado con la información errónea y confiar en fuentes verificadas para obtener información precisa.',
    image: BABIES,
    description:
      'Ha estado circulando en redes sociales información errónea sobre que el Foro Económico Mundial (WEF, por sus siglas en inglés), ha implementado la prohibición de la concepción natural y que todos los bebés serán criados en laboratorios para el año 2030. El Foro Económico Mundial WEF, a través de un vocero oficial de la organización, en declaraciones a la Agencia France-Presse AFP, ha confirmado que estas afirmaciones no tienen fundamento y que el estudio mencionado en las publicaciones virales, supuestamente publicado en el sitio web del WEF, no contiene tales propuestas. Además, es importante señalar que el Foro Económico Mundial no tiene la autoridad legal para hacer cumplir tales medidas a escala global o dictar cómo los países manejan sus políticas reproductivas. El WEF es principalmente un foro para discusiones y colaboraciones, y no tiene autoridad legal sobre las políticas de los países.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'Barack Obama y Joe Biden  se vistieron de rosado por la película de Barbie.',
    date: new Date("2023-07-30").toISOString(),
    tags: ["Barbie", "Obama", "Biden", "pink", "rosado"],
    status: "FALSO",
    category: 'Estados Unidos',
    afirmacion: 'Circulan imágenes que muestran al presidente estadounidense Joe Biden y al expresidente Barack Obama vestidos con trajes rosados.',
    analisis:'Publicaciones en redes sociales  <em><a target="_blank" rel="noreferrer" href="https://twitter.com/joncoopertweets/status/1683304053881675777" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Twitter</a></em> han compartido  imágenes del presidente estadounidense, Joe Biden, y el expresidente Barack Obama vestidos con trajes rosas, supuestamente para celebrar el lanzamiento de la película "Barbie". <br/> Al usar la técnica de google imagen reversa, se evidenció que estas fotografías no son auténticas. En realidad, las imágenes no fueron tomadas de ningún evento real o sesión de fotos en la que Barack Obama y Joe Biden se vistieron de rosa. En cambio, se generaron utilizando inteligencia artificial (IA). Esto significa que los usuarios de las redes sociales, probablemente como una broma o para crear un meme viral, usó tecnología de inteligencia artificial para manipular fotos existentes de Barack Obama y Joe Biden y vestirlos con atuendos rosados.',
    veredicto: ' Las imágenes que muestran a Barack Obama y Joe Biden con atuendos rosados no son reales. Fueron fabricados usando inteligencia artificial, probablemente como una publicación en las redes sociales humorística o para llamar la atención. Es crucial ser cauteloso y crítico al consumir información de las redes sociales y siempre verificar la autenticidad de las imágenes o afirmaciones antes de creerlas o compartirlas. La verificación de hechos por expertos juega un papel importante en desacreditar información falsa y promover la precisión en el discurso público.',
    image: PINK,
    description:
      'Publicaciones en redes sociales han compartido imágenes del presidente estadounidense, Joe Biden, y el expresidente Barack Obama vestidos con trajes rosas, supuestamente para celebrar el lanzamiento de la película "Barbie". Al usar la técnica de google imagen reversa, se evidenció que estas fotografías no son auténticas. En realidad, las imágenes no fueron tomadas de ningún evento real o sesión de fotos en la que Barack Obama y Joe Biden se vistieron de rosa. En cambio, se generaron utilizando inteligencia artificial (IA). Esto significa que los usuarios de las redes sociales, probablemente como una broma o para crear un meme viral, usó tecnología de inteligencia artificial para manipular fotos existentes de Barack Obama y Joe Biden y vestirlos con atuendos rosados.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'ONU investigará a Uribe, Duque y a Marta Ramírez por supuestos vinculos con el narcotráfico.',
    date: new Date("2023-07-30").toISOString(),
    tags: ["ONU", "Alvaro Uribe", "investigación", "denuncias", "Marta Ramirez", "corrupción", "Ivan Duque", "narcotrafico"],
    status: "FALSO",
    category: 'América Latina',
    afirmacion:  'Las Naciones Unidas han anunciado su intención de realizar investigaciones exhaustivas a los expresidentes Álvaro Uribe Vélez e Iván Duque y a la viceexpresidenta Marta Lucía Ramírez, sobre denuncias de participación en narcotráfico y prácticas corruptas.',
    analisis:'De acuerdo con publicaciones en redes sociales <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=T3F1ThkJpjw" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Video</a></em>  se ha anunciado que la ONU llevará a cabo investigaciones sobre los expresidentes Álvaro Uribe Vélez e Iván Duque, así como la exvicepresidenta Marta Lucía Ramírez, debido a acusaciones que involucran su participación en actividades relacionadas con el narcotráfico y actos de corrupción. Además, también se investigarán las conexiones de Sarmiento Angulo con el caso Odebrecht, y se llevará a cabo una revisión de la gestión del fiscal Barbosa en relación con sus investigaciones. <br/> Es importante señalar que, respecto a las <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=jJA4pH-ljC4" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>declaraciones</a></em> del 12 de julio de 2023 realizadas por el Sr. Leonardo Rodríguez Pérez, representante ante la ONU de la <em><a target="_blank" rel="noreferrer" href="https://www.malocainternationale.com/en" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>ONG Maloca Internationale</a></em>,  en la 33ª Reunión y 53° Período Ordinario de Sesiones del Consejo de Derechos Humanos, hasta el momento no se ha encontrado ningún<em><a target="_blank" rel="noreferrer" href="https://www.ohchr.org/es/hr-bodies/hrc/regular-sessions/session53/list-reports" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> reporte </a></em> que indique que el Consejo de Derechos Humanos de las Naciones Unidas tenga planes de ordenar una investigación que involucre a los expresidentes Álvaro Uribe e Iván Duque, ni a la exvicepresidenta Marta Lucía Ramírez. Del mismo modo, no se ha mencionado ninguna acción relacionada con el Sr. Luis Carlos Sarmiento Angulo o el fiscal Francisco  Barbosa.',
    veredicto: 'Estas publicaciones son FALSAS. A pesar de las declaraciones realizadas por el representante de una ONG en la 33ª Reunión y 53° Período Ordinario de Sesiones del Consejo de Derechos Humanos de las Naciones Unidas, no se ha confirmado esta información en informes creíbles o declaraciones oficiales. Además, la Organización de las Naciones Unidas (ONU) no tiene la función de ordenar investigaciones sobre expresidentes o cualquier otra persona.',
    image: ONU,
    description:
      'De acuerdo con publicaciones en redes sociales se ha anunciado que la ONU llevará a cabo investigaciones sobre los expresidentes Álvaro Uribe Vélez e Iván Duque, así como la exvicepresidenta Marta Lucía Ramírez, debido a acusaciones que involucran su participación en actividades relacionadas con el narcotráfico y actos de corrupción. Además, también se investigarán las conexiones de Sarmiento Angulo con el caso Odebrecht, y se llevará a cabo una revisión de la gestión del fiscal Barbosa en relación con sus investigaciones. Es importante señalar que, respecto a las declaraciones del 12 de julio de 2023 realizadas por el Sr. Leonardo Rodríguez Pérez, representante ante la ONU de la ONG Maloca Internationale, en la 33ª Reunión y 53° Período Ordinario de Sesiones del Consejo de Derechos Humanos, hasta el momento no se ha encontrado ningúnreporte que indique que el Consejo de Derechos Humanos de las Naciones Unidas tenga planes de ordenar una investigación que involucre a los expresidentes Álvaro Uribe e Iván Duque, ni a la exvicepresidenta Marta Lucía Ramírez. Del mismo modo, no se ha mencionado ninguna acción relacionada con el Sr. Luis Carlos Sarmiento Angulo o el fiscal Francisco Barbosa.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
  {
    _id: uuid(),
    name: 'Imagenes de restos recuperados del submarino "Titán" tras su implosión.',
    date: new Date("2023-06-28").toISOString(),
    tags: ["titán", "implosión", "titanic", "escombros", "submarino"],
    status: "FALSO",
    category: 'Estados Unidos',
    afirmacion: 'Las imágenes exhiben los restos rescatados del submarino "Titán" después de su implosión.',
    analisis: 'Circulan imágenes en las redes sociales como <em><a target="_blank" rel="noreferrer" href="https://twitter.com/LuisCoronel83/status/1671981695526903823" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Twitter</a></em>, <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@karolg_feid__/video/7247642195459657006" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>TikTok</a></em> en las que se ven en el fondo del mar restos de objetos personales como zapatos, ropa y utensilios, pertenecientes supuestamente al sumergible ‘Titan”, luego de su implosión el 18 de junio de 2023. <br/> Tras el desastre ocurrido el pasado 18 de junio de 2023, donde murieron cinco personas dentro del sumergible <em><a target="_blank" rel="noreferrer" href="https://cnnespanol.cnn.com/2023/06/23/submarino-titan-pasajeros-murieron-titanic-como-sigue-ahora-trax/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>“Titán”</a></em>, el cual tenía como propósito observar los restos del Titanic, se han difundido imágenes falsas sobre lo que serían “escombros” del submarino cerca de la zona en la que está el Titanic. La imagen <em><a target="_blank" rel="noreferrer" href="https://www.nationalgeographic.com.es/ciencia/robot-llamado-victor-podria-ser-salvacion-titan_20213" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> 1 </a></em>,  es el robot francés Victor 6000 utilizado en diversas aplicaciones, como exploración y mapeo del fondo marino, inspección de estructuras submarinas, recuperación de objetos, investigación científica, entre otras, que fue enviado para ayudar a buscar el submarino Titan.Las imágenes <em><a target="_blank" rel="noreferrer" href="https://www.alamy.com/this-2004-image-provided-by-the-university-of-rhode-islands-institute-for-exploration-and-center-for-archaeological-oceanography-and-the-national-oceanic-and-atmospheric-administrations-office-of-ocean-exploration-shows-the-shoes-of-one-of-the-possible-victims-of-the-titanic-disaster-a-companys-plan-to-retrieve-the-titanics-radio-has-sparked-a-debate-over-whether-the-famous-shipwreck-still-holds-human-remains-institute-for-exploration-and-center-for-archaeological-oceanographyuniversity-of-rhode-islandnoaa-office-of-ocean-exploration-via-ap-image530113130.html" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>“2”</a></em> y <em><a target="_blank" rel="noreferrer" href="https://www.alamy.com/file-this-2004-photo-provided-by-the-institute-for-exploration-center-for-archaeological-oceanographyuniversity-of-rhode-islandnoaa-office-of-ocean-exploration-shows-the-remains-of-a-coat-and-boots-in-the-mud-on-the-sea-bed-near-the-titanics-stern-oceangate-expeditions-an-undersea-exploration-company-plans-to-dive-to-the-sunken-titanic-to-begin-whats-expected-to-be-an-annual-chronicling-of-the-shipwrecks-deterioration-the-109-year-old-wreck-is-being-battered-by-deep-sea-currents-and-metal-eating-bacteria-the-first-dive-could-be-as-early-as-this-week-institute-for-exploration-c-image529327013.html" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>“3”</a></em>  son fotos de restos del Titanic, que se hundió en el océano Atlántico en 1912. En cuanto a la imagen <em><a target="_blank" rel="noreferrer" href="https://twitter.com/prince_of_fakes/status/1671932419300278272" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>“4” </a></em>, está fue generada con inteligencia artificial por la cuenta de Twitter "Prince of Deepfakes (Parody)", que publica contenidos de IA.',
    veredicto: 'Esta información es FALSA, la imágen 1 pertenece a Victor 6000, un robot de rescate francés, las imágenes 2 y 3 corresponden a los restos del Titanic y no a las del sumergible Titán y la imagen 4 es una imagen hecha por IA.',
    image: DEBRIS,
    description:
      'Circulan imágenes en las redes sociales como en las que se ven en el fondo del mar restos de objetos personales como zapatos, ropa y utensilios, pertenecientes supuestamente al sumergible ‘Titan”, luego de su implosión el 18 de junio de 2023.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  }, 
 {
    _id: uuid(),
    name: "Bill Gates predice que habrá una próxima pandemia en el 2025 y será por un nuevo virus",
    date: new Date("2023-05-20").toISOString(),
    tags: ["Bill Gates", "pandemia", "virus", "SEERS", "2025", "nuevo virus"],
    status: "FALSO",
    category: "Salud",
    afirmacion: "Bill Gates pronostica una futura pandemia en 2025 causada por el virus SEERS",
    analisis: 'Se han difundido en plataformas digitales como  <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/100028403306806/posts/922450148711753" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y  <em><a target="_blank" rel="noreferrer" href="https://twitter.com/iamOmarPE/status/1654514004562255874" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Twitter</a></em> mensajes que aseguran que Bill Gates, uno de los cofundadores de Microsoft, habría hecho una "predicción" acerca de una futura pandemia que ocurriría en 2025 y que  está  sería causada por un virus llamado "SEERS". El 23 de octubre de 2022, el Centro Johns Hopkins para la Seguridad de la Salud, en colaboración con la OMS y la Fundación Bill y Melinda Gates, organizaron un ejercicio de simulación de pandemia llamado <em><a target="_blank" rel="noreferrer" href="https://catastrophiccontagion.centerforhealthsecurity.org/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>“Contagio catastrófico”</a></em>, un ejercicio de desafío global para brindar capacitación y educación a funcionarios gubernamentales y de salud pública sobre cómo responder efectivamente a una pandemia mundial. Es una simulación teórica, no un evento real, que explora desafíos y procesos de toma de decisiones en respuesta a una crisis. Durante el ejercicio, los participantes, incluido Bill Gates, se enfrentan a situaciones desafiantes que requieren una toma de decisiones rápida y crítica. Se resalta la importancia de la cooperación internacional, combatir la desinformación y promover la comunicación precisa en una pandemia, así como garantizar una distribución equitativa de recursos para tratamientos y vacunas. Las <em><a target="_blank" rel="noreferrer" href="https://catastrophiccontagion.centerforhealthsecurity.org/lessons-from-the-exercise-0" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>lecciones del ejercicio</a></em> buscan mejorar la preparación y respuesta ante pandemias a nivel mundial para salvar vidas y proteger las economías frente a futuras crisis de salud.',
    veredicto: "Esta información es FALSA. No hay evidencia que sugiera que Bill Gates haya hecho predicciones específicas sobre una pandemia en 2025 o en cualquier otra fecha futura. El ejercicio 'Contagio catastrófico' es una simulación teórica de un escenario ficticio de una pandemia mundial. Es un ejercicio educativo y de capacitación para funcionarios gubernamentales y de salud pública para prepararse mejor para posibles crisis de salud futuras.",
    image: BILLGATES,
    description:
      'Se han difundido en plataformas digitales mensajes que aseguran que Bill Gates, uno de los cofundadores de Microsoft, habría hecho una "predicción" acerca de una futura pandemia que ocurriría en 2025 y que está sería causada por un virus llamado "SEERS". El 23 de octubre de 2022, el Centro Johns Hopkins para la Seguridad de la Salud, en colaboración con la OMS y la Fundación Bill y Melinda Gates, organizaron un ejercicio de simulación de pandemia llamado “Contagio catastrófico”, un ejercicio de desafío global para brindar capacitación y educación a funcionarios gubernamentales y de salud pública sobre cómo responder efectivamente a una pandemia mundial. Es una simulación teórica, no un evento real, que explora desafíos y procesos de toma de decisiones en respuesta a una crisis. Durante el ejercicio, los participantes, incluido Bill Gates, se enfrentan a situaciones desafiantes que requieren una toma de decisiones rápida y crítica.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: 'María Fernanda Cabal y Paloma Valencia afirman que demandaran a Vicky Dávila por calumnias',
    date: new Date("2023-07-10").toISOString(),
    tags: ["Cabal", "Paloma", "Vicky Dávila", "Demanda", "Zuluaga", "Congresistas", "Senadoras", "Periodista", "Centro Democrático"],
    status: "FALSO",
    category: 'América Latina',
    afirmacion: 'Las senadoras del Centro Democrático, María Fernanda Cabal Molina y Paloma Valencia Laserna, afirman: "Demandaremos a Vicky Dávila por calumniar a Oscar Iván Zuluaga. Si es necesario, expondremos a su familia Gnecco ante las autoridades de Estados Unidos. Esto no quedará así." - María Fernanda Cabal - Paloma Valencia, Bogotá 1° de julio de 2023',
    analisis: 'Circula una publicación en <em><a target="_blank" rel="noreferrer" href="https://twitter.com/CarlArthurKing/status/1675528241363165184" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Twitter</a></em>  con más de 476.4K Views, afirmando que las senadoras María Fernanda Cabal Molina y Paloma Valencia Laserna podrían estar iniciando un proceso jurídico contra la periodista de la Revista Semana, Vicky Dávila, por calumnias contra el exsenador Óscar Iván Zuluaga. <br/> Esto surge, después de que la Directora de la Revista Semana, Vicky Dávila, diera a conocer  <em><a target="_blank" rel="noreferrer" href="https://www.semana.com/politica/articulo/urgente-estos-son-los-audios-en-los-que-se-escucha-a-oscar-ivan-zuluaga-confesar-que-sabia-del-ingreso-de-dineros-de-odebrecht-a-su-campana-en-2014-los-detalles-son-escandalosos/202321/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>grabaciones</a></em> donde el exsenador Óscar Iván Zuluaga admite su conocimiento de los aportes económicos de Odebrecht a su campaña presidencial y revela su estrategia para burlar a las autoridades.<br/> A traves de su cuenta de twitter, <em><a target="_blank" rel="noreferrer" href="https://twitter.com/MariaFdaCabal/status/1675576394711986176" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> la senadora María Fernanda Cabal Molina</a></em>,  niega dicha publicación y la califica como una noticia falsa, mientras que, <em><a target="_blank" rel="noreferrer" href="https://twitter.com/PalomaValenciaL/status/1676202433310072833" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> la senadora Paloma Valencia Laserna</a></em>, enfatiza la importancia de responsabilizar a las personas por sus acciones y manifiesta una fuerte dedicación a este principio sin dejar lugar a excusas o argumentos para infringir la ley.',
    veredicto: "Esta información es FALSA, ya que no existe evidencia de la supuesta declaración de las senadoras.",
    image: CABALVALENCIA,
    description:
      'Circula una publicación en Twitter con más de 476.4K Views, afirmando que las senadoras María Fernanda Cabal Molina y Paloma Valencia Laserna podrían estar iniciando un proceso jurídico contra la periodista de la Revista Semana, Vicky Dávila, por calumnias contra el exsenador Óscar Iván Zuluaga.Esto surge, después de que la Directora de la Revista Semana, Vicky Dávila, diera a conocer grabaciones donde el exsenador Óscar Iván Zuluaga admite su conocimiento de los aportes económicos de Odebrecht a su campaña presidencial y revela su estrategia para burlar a las autoridades.A traves de su cuenta de twitter, la senadora María Fernanda Cabal Molina, niega dicha publicación y la califica como una noticia falsa, mientras que, la senadora Paloma Valencia Laserna, enfatiza la importancia de responsabilizar a las personas por sus acciones y manifiesta una fuerte dedicación a este principio sin dejar lugar a excusas o argumentos para infringir la ley.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name:  'El actor Mark Wahlberg dijo que “las élites pedófilas no van a tener donde esconderse”  ',
    date: new Date("2023-07-25").toISOString(),
    tags: ["Mark Wahlberg", "Hollywood", "pedófilas", "élites", "sound of freedom" ],
    status: "FALSO",
    category: 'Estados Unidos',
    afirmacion:  'Mark Wahlberg dijo que los pedófilos de la alta sociedad de Hollywood “no van a tener dónde esconderse”  ',
    analisis: 'Publicaciones en redes sociales <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=6FB1McPCfDc" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Video</a></em>  afirman que el actor Mark Wahlberg hace declaraciones sobre el abuso sexual del poder de la élite en la industria del cine de los Estados Unidos. <br/> Estas falsas afirmaciones, surgen después del reciente lanzamiento de la película <em><a target="_blank" rel="noreferrer" href="https://www.bbc.com/mundo/articles/c3gzelvnpn9o" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>”Sound of Freedom”</a></em> (Basada en una historia real), que trata sobre el tráfico de menores y está protagonizada por Jim Caviezel, Mira Sorvino y Bill Camp, y en la que supuestamente, Mark Wahlberg, tras el éxito del film, hace aseveraciones sobre la pedofilia en Hollywood.',
    veredicto: 'Estas publicaciones son FALSAS, ya que no existe evidencia de que Mark Wahlberg haya hecho tales declaraciones. Además, un representante del actor desmintió esa historia como "completamente falsa".',
    image: MARKWAHLBERG,
    description:
      'Publicaciones en redes sociales afirman que el actor Mark Wahlberg hace declaraciones sobre el abuso sexual del poder de la élite en la industria del cine de los Estados Unidos. Estas falsas afirmaciones, surgen después del reciente lanzamiento de la película ”Sound of Freedom” (Basada en una historia real), que trata sobre el tráfico de menores y está protagonizada por Jim Caviezel, Mira Sorvino y Bill Camp, y en la que supuestamente, Mark Wahlberg, tras el éxito del film, hace aseveraciones sobre la pedofilia en Hollywood.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
   {
    _id: uuid(),
    name: "Lucas Villa Vásquez fue asesinado durante el paro del 2021 por nexos con el microtráfico",
    date: new Date("2023-07-25").toISOString(),
    tags: ["Lucas Villa", "asesinado", "protestas", "microtráfico", "Paro nacional", "Colombia", "estallido social", "muerte"],
    status: "FALSO",
    category: 'América Latina',
    afirmacion: "Lucas Villa Vásquez fue asesinado durante el Paro Nacional de 2021 en Colombia, por problemas relacionados con el microtráfico de drogas.",

    analisis: 'Una publicación en <em><a target="_blank" rel="noreferrer" href="https://twitter.com/pacormolina/status/1679648089974374400" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Twitter</a></em> afirma falsamente que la causa de la muerte del líder estudiantil Lucas Villa Vásquez, ocurrida el 11 de mayo de 2021 en Pereira durante el Paro Nacional de Colombia, por motivos de la reforma tributaria presentada por el gobierno del entonces presidente  Iván Duque, fue debido a problemas con el microtráfico de drogas. Sin embargo, el 13 de Julio de 2023, la Fiscalía de Colombia informó a través de <em><a target="_blank" rel="noreferrer" href=https://www.fiscalia.gov.co/colombia/noticias/cae-uno-de-los-presuntos-articuladores-del-crimen-del-lider-estudiantil-lucas-villa-vasquez/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Boletín 49254</a></em> que capturaron a Jonatan Stiven Mejía Hurtado, alias Truan, jefe de la organización delincuencial ‘La Cordillera’, quien está posiblemente vinculado con el crimen que resultó en la muerte de Lucas Villa Vásquez y que operan en Dosquebradas, Risaralda. Según la evidencia presentada por la Fiscalía, parece que los líderes principales de “La Cordillera” creían que las acciones de bloqueo de las vías por las marchas del líder estudiantil durante las protestas estaban perjudicando los intereses del grupo ilegal.',

    veredicto: "Esta información es FALSA, ya que, según la información de las autoridades, no hay ninguna relación con actividades ilegales por parte del líder estudiantil Lucas Villa Vásquez.",
    image: LUCASVILLA,
    description:
      'Una publicación afirma falsamente que la causa de la muerte del líder estudiantil Lucas Villa Vásquez, ocurrida el 11 de mayo de 2021 en Pereira durante el Paro Nacional de Colombia, por motivos de la reforma tributaria presentada por el gobierno del entonces presidente Iván Duque, fue debido a problemas con el microtráfico de drogas. Sin embargo, el 13 de Julio de 2023, la Fiscalía de Colombia informó a través de Boletín 49254 que capturaron a Jonatan Stiven Mejía Hurtado, alias Truan, jefe de la organización delincuencial ‘La Cordillera’, quien está posiblemente vinculado con el crimen que resultó en la muerte de Lucas Villa Vásquez y que operan en Dosquebradas, Risaralda. Según la evidencia presentada por la Fiscalía, parece que los líderes principales de “La Cordillera” creían que las acciones de bloqueo de las vías por las marchas del líder estudiantil durante las protestas estaban perjudicando los intereses del grupo ilegal.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
   {
    _id: uuid(),
    name: "Mike Pence es golpeado por una niña con un globo de agua durante un desfile",
    date: new Date("2023-07-25").toISOString(),
    tags: ["Mike Pence", "Globos", "Desfile", "Problemas", "niños"],
    status: "FALSO",
    category: 'Estados Unidos',
    afirmacion: "El candidato demócrata presidencial Mike Pence fue golpeado por una niña con un globo de agua durante un desfile local en celebración del día de la Independencia en Stewart Manor, Nueva York.",
    analisis: 'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?v=1372355206644027" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> afirma falsamente que el candidato demócrata presidencial Mike Pence fue golpeado por una niña con un globo de agua durante un desfile local en celebración del día de la Independencia en Stewart Manor, Nueva York.<br/><br/>De acuerdo con el comentario hecho a través de su página de Facebook, <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/BruceBlakemanNCExec" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Bruce Blakeman</a></em>, el abogado y político estadounidense que actualmente se desempeña como décimo ejecutivo del condado de Nassau, Nueva York, afirmó que fue él quien recibió el globo de agua durante la celebración.',
    veredicto: 'Esta información es FALSA. Ya que fue el político Bruce Blakeman del condado de Nassau, Nueva York, quien recibió el golpe durante el tradicional desfile de globos de agua en Stewart Manor, no Mike Pence.',
    image: MIKEPENCE,
    description:
      'Un video que circula en Facebook afirma falsamente que el candidato demócrata presidencial Mike Pence fue golpeado por una niña con un globo de agua durante un desfile local en celebración del día de la Independencia en Stewart Manor, Nueva York.De acuerdo con el comentario hecho a través de su página de Facebook, Bruce Blakeman, el abogado y político estadounidense que actualmente se desempeña como décimo ejecutivo del condado de Nassau, Nueva York, afirmó que fue él quien recibió el globo de agua durante la celebración.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: "El Papa Francisco usando una chaqueta oversize de color blanco y cruz grande estilo urbano",
    date: new Date("2023-04-5").toISOString(),
    tags: ["Papa", "Moda", "Francisco", "Chaqueta", "Chaqueta Blanca", "abrigo", "Jacket","cruz"],
    status: "FALSO",
    category: 'Resto del Mundo',
    afirmacion: "El Papa Francisco luce una chaqueta demasiado grande de color blanco, con una cruz como accesorio.",

    analisis: 'Imagen viral del Papa Francisco en las redes sociales debido a su llamativo atuendo. La foto lo muestra usando una chaqueta blanca de gran tamaño con una cruz como accesorio. <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/officialmidjourney/posts/540709221553980" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em>. Luego de utilizar la técnica de búsqueda inversa de imágenes, se encontró que la imagen fue alterada para representar al Papa Francisco con una chaqueta blanca de Balenciaga de gran tamaño con una cruz, esta animación fue hecha por el programa y servicio de inteligencia artificial generativa <em><a target="_blank" rel="noreferrer" href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Midjourney</a></em>.',
    
    veredicto: 'Esta publicación es FALSA. En ocasiones, las imágenes pueden ser manipuladas o sacadas de contexto, por lo que es importante ser cauteloso y verificar la autenticidad de la imagen antes de sacar conclusiones.',
    
    image: PAPAFRANCISCO,
    description:
      'Imagen viral del Papa Francisco en las redes sociales debido a su llamativo atuendo. La foto lo muestra usando una chaqueta blanca de gran tamaño con una cruz como accesorio. Facebook. Luego de utilizar la técnica de búsqueda inversa de imágenes, se encontró que la imagen fue alterada para representar al Papa Francisco con una chaqueta blanca de Balenciaga de gran tamaño con una cruz, esta animación fue hecha por el programa y servicio de inteligencia artificial generativa Midjourney.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: "El gobernador de Florida, Ron DeSantis,prohibe la bandera de Puerto Rico en público",
    date: new Date("2023-06-15").toISOString(),
    tags: [
      "DeSantis",
      "Falso",
      "Puerto Rico",
      "Bandera",
      "Ley",
      "Florida",
      "HB-1011",
      "SB-668",
    ],
    status: "FALSO",
    category: "Estados Unidos",
    afirmacion:
      "Gobernador DeSantis firmó ley que prohíbe izar la bandera de Puerto Rico en público en Florida, Estados Unidos",
    analisis:
      'Una publicación que circula en <em><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@jonathanacosta2020/video/7236388577154780459?q=desantis%20puerto%20rican%20flag&t=1689797650742/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Tiktok</a></em> afirma falsamente que el gobernador Ron DeSantis firmó una ley para prohibir izar la bandera de Puerto Rico en Florida.<br/> No existe una ley específica en Florida que prohíba por completo la bandera puertorriqueña o cualquier otra bandera específica. La libertad de exhibir banderas, incluida la bandera puertorriqueña, generalmente está protegida por <em><a target="_blank" rel="noreferrer" href="https://es.wikipedia.org/wiki/Primera_Enmienda_a_la_Constituci%C3%B3n_de_los_Estados_Unidos" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}> la Primera Enmienda de la Constitución de los Estados Unidos</a></em> que garantiza el derecho a la libertad de expresión.<br/> <br/> Los legisladores de Florida intentaron introducir los proyectos de <em><a target="_blank" rel="noreferrer" href="https://www.flsenate.gov/Session/Bill/2023/668/?Tab=BillHistory" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>ley SB 668 en el Senado</a></em> y <em><a target="_blank" rel="noreferrer" href="https://www.flsenate.gov/Session/Bill/2023/1011/?Tab=BillText" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>HB 1011 en la Cámara de Representante</a></em>, relacionados con la exhibición de banderas "no autorizadas" en edificios públicos en Florida, pero no tuvieron éxito y no fueron aprobados en ninguna de las dos cámaras legislativas. Por lo tanto, estos proyectos de ley no se convirtieron en leyes en Florida y no fueron implementados.  ',

    veredicto:
      "Esta información es FALSA, ya que no existe una restricción oficial en vigor para mostrar la bandera puertorriqueña en Florida y no está informado por fuentes confiables. <br/> Sin embargo, es importante tener en cuenta que puede haber regulaciones o pautas con respecto a la exhibición de banderas en contextos específicos, como edificios gubernamentales o espacios públicos. Esta normativa tiene como objetivo mantener el orden y garantizar que las exhibiciones sean respetuosas y acordes con los protocolos establecidos.",
    image: DESANTIS,
    description:
      'Una publicación que circula en Tiktok afirma falsamente que el gobernador Ron DeSantis firmó una ley para prohibir izar la bandera de Puerto Rico en Florida.No existe una ley específica en Florida que prohíba por completo la bandera puertorriqueña o cualquier otra bandera específica. La libertad de exhibir banderas, incluida la bandera puertorriqueña, generalmente está protegida por la Primera Enmienda de la Constitución de los Estados Unidos que garantiza el derecho a la libertad de expresión.Los legisladores de Florida intentaron introducir los proyectos de ley SB 668 en el Senado y HB 1011 en la Cámara de Representante, relacionados con la exhibición de banderas "no autorizadas" en edificios públicos en Florida, pero no tuvieron éxito y no fueron aprobados en ninguna de las dos cámaras legislativas. Por lo tanto, estos proyectos de ley no se convirtieron en leyes en Florida y no fueron implementados.',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: uuid(),
    name: "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro de la OTAN",
    date: new Date("2023-07-15").toISOString(),
    tags: ["Putin", "OTAN", "NATO ", "Ucrania", "Vladimir", "", "", ""],
    status: "FALSO",
    category: "Resto del Mundo",
    afirmacion:
      "Putin ha sido derrotado y la OTAN admite a Ucrania como miembro el 10 de julio",
    analisis:
      'Un video que circula en <em><a target="_blank" rel="noreferrer" href="https://www.facebook.com/watch/?ref=search&v=667484881903196&external_log_id=05b10ee7-2d83-45e7-a743-906ca3ad57ea&q=putin%20ha%20sido%20derrotado" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Facebook</a></em> y ha sido compartido más de 2 mil veces, y en <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dXWEr-D6J8I" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Youtube</a></em> con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.<br/> <br/> El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN. <br/> <br/>En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    veredicto:
      "FALSO. Aunque la OTAN ha afirmado que Ucrania podría convertirse en miembro, el organismo ha dicho que esto pasará cuando todos los miembros estén de acuerdo con esa decisión, lo que no ha ocurrido. Además, la guerra entre Rusia y Ucrania continúa; no ha sido derrotada ninguna de las partes.",
    image: OTAN,
    description:
      'Un video que circula en Facebook y ha sido compartido más de 2 mil veces, y en Youtube con más de 10 mil veces, difunde falsamente que la OTAN ha admitido formalmente a Ucrania como miembro de la organización y afirma que como consecuencia de esto, Putin ha sido derrotado.El primer video publicado por "Reporte de última hora" en Facebook comienza con el título "El mundo se prepara para el fin de la guerra de Rusia: la OTAN acepta a...", insinuando que Ucrania ya ha sido aceptada en la OTAN.En el segundo video en Youtube, también afirman con el título "Putin DERROTADO: establecen una base temporal de la OTAN en Ucrania por amenaza rusa".',
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 10,
      },
      {
        color: "#00ff00",
        colorQuantity: 6,
      },
      {
        color: "#ff0000",
        colorQuantity: 9,
      },
    ],
    price: 31990,
    originalPrice: 51999,
    company: "redmi",
    isShippingAvailable: true,
    stock: 25,
    reviewCount: 418,
    stars: 3.7,
  },
  
  {
    _id: uuid(),
    name: "Mediante orden ejecutiva EO-14067, Biden convierte el dolar en una criptomoneda",
    date: new Date("2023-07-15").toISOString(),
    tags: [
      "Biden",
      "Falso",
      "Criptomoneda",
      "cryptocurrency",
      "EO-14067",
      "14067",
    ],
    status: "FALSO",
    category: "Estados Unidos",
    afirmacion: "Joe Biden Convierte el Dolar en una Criptomoneda",
    analisis:
      'Una publicación que circula en <em><a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/CuhHqTfMIT2/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Instagram</a></em> afirma falsamente que Joe Biden firmó la orden ejecutiva <em><a target="_blank" rel="noreferrer" href="https://www.whitehouse.gov/briefing-room/statements-releases/2022/03/09/fact-sheet-president-biden-to-sign-executive-order-on-ensuring-responsible-innovation-in-digital-assets/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>EO-14067</a></em> para convertir el dólar en una criptomoneda. Esta ley fue firmada el 9 de marzo de 2022, lo cual hace más de un año. La publicación insinúa erróneamente que esto es algo reciente después de que Joe Biden hablara sobre la eliminación de lagunas para los comerciantes de criptomonedas en su <em><a target="_blank" rel="noreferrer" href="https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/06/28/remarks-by-president-biden-on-bidenomics-chicago-il/" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>discurso</a></em> "Bidenomics" el 28 de junio.',
    veredicto:
      "Esta información es FALSA, ya que no existe evidencia alguna ni comunicado oficial por parte de la Casa Blanca que afirme que el dólar se ha convertido en una criptomoneda.",
    image: CRYPTO,
    description:
      'Una publicación que circula en Instagram afirma falsamente que Joe Biden firmó la orden ejecutiva EO-14067 para convertir el dólar en una criptomoneda. Esta ley fue firmada el 9 de marzo de 2022, lo cual hace más de un año. La publicación insinúa erróneamente que esto es algo reciente después de que Joe Biden hablara sobre la eliminación de lagunas para los comerciantes de criptomonedas en su discurso "Bidenomics" el 28 de junio.',
    colors: [
      {
        color: "#00ff00",
        colorQuantity: 8,
      },
      {
        color: "#000",
        colorQuantity: 2,
      },
    ],
    company: "redmi",
    price: 54499,
    originalPrice: 74999,
    isShippingAvailable: false,
    stock: 10,
    reviewCount: 1805,
    stars: 4.3,
  },

  {
    _id: uuid(),
    name: "La reciente neblina que cubrio la ciudad de Nueva York fue causada por Bill Gates ",
    date: new Date("2023-06-25").toISOString(),
    tags: [
      "Bill",
      "Gates",
      "neblina",
      "haze",
      "NYC",
      "climatico",
      "medio ambiente",
      "oscurecer",
    ],
    status: "FALSO",
    category: "Estados Unidos",
    afirmacion:
      "La neblina reciente en la ciudad de Nueva York fue causada por tecnologia de Bill Gates que pretende oscurecer el sol",
    analisis:
      'Una publicación que circula en <em><a target="_blank" rel="noreferrer" href="https://archive.org/details/elizabeth-glass-for-senate-ny-27-o-follow" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>Instagram</a></em> y en este <em><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=tkrZVx0A4X4" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>video</a></em> afirma falsamente que la reciente neblina que cubrió la ciudad de Nueva York y algunas otras ciudades del norte de los Estados Unidos fue causada no por los incendios forestales en Canadá, sino por una geoingeniería creada por Bill Gates para oscurecer el sol y enfriar el planeta. Se afirma esto luego de conocerse que Gates <em><a target="_blank" rel="noreferrer" href="https://www.forbes.com/sites/davidrvetter/2022/01/20/solar-geoengineering-why-bill-gates-wants-it-but-these-experts-want-to-stop-it/?sh=20e9e4e01842" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>ha invertido en la tecnología de geoingeniería solar</a></em> de la Universidad de Harvard, la cual experimenta con la liberación de polvo y azufre en la estratosfera para frenar el calor del sol y enfriar la tierra.',
    veredicto:
      'Esta información es FALSA, ya que carece de evidencia fuerte ya que organización de buena reputación como el “Servicio Meteorológico Nacional Nueva York NY” afirmaron que que el humo o neblina visto en la ciudad de New York fue  <em><a target="_blank" rel="noreferrer" href="https://www.forbes.com/sites/davidrvetter/2022/01/20/solar-geoengineering-why-bill-gates-wants-it-but-these-experts-want-to-stop-it/?sh=20e9e4e01842" style={{ color: "blue", textDecoration: "underline", fontStyle: "italic", fontWeight: "normal", fontSize: "inherit" }}>causado </a></em> por los fuertes incendios forestales en Canadá.',

    image: GATES,
    description:
      'Una publicación que circula en Instagram y en este video afirma falsamente que la reciente neblina que cubrió la ciudad de Nueva York y algunas otras ciudades del norte de los Estados Unidos fue causada no por los incendios forestales en Canadá, sino por una geoingeniería creada por Bill Gates para oscurecer el sol y enfriar el planeta. Se afirma esto luego de conocerse que Gates ha invertido en la tecnología de geoingeniería solar de la Universidad de Harvard, la cual experimenta con la liberación de polvo y azufre en la estratosfera para frenar el calor del sol y enfriar la tierra.',
    price: 13499,
    originalPrice: 24999,
    colors: [
      {
        color: "#0000ff",
        colorQuantity: 9,
      },
      {
        color: "#00ff00",
        colorQuantity: 2,
      },
      {
        color: "#ff0000",
        colorQuantity: 7,
      },
      {
        color: "#ffb900",
        colorQuantity: 9,
      },
    ],
    company: "redmi",
    isShippingAvailable: true,
    stock: 27,
    reviewCount: 35573,
    stars: 4.2,
  },
 
  
  ];
products.sort((a, b) => new Date(b.date) - new Date(a.date));
  

  
  
