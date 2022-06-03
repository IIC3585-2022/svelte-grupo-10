import axios from "axios";

export const fetchBirds = () =>
  axios.request({
    method: "GET",
    url: "https://aves.ninjas.cl/api/birds",
  });

  export const fetchBird = (uid) => {
    return axios.request({
      method: "GET",
      url: `https://aves.ninjas.cl/api/birds/${uid}`,
    });
  }

export const birdsDummies = [
  {
    uid: "76-buteo-albigula",
    name: {
      spanish: "Aguilucho Chico",
      english: "White-throated Hawk",
      latin: "Buteo albigula",
    },
    images: {
      main: "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
      full: "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3099/17082018024245aguilucho_chico_tomas_rivas_web.200x0.jpg",
    },
    iucn:{
      title:"Menor riesgo (LC)",
      description:"Segun fan la lista roja de los vertebrados del mundo de la Union Internacional para la Conservacion \
      de la Naturaleza (IUCN), el aguilucho chico esta catalogado como especie de preocupacion menor (LC), sin embargo \
       su poblacion podría verse afectada por la destruccion y contaminacio,n de su habitat, caza, recoleccion de huevos \
       y por el ataque de perros, gatos, visones o interaccion con otros animales exoticos invasivos."


    },
    habitat: "Se le puede observar solitario o en parejas volando \u00e1gilmente en los bosques de Nothofagus (robles, coig\u00fces, peumos y Araucarias, pero vuela en zonas abiertas y monta\u00f1osas. Su rango de distribuci\u00f3n en Chile va desde la regi\u00f3n de Atacama hasta Ays\u00e9n desde la costa hasta los 2.000 msnm. El aguilucho chico tambi\u00e9n habita en el sur de Argentina. En oto\u00f1o estas aves migran a otras zonas de Latinoam\u00e9rica como Per\u00fa, Bolivia, Ecuador, Colombia y Venezuela. Su nido lo fabrica con ramas, musgos y l\u00edquenes en el cual coloca hasta entre uno a dos huevos blancos.","didyouknow":"El Aguilucho chico es el \u00fanico rapaz que se reproduce en el sur de Sudam\u00e9rica y realiza migraciones trans-hemisf\u00e9ricas durante el invierno austral. La incubaci\u00f3n de los huevos dura alrededor de un mes y es efectuada por ambos padres.",

    _links: {
      self: "https://aves.ninjas.cl/api/birds/76-buteo-albigula",
      parent: "https://aves.ninjas.cl/api/birds",
    },
    sort: 0,
  },
  {
    uid: "46-lophonetta-specularioides",
    name: {
      spanish: "Pato Juarjual",
      english: "Crested Duck",
      latin: "Lophonetta specularioides",
    },
    images: {
      main: "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.200x0.jpg",
      full: "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.jpg",
      thumb:
        "https://aves.ninjas.cl/api/site/assets/files/3102/18082018072023pato_juarjual_pedro_valencia_web.200x0.jpg",
    },
    iucn:{
      title:"Menor riesgo (LC)",
      description:"Segun fan la lista roja de los vertebrados del mundo de la Union Internacional para la Conservacion \
      de la Naturaleza (IUCN), el aguilucho chico esta catalogado como especie de preocupacion menor (LC), sin embargo \
       su poblacion podría verse afectada por la destruccion y contaminacio,n de su habitat, caza, recoleccion de huevos \
       y por el ataque de perros, gatos, visones o interaccion con otros animales exoticos invasivos."
    },
    _links: {
      self: "https://aves.ninjas.cl/api/birds/46-lophonetta-specularioides",
      parent: "https://aves.ninjas.cl/api/birds",
    },
    sort: 1,
  }
]

