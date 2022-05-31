import axios from "axios";

export const fetchBirds = () =>
  axios.request({
    method: "GET",
    url: "https://aves.ninjas.cl/api/birds",
  });


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
    _links: {
      self: "https://aves.ninjas.cl/api/birds/46-lophonetta-specularioides",
      parent: "https://aves.ninjas.cl/api/birds",
    },
    sort: 1,
  }
]