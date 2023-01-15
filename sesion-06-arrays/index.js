const shopping_list = ["papas", "zanahoria", "brocoli", "elote", "carne"];

shopping_list.push("aceite de girasol");

shopping_list.pop();

const validacion = "01 january 2010";

const favorite_movies = [
  {
    title: "Harry Potter",
    director: "Elon Musck xD",
    fecha: "15 april 2001"
  },
  {
    title: "Avengers",
    director: "Stan Lee",
    fecha: "05 jun 2004"
  },
  {
    title: "Cuarto contacto",
    director: "Stiven Spilver",
    fecha: "24 november 2013",
  }
];

// Solucion no tan optima y poco especifica:

// const new_list = favorite_movies.filter(movie => {
//   const num = Array.from(movie.fecha);
//   const year_divider = num.slice(num.length - 4, num.length);
//   const str_year = Number(year_divider.join(""));

//   return str_year > 2010;

// });

// Solucion optima pero habria que ver el metodo de entrada de la fecha:

const new_list = favorite_movies.filter(movie => new Date(movie.fecha) > new Date(validacion));

const director_name = favorite_movies.map(person => person.director);

const titels = favorite_movies.map(title_name => title_name.title);

const new_convinated_list = director_name.concat(titels);

const propagation_list = [...director_name, ...titels];












