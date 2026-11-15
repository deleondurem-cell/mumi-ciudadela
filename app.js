// Íconos SVG limpios generados en código
const ICONS = {
  speaker: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
  warning: `<svg viewBox="0 0 120 110" fill="none" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M60 10 L112 100 H8 Z"/><line x1="60" y1="42" x2="60" y2="70"/><circle cx="60" cy="84" r="2.5" fill="#000000"/></svg>`,
  arrowUp: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="60" y1="100" x2="60" y2="22"/><polyline points="30,52 60,22 90,52"/></svg>`,
  arrowRight: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M36 105 V55 C36 42 46 32 59 32 H76 V16 L104 40 L76 64 V48 H59 C54 48 50 52 50 57 V105 Z"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M84 105 V55 C84 42 74 32 61 32 H44 V16 L16 40 L44 64 V48 H61 C66 48 70 52 70 57 V105 Z"/></svg>`,
  check: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="60" cy="60" r="46"/><polyline points="38,62 53,77 84,45" stroke-width="8"/></svg>`
};

// Base de datos de todas las pantallas de Web 1: Puerta de la Ciudadela
const SCREENS = {
  // PANTALLAS INICIALES
  intro: {
    title: "Museo de la Movilidad y las Identidades",
    paragraphs: [
      "Somos un museo de la Intendencia de Montevideo. Acá contamos cómo las personas se han desplazado a lo largo del tiempo, y cómo esos movimientos han construido nuestra sociedad, la cultura y las identidades."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina1.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Continuar",
    next: "selector"
  },

  selector: {
    type: "selector",
    title: "Te presentamos dos formas de llegar\n¿Qué recorrido te gustaría hacer?",
    options: [
      {
        description: "Vas a conocer puntos clave sobre el Montevideo colonial",
        buttonLabel: "Recorrido histórico",
        next: "hist_32"
      },
      {
        description: "Esta es la forma más simple y rápida de llegar al museo.",
        buttonLabel: "Recorrido directo",
        next: "dir_3"
      }
    ]
  },

  // ==========================================
  // RECORRIDO DIRECTO (Pantallas 3 a 8)
  // ==========================================
  dir_3: {
    title: "Estás en la Puerta de la Ciudadela, ¿Vamos hasta el MuMI?",
    image: "img/mapa-directo.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido directo desde Puerta de la Ciudadela hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde la Puerta de la Ciudadela hasta el museo. Podés seguir las instrucciones en pantalla o seguir escuchando este audio."
    ],
    audio: "audio/pagina3.mp3",
    audioLabel: "Escuchar indicaciones",
    primaryLabel: "Comenzar recorrido",
    next: "dir_4"
  },

  dir_4: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina4.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "dir_5"
  },

  dir_5: {
    badge: "Paso 1 de 2",
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "Caminá derecho una cuadra por la calle Sarandí."
    ],
    audio: "audio/pagina5.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_6"
  },

  dir_6: {
    badge: "Paso 2 de 2",
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Llegaste a la esquina de Sarandí y Bartolomé Mitre.\nGirá a tu derecha por la misma vereda, luego caminá derecho cuatro cuadras por Bartolomé Mitre."
    ],
    audio: "audio/pagina6.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_7"
  },

  dir_7: {
    icon: "check",
    title: "¡Llegaste al MuMI!",
    paragraphs: [
      "A tu derecha está la entrada principal, y siguiendo media cuadra más se encuentra la entrada a la Muralla Abierta. Al entrar por la puerta principal, vas a encontrar el mostrador a tu derecha. Podés acercarte si necesitás ayuda o información."
    ],
    audio: "audio/pagina7.mp3",
    audioLabel: "Escuchar información",
    primaryLabel: "Finalizar recorrido",
    next: "final"
  },

  // ==========================================
  // RECORRIDO HISTÓRICO (Pantallas 32 a 67)
  // ==========================================
  hist_32: {
    image: "img/mapa-historico.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido histórico desde Puerta de la Ciudadela hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde la Puerta de la Ciudadela hasta el museo, atravesando algunos de los puntos históricos más interesantes de nuestra ciudad."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina32.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Comenzar recorrido",
    next: "hist_33"
  },

  hist_33: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina33.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_34"
  },

  hist_34: {
    title: "Estás en la Puerta de la Ciudadela",
    paragraphs: [
      "La Puerta de la Ciudadela es una construcción muy antigua de Montevideo. Antes formaba parte de unas grandes murallas que rodeaban y protegían la ciudad.",
      "Hoy está en la Plaza Independencia y marca la entrada a la Ciudad Vieja. La puerta se empezó a construir en el año 1742.",
      "En ese momento, Montevideo estaba gobernada por España. Los españoles construyeron la fortaleza llamada La Ciudadela para defenderse de los ataques. Servía para entrar desde la ciudad hacia esa fortaleza. Tenía un puente que subía y bajaba con cadenas para controlar quién entraba. Hoy todavía se pueden ver las marcas de esas cadenas en la piedra.",
      "Con los años, Montevideo creció y necesitó más espacio para hacer casas y calles. Por eso, entre los años 1829 y 1877, se derribaron las murallas y la fortaleza. Pero la puerta no se destruyó: se desarmó con cuidado y se guardaron sus piedras.",
      "La puerta cambió de lugar varias veces. En el año 1879 la llevaron a otro lugar de la ciudad. Después la pusieron en la entrada de una escuela. En el año 1959 volvió a la Plaza Independencia. La volvieron a armar usando sus piedras originales y desde entonces sigue ahí.",
      "En el año 1975 fue declarada Monumento Histórico Nacional. Es muy importante cuidarla porque nos ayuda a imaginar cómo era Montevideo hace muchos años."
    ],
    audio: "audio/pagina34.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_35"
  },

  hist_35: {
    badge: "Punto de partida",
    title: "Puerta de la Ciudadela",
    image: "img/puerta.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Puerta de la Ciudadela",
    primaryLabel: "Continuar",
    next: "hist_36"
  },

  hist_36: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: ["Caminá derecho por la calle Sarandí unos 60 metros aprox."],
    audio: "audio/pagina36.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_37"
  },

  hist_37: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: ["Llegaste a la esquina de Sarandí y Bacacay.\nGirá a tu izquierda por la misma vereda."],
    audio: "audio/pagina37.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_38"
  },

  hist_38: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: ["Caminá una cuadra hasta llegar a la calle Buenos Aires y cruzá la calle."],
    audio: "audio/pagina38.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_39"
  },

  hist_39: {
    title: "Llegaste al Teatro Solís",
    paragraphs: [
      "El Teatro Solís es uno de los teatros más importantes de Uruguay. Su construcción empezó en el año 1842, cuando Uruguay era un país joven. Un grupo de 156 personas decidió crearlo para tener un gran lugar de música y teatro en Montevideo. Las obras se frenaron en 1843 por una guerra llamada Guerra Grande. Finalmente, el teatro abrió sus puertas el 25 de agosto de 1856, el día en que se celebra la independencia de Uruguay.",
      "En la inauguración se presentó una ópera llamada Ernani, creada por el músico italiano Giuseppe Verdi. A esa primera función asistió el presidente de Uruguay de esa época, Gabriel Antonio Pereira. El teatro lleva el nombre de Juan Díaz de Solís, un navegante que llegó al Río de la Plata en el año 1516.",
      "El edificio tiene un estilo antiguo llamado neoclásico, inspirado en las construcciones de Grecia y Roma. En su frente tiene 8 columnas grandes y un techo triangular. Fue diseñado así para mostrar la importancia de Uruguay como un país independiente.",
      "Al principio, el teatro era privado, es decir, tenía dueños particulares. En el año 1937, la Intendencia de Montevideo lo compró y pasó a ser un lugar público para todas las personas.",
      "El Teatro Solís es clave para la cultura del país. En 1947 se creó la Comedia Nacional y presentó allí su primera obra. En 1949 se creó una escuela municipal para formar actores y actrices en Uruguay.",
      "Cuando se construyó el teatro, Montevideo todavía tenía murallas que protegían la ciudad. Cerca de allí estaba la Fuente de Viana, que daba agua a los vecinos. Hoy, el Teatro Solís es mucho más que un lugar de espectáculos: es parte de la historia y la cultura de Uruguay."
    ],
    audio: "audio/pagina39.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_40"
  },

  hist_40: {
    badge: "Parada 1 de 7",
    title: "Teatro Solís",
    image: "img/teatro-solis.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Teatro Solís",
    primaryLabel: "Continuar",
    next: "hist_41"
  },

  hist_41: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: ["Caminá hacia la derecha por Buenos Aires hasta la esquina y cruzá la calle, vas a estar sobre Buenos Aires y Bartolomé Mitre."],
    audio: "audio/pagina41.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_42"
  },

  hist_42: {
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: ["Avanzá unos metros hasta encontrarte con un monumento de piedra a tu izquierda."],
    audio: "audio/pagina42.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_43"
  },

  hist_43: {
    title: "Llegaste al Baluarte de San Sebastián",
    paragraphs: [
      "El Baluarte de San Sebastián es una parte de las antiguas murallas que protegían Montevideo. Tenía una forma especial que permitía vigilar muy bien los alrededores. Desde allí, los soldados cuidaban la ciudad y usaban sus armas para defenderse de los ataques.",
      "En el año 1807, soldados ingleses atacaron Montevideo. Durante esa pelea, lograron romper una parte de las murallas para entrar. Ese lugar roto dio origen al nombre de la actual calle Brecha. Esta historia demuestra lo importantes que eran las murallas y los baluartes para defender la ciudad.",
      "Hoy es muy importante cuidar los restos del Baluarte de San Sebastián. Es una de las pocas partes visibles que quedan de las antiguas defensas de Montevideo. Aunque ahora está rodeado de calles y edificios modernos, nos ayuda a imaginar cómo era la vida y la defensa de la ciudad hace muchos años."
    ],
    audio: "audio/pagina43.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_44"
  },

  hist_44: {
    badge: "Parada 2 de 7",
    title: "Baluarte de San Sebastián",
    image: "img/baluarte.png",
    imageType: "photo",
    imageAlt: "Placa y restos del Baluarte de San Sebastián",
    primaryLabel: "Continuar",
    next: "hist_45"
  },

  hist_45: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: ["Avanzá hasta llegar a la esquina de Juan Carlos Gómez y Buenos Aires."],
    audio: "audio/pagina45.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_46"
  },

  hist_46: {
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: ["Cruzá la calle y seguí una cuadra más por Buenos Aires hasta llegar a su esquina con Ituzaingó."],
    audio: "audio/pagina46.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_47"
  },

  hist_47: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: ["Cruzá la calle hacia tu derecha. Avanzá una cuadra más hasta pasar la esquina de Ituzaingó y Sarandí."],
    audio: "audio/pagina47.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_48"
  },

  hist_48: {
    title: "Llegaste a la Iglesia Matriz",
    paragraphs: [
      "La Iglesia Matriz es una de las iglesias más antiguas e importantes de Montevideo. Es el templo principal de la Iglesia Católica en la ciudad. La palabra \"matriz\" significa principal o primera. Su nombre completo recuerda a la Virgen y a los santos Felipe y Santiago, protectores de Montevideo.",
      "En el año 1740 se abrió una primera iglesia sencilla en ese mismo lugar. Con el tiempo se rompió y en 1788 una parte se derrumbó. Por eso, en 1790 se empezó a construir la iglesia actual, que se terminó en el año 1804.",
      "En la época colonial, era un lugar muy importante para los vecinos. Allí se hacían misas, bautismos, casamientos y funerales, y la gente se reunía a conversar. En el año 1807, durante las invasiones inglesas, la iglesia sufrió daños por los ataques y sirvió para cuidar a los heridos y alojar prisioneros.",
      "El edificio tiene un estilo antiguo llamado neoclásico, inspirado en Grecia y Roma. En su frente tiene dos torres con campanas, columnas y una gran cúpula redonda en el techo. Por dentro tiene tres espacios largos llamados naves. Entre 1941 y 1963 se hizo una gran obra para repararla y cuidarla.",
      "En el año 1878 se convirtió en la Catedral de Montevideo, cuando Jacinto Vera fue nombrado el primer obispo. En 1897 recibió el título de Catedral Metropolitana, porque pasó a ser dirigida por un arzobispo. Dentro de la iglesia están enterrados Jacinto Vera y Mariano Soler, el primer arzobispo de la ciudad.",
      "En el año 1975 fue declarada Monumento Histórico Nacional. Cuidarla es muy importante porque nos muestra la arquitectura y la historia de los primeros años de Montevideo."
    ],
    audio: "audio/pagina48.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_49"
  },

  hist_49: {
    badge: "Parada 3 de 7",
    title: "Iglesia Matriz",
    image: "img/iglesia-matriz.png",
    imageType: "photo",
    imageAlt: "Ilustración histórica de la Iglesia Matriz",
    primaryLabel: "Continuar",
    next: "hist_50"
  },

  hist_50: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: ["A tu derecha vas a encontrar la Plaza Matriz, nuestra siguiente parada."],
    audio: "audio/pagina50.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_51"
  },

  hist_51: {
    title: "Llegaste a la Plaza Matriz",
    paragraphs: [
      "La Plaza Matriz es la plaza más antigua de Montevideo. Su nombre oficial es Plaza de la Constitución. Se llama así porque el 18 de julio de 1830 se juró allí la primera Constitución de Uruguay.",
      "La plaza se creó en el año 1726, cuando Montevideo recién nacía y estaba gobernada por España. Era el centro de la ciudad y a su alrededor se construyeron edificios muy importantes, como el Cabildo y la Iglesia Matriz.",
      "En la época colonial, los vecinos se reunían allí para celebrar fiestas religiosas y militares. También funcionaba un mercado donde se vendían frutas y verduras, por eso antes la llamaban Plaza de las Verduras. A veces se hacían corridas de toros y otros festejos populares.",
      "En el centro de la plaza hay una gran fuente de mármol hecha por el escultor italiano Juan Ferrari. Se inauguró el 18 de julio de 1871 para celebrar la llegada del agua corriente a Montevideo. Antes, la gente sacaba agua de pozos que no siempre era limpia. Con la nueva red de agua del río Santa Lucía, esta fuente fue uno de los primeros lugares públicos con agua segura para los vecinos. La fuente está decorada con figuras de niños, delfines, águilas, herramientas de trabajo y el Escudo Nacional.",
      "Hoy en día, la Plaza Matriz sigue siendo un lugar lleno de vida en la Ciudad Vieja. Es visitada por muchos turistas y los sábados se instala una feria de antigüedades."
    ],
    audio: "audio/pagina51.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_52"
  },

  hist_52: {
    badge: "Parada 4 de 7",
    title: "Plaza Matriz",
    image: "img/plaza-matriz.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Plaza Matriz",
    primaryLabel: "Continuar",
    next: "hist_53"
  },

  hist_53: {
    icon: "arrowUp",
    title: "Atravesá la plaza",
    paragraphs: ["Cruzá la plaza en dirección hacia Juan Carlos Gómez, paralela a Ituzaingó, a mano derecha de la Iglesia Matriz."],
    audio: "audio/pagina53.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_54"
  },

  hist_54: {
    title: "Llegaste al Cabildo de Montevideo",
    paragraphs: [
      "El Cabildo es uno de los edificios históricos más importantes de Montevideo. Está frente a la Plaza Matriz, en la Ciudad Vieja. En la época colonial, era el lugar desde donde se gobernaba la ciudad. Las autoridades que trabajaban allí, llamadas cabildantes, organizaban las calles, controlaban el comercio y cuidaban el orden. El edificio también funcionaba como juzgado y cárcel, por eso se lo llamaba Cabildo y Reales Cárceles.",
      "El primer edificio del Cabildo empezó a funcionar en el año 1737, pero con el tiempo se rompió. En 1804 se comenzó a construir el edificio actual, diseñado por el arquitecto español Tomás Toribio. Las obras avanzaron por etapas y terminaron en 1869, cuando Uruguay ya era un país independiente.",
      "El Cabildo fue escenario de momentos clave para la historia de Uruguay. En 1808 se hizo allí un Cabildo Abierto para decidir quién gobernaría Montevideo. En 1815 fue sede del gobierno durante la época de José Artigas. El 18 de julio de 1830 se juró allí la primera Constitución de Uruguay.",
      "Después de la independencia, el edificio tuvo otras funciones importantes. Hasta el año 1925 funcionó allí el Poder Legislativo, donde se reunían los senadores y diputados del país. El edificio tiene un estilo antiguo llamado neoclásico, inspirado en Grecia y Roma. Sus paredes son de piedra y ladrillo, tiene dos pisos y cuatro patios interiores. Su frente es simétrico, es decir, sus dos lados son iguales para mostrar fuerza y seriedad.",
      "Desde el año 1958 funciona allí el Museo Histórico Cabildo. En sus salas se guardan documentos, fotos, pinturas y objetos antiguos que nos ayudan a conocer cómo cambió la vida en Montevideo a lo largo de la historia."
    ],
    audio: "audio/pagina54.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_55"
  },

  hist_55: {
    badge: "Parada 5 de 7",
    title: "Cabildo de Montevideo",
    image: "img/cabildo.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Cabildo de Montevideo",
    primaryLabel: "Continuar",
    next: "hist_56"
  },

  hist_56: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "De frente al Cabildo, seguí hacia la izquierda por la calle Juan Carlos Gómez.",
      "Avanzá dos cuadras, vas a llegar a la esquina entre Juan Carlos Gómez y 25 de Mayo."
    ],
    audio: "audio/pagina56.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_57"
  },

  hist_57: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: ["En la vereda de en frente, sobre la calle 25 de mayo, se encuentra a unos metros hacia la derecha el Palacio Gómez, nuestra siguiente parada."],
    audio: "audio/pagina57.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_58"
  },

  hist_58: {
    title: "Llegaste al Palacio Gómez",
    subtitle: "Palacio Gómez / Junta Departamental de Montevideo",
    paragraphs: [
      "El Palacio Gómez es un edificio construido originalmente como residencia familiar y que actualmente funciona como sede de la Junta Departamental de Montevideo. Esta institución es la encargada de elaborar y aprobar normas para el departamento, controlar la gestión de la Intendencia y representar a los habitantes de Montevideo.",
      "El edificio fue construido entre los años 1871 y 1874 por encargo de Francisco Antonio Gómez, un importante comerciante de la época, que quería utilizarlo como residencia familiar. El arquitecto encargado del proyecto fue Ignacio Pedralbes, quien diseñó una construcción lujosa y con muchos detalles decorativos. Sin embargo, Francisco Gómez y su familia nunca llegaron a vivir allí.",
      "En 1888, la familia Gómez vendió el edificio a la Junta Económico-Administrativa de Montevideo, que era la institución encargada de la administración de la ciudad en aquella época. El 25 de agosto de 1889 comenzó a funcionar allí como sede de la institución. Con el paso del tiempo, esta fue transformándose hasta convertirse en la actual Junta Departamental de Montevideo.",
      "El edificio tiene un estilo arquitectónico llamado eclecticismo historicista, que combina elementos de distintos estilos del pasado. Se destacan las influencias neogóticas, inspiradas en la arquitectura medieval inglesa. En su interior tiene tres plantas, un patio central cubierto por una gran claraboya y una escalera de mármol de Carrara que conecta los distintos niveles. También cuenta con columnas, decoraciones de yeso, vitrales y detalles de madera.",
      "En el año 1975 fue declarado Monumento Histórico Nacional por su valor arquitectónico e histórico. Actualmente, además de ser la sede de la Junta Departamental, es un espacio donde se desarrolla parte de la actividad política y administrativa de Montevideo."
    ],
    audio: "audio/pagina58.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_59"
  },

  hist_59: {
    badge: "Parada 6 de 7",
    title: "Palacio Gómez",
    image: "img/palacio-gomez.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Palacio Gómez",
    primaryLabel: "Continuar",
    next: "hist_60"
  },

  hist_60: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: ["Volvé a la esquina de Juan Carlos Gómez y 25 de mayo."],
    audio: "audio/pagina60.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_61"
  },

  hist_61: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: ["Doblá a la derecha sobre la misma vereda, en Juan Carlos Gómez. Avanzá en línea recta tres cuadras hasta la esquina entre Juan Carlos Gómez y 25 de Agosto."],
    audio: "audio/pagina61.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_62"
  },

  hist_62: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "En la esquina, cruzá la calle a mano izquierda.",
      "Avanzá por 25 de Agosto unos 60 metros aprox.",
      "A mano derecha te vas a encontrar nuestra última parada."
    ],
    audio: "audio/pagina62.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_63"
  },

  hist_63: {
    title: "Llegaste a Las Bóvedas",
    paragraphs: [
      "Las Bóvedas son construcciones muy antiguas que formaban parte de las defensas militares de Montevideo en la época colonial. Se empezaron a construir en el año 1794, cuando Uruguay estaba gobernado por España.",
      "Estaban ubicadas cerca del puerto y de la bahía para proteger la ciudad. Eran 34 habitaciones con techos curvos en forma de arco, llamados bóvedas. Estos espacios servían para guardar armas, municiones y comida para los soldados, y también se usaban para que las tropas durmieran allí.",
      "Con el paso del tiempo, Montevideo creció y ya no necesitó estas construcciones para defenderse. Muchas de ellas se derribaron para hacer cambios en el puerto y en la ciudad.",
      "Hoy todavía se conservan algunas partes de Las Bóvedas. Cuidarlas es muy importante porque nos permite ver cómo era el sistema de defensa de la antigua Montevideo."
    ],
    audio: "audio/pagina63.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_64"
  },

  hist_64: {
    badge: "Parada 7 de 7",
    title: "Las Bóvedas",
    image: "img/las-bovedas.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de Las Bóvedas",
    primaryLabel: "Continuar",
    next: "hist_65"
  },

  hist_65: {
    icon: "arrowUp",
    title: "Vayamos al MuMI",
    paragraphs: ["Volvé a la esquina entre Juan Carlos Gómez y 25 de Agosto. Avanzá una cuadra por 25 de agosto hasta llegar a la esquina entre Bartolomé Mitre y 25 de Agosto."],
    audio: "audio/pagina65.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_66"
  },

  hist_66: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: ["Cruzá la calle y doblá hacia la derecha hasta llegar a la esquina entre Bartolomé Mitre y Piedras."],
    audio: "audio/pagina66.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_67"
  },

  hist_67: {
    icon: "check",
    title: "¡Llegaste al MuMI!",
    paragraphs: [
      "A tu derecha está la entrada principal, y siguiendo media cuadra más se encuentra la entrada a la Muralla Abierta. Al entrar por la puerta principal, vas a encontrar el mostrador a tu derecha. Podés acercarte si necesitás ayuda o información."
    ],
    audio: "audio/pagina67.mp3",
    audioLabel: "Escuchar información",
    primaryLabel: "Finalizar recorrido",
    next: "final"
  },

  // PANTALLA FINAL (8 y 68)
  final: {
    type: "final"
  }
};

// Elementos del DOM
const appContainer = document.getElementById('app');
const appHeader = document.getElementById('app-header');
const screenContent = document.getElementById('screen-content');
const screenFooter = document.getElementById('screen-footer');
const audioPlayer = document.getElementById('audio-player');
const btnHome = document.getElementById('btn-home');
const btnBack = document.getElementById('btn-back');

let isPlaying = false;
let historyStack = [];

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
}

function toggleAudio(src, btnElement, originalLabel) {
  if (isPlaying) {
    stopAudio();
    btnElement.classList.remove('playing');
    btnElement.innerHTML = `${ICONS.speaker}<span>${originalLabel}</span>`;
  } else {
    audioPlayer.src = src;
    audioPlayer.play().then(() => {
      isPlaying = true;
      btnElement.classList.add('playing');
      btnElement.innerHTML = `${ICONS.pause}<span>Pausar audio</span>`;
    }).catch(err => {
      console.error("Error reproduciendo audio:", err);
    });
  }
}

audioPlayer.addEventListener('ended', () => {
  isPlaying = false;
  const activeBtn = document.querySelector('.btn-audio.playing');
  if (activeBtn) {
    activeBtn.classList.remove('playing');
    activeBtn.innerHTML = `${ICONS.speaker}<span>${activeBtn.dataset.label}</span>`;
  }
});

function navigateTo(screenId) {
  const currentId = historyStack[historyStack.length - 1];
  if (currentId !== screenId) {
    historyStack.push(screenId);
  }
  renderScreen(screenId);
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop();
    const prevScreen = historyStack[historyStack.length - 1];
    renderScreen(prevScreen);
  }
}

function resetToHome() {
  historyStack = ['intro'];
  renderScreen('intro');
}

function renderScreen(screenId) {
  stopAudio();
  const data = SCREENS[screenId];
  if (!data) return;

  // Mostrar u ocultar botón "Atrás" en el header
  btnBack.hidden = historyStack.length <= 1 || data.type === 'final';

  // Resetear contenedores
  screenContent.scrollTop = 0;
  screenContent.innerHTML = '';
  screenFooter.innerHTML = '';
  appContainer.classList.remove('dark-mode');
  appHeader.style.display = 'flex';
  screenContent.className = 'screen-content';

  // Pantalla Final Negra
  if (data.type === 'final') {
    appContainer.classList.add('dark-mode');
    appHeader.style.display = 'none';
    screenContent.classList.add('final-dark');

    screenContent.innerHTML = `
      <img src="img/logo-pantalla-final.svg" alt="Logo MuMI Muralla Abierta" class="final-logo">
      <div class="final-brand-text">MuMI | Muralla Abierta</div>
      <button class="btn-restart-dark" onclick="resetToHome()">Volver al inicio</button>
    `;
    return;
  }

  // Pantalla de Selección de Recorrido (Pantalla 2)
  if (data.type === 'selector') {
    screenContent.classList.add('selector-layout');

    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.innerHTML = data.title.replace(/\n/g, '<br>');
    screenContent.appendChild(titleEl);

    const optionsWrapper = document.createElement('div');
    optionsWrapper.className = 'selector-options';

    data.options.forEach(opt => {
      const block = document.createElement('div');
      block.className = 'choice-block';
      block.innerHTML = `
        <p>${opt.description}</p>
        <button class="btn btn-primary">${opt.buttonLabel}</button>
      `;
      block.querySelector('button').addEventListener('click', () => navigateTo(opt.next));
      optionsWrapper.appendChild(block);
    });

    screenContent.appendChild(optionsWrapper);
    return;
  }

  // Pantallas Estándar
  if (data.center) {
    screenContent.classList.add('center-content');
  }

  if (data.badge) {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'step-badge';
    badgeEl.textContent = data.badge;
    screenContent.appendChild(badgeEl);
  }

  if (data.icon && ICONS[data.icon]) {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon-wrapper';
    iconDiv.innerHTML = ICONS[data.icon];
    screenContent.appendChild(iconDiv);
  }

  if (data.title) {
    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);
  }

  if (data.subtitle) {
    const subEl = document.createElement('h2');
    subEl.className = 'screen-subtitle';
    subEl.textContent = data.subtitle;
    screenContent.appendChild(subEl);
  }

  if (data.image) {
    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media-wrapper';
    const imgClass = data.imageType === 'map' ? 'map-img' : 'photo-img';
    mediaDiv.innerHTML = `<img src="${data.image}" alt="${data.imageAlt || ''}" class="${imgClass}">`;
    screenContent.appendChild(mediaDiv);
  }

  if (data.paragraphs && data.paragraphs.length > 0) {
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'screen-body';
    data.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.innerHTML = text.replace(/\n/g, '<br>');
      bodyDiv.appendChild(p);
    });
    screenContent.appendChild(bodyDiv);
  }

  if (data.highlight) {
    const highEl = document.createElement('p');
    highEl.className = 'screen-highlight';
    highEl.textContent = data.highlight;
    screenContent.appendChild(highEl);
  }

  // Botón de audio en el footer
  if (data.audio) {
    const label = data.audioLabel || 'Escuchar presentación';
    const audioBtn = document.createElement('button');
    audioBtn.className = 'btn btn-audio';
    audioBtn.dataset.label = label;
    audioBtn.innerHTML = `${ICONS.speaker}<span>${label}</span>`;
    audioBtn.addEventListener('click', () => toggleAudio(data.audio, audioBtn, label));
    screenFooter.appendChild(audioBtn);
  }

  // Botón principal de avance
  if (data.primaryLabel && data.next) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.textContent = data.primaryLabel;
    nextBtn.addEventListener('click', () => navigateTo(data.next));
    screenFooter.appendChild(nextBtn);
  }
}

// Eventos de navegación del header
btnHome.addEventListener('click', resetToHome);
btnBack.addEventListener('click', goBack);

// Iniciar la aplicación
resetToHome();
