import { 
    Controller, 
    Body, Param, 
    Delete, Get, Post, Put,
    ConflictException, NotFoundException, HttpCode
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMovieDTO, updateMovieDTO } from 'src/dto';

@Controller('movies')
export class MoviesController {

    //! inyección servicio movie
    // region[blue]
    constructor(private movieService: MoviesService){}
    // endregion

    @Get()
    findAll(){
        const allMovies = this.movieService.findAll()
        return allMovies
    }
    
    // movies/:id
    @Get(':id')
    async findOne(@Param('id') id:string){
        
        const movie = await this.movieService.findOne(id)
        
        if(!movie) throw new NotFoundException('Movie Not Found!')
        
        return movie
    }

    @Post()
    async create(@Body() body:createMovieDTO){
        try {
            const newMovie = await this.movieService.create(body)
            return newMovie
        } 
        catch (err) {
            if(err.code === 11000){ // err 11000 = error de mongoose gatillado
                throw new ConflictException('Movie already exist')
            } 
            throw err;
        }
    }
    
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        
        const movieToDelete = await this.movieService.delete(id)
        
        if(!movieToDelete) throw new NotFoundException('Movie Not Found!')
        
        return movieToDelete
    }
    
    @Put(':id')
    async update(@Param('id') id:string, @Body() body: updateMovieDTO){
        
        const movieToUpdate = await this.movieService.update(id, body)
        
        if(!movieToUpdate) throw new NotFoundException('Movie not found!')

        return movieToUpdate
    }
}
