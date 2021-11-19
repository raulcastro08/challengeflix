const API_KEY = "52e7fd561119a41c7e8db07efddbd6b4"; //criar um .env para armazenar chave
const API_BASE = "https://api.themoviedb.org/3";

// --em alta (Top rated)

// Função auxiliar: Busca e retornará o JSON
// Envio um ENDPOINT ele retorna o json referente a requisição do endpoint
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`); //REQUISIÇÃO PARA UM SERVIÇO EXTERNO / IRÁ AGUARDAR RESPOSTA PARA PROSEGUIR
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "toprated",
        title: "Mais populares",
        items: await basicFetch(
          `/movie/popular?api_key=${API_KEY}&language=pt-BR` //REQUISIÇÃO POR FILMES MAIS POPULARES
        ),
      },
      // {
      //   slug: "action",
      //   title: "Outros Títulos",
      //   items: await basicFetch(
      //     `/discover/movie?api_key=${API_KEY}&language=pt-BR`
      //   ),
      //   genre_ids: "726663",
      // },
      // {
      //   slug: "comedy",
      //   title: "Comédia",
      //   items: await basicFetch(
      //     `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`
      //   ),
      // },
      // {
      //   slug: "horror",
      //   title: "Terror",
      //   items: await basicFetch(
      //     `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`
      //   ),
      // },
      // {
      //   slug: "romance",
      //   title: "Romance",
      //   items: await basicFetch(
      //     `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`
      //   ),
      // },
      // {
      //   slug: "documentary",
      //   title: "Documentarios",
      //   items: await basicFetch(
      //     `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`
      //   ),
      // },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );

          break;

        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
  },
};
