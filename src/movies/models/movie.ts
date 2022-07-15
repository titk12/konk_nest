import { faker } from '@faker-js/faker';
import { IMovie, Genre, Country } from '../types/movies';

const allGenres: Genre[] = [Genre.DRAMA, Genre.ACTION, Genre.FANTASY];
const allCountries: Country[] = [Country.US, Country.UK, Country.FRANCE];

export class Movie implements IMovie {
  public director: IMovie['director'];
  public genres: IMovie['genres'];
  public title: IMovie['title'];
  public country: IMovie['country'];
  public duration: IMovie['duration'];
  public rating: IMovie['rating'];

  constructor({ director, genres, title, country, duration, rating }: IMovie) {
    this.director = director;
    this.genres = genres;
    this.title = title;
    this.country = country;
    this.duration = duration;
    this.rating = rating;
  }

  static create({
    director,
    genres,
    title,
    country,
    duration,
    rating,
  }: {
    director?: IMovie['director'];
    genres?: IMovie['genres'];
    title?: IMovie['title'];
    country?: IMovie['country'];
    duration?: IMovie['duration'];
    rating?: IMovie['rating'];
  }) {
    return new this({
      director: director || this.RandomDirectorName,
      genres: genres || this.RandomGenres,
      title: title || this.RandomTitle,
      country: country || this.RandomCountry,
      duration: duration || this.RandomDuration,
      rating: rating || this.RandomRating,
    });
  }

  private static get RandomDirectorName(): IMovie['director'] {
    return faker.name.findName();
  }

  private static get RandomTitle(): IMovie['title'] {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
  }

  private static get RandomRating(): IMovie['rating'] {
    return faker.datatype.float({ min: 1, max: 10 });
  }

  private static get RandomGenres(): IMovie['genres'] {
    return faker.helpers.arrayElements(allGenres);
  }

  private static get RandomCountry(): IMovie['country'] {
    return faker.helpers.arrayElement(allCountries);
  }

  private static get RandomDuration(): IMovie['duration'] {
    return faker.datatype.number({
      min: 30,
      max: 200,
    });
  }
}
