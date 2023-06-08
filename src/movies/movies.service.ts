import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Movie } from 'src/schemas/movie.schema';
import { createMovieDTO, updateMovieDTO } from 'src/dto';

@Injectable()
export class MoviesService {
    
    //! inyección model movie
    // region[blue]
    constructor(
        @InjectModel(Movie.name) private movieModel: Model<Movie>
    ){}
    // endregion
    
    //! uso del model inyectado a traves de metodos
    async findAll(): Promise<Movie[]>{
        return this.movieModel.find()
    }

    async create(movie:createMovieDTO){
        // aqui se crea
        const newMovie = new this.movieModel(movie)

        // aqui se guarda
        await newMovie.save()

        return newMovie
    }

    async findOne(id:string){

        return this.movieModel.findById(id)
    }

    async delete(id:string){
        return this.movieModel.findByIdAndDelete(id)
    }
    
    async update(id:string, movie:updateMovieDTO){
        return this.movieModel.findByIdAndUpdate(id,movie,{new:true})
        // x default retorna el "dato viejo", con new: true retorna el
        // objeto ya actualizado
    }
    
}

