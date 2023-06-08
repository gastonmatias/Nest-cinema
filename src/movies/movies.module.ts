import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from 'src/schemas/movie.schema';

@Module({
  
  //? esta importación asocia el schema que trabajará
  //? este modulo en especifico
  imports: [
    MongooseModule.forFeature([{
      name: Movie.name,
      schema: MovieSchema
    }])
  ],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
