//? DTO: Data Transfer Object

//! ojo: Decoradores a importar con MAYUSCULA INICIAL
import { IsArray, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class createMovieDTO {
    @IsString()
    @IsNotEmpty()
    title: string
    
    @IsString()
    @IsNotEmpty()
    nameCode: string

    @IsArray()
    genre: string[]
    
    @IsOptional()
    @IsString() // nota: el @IsDate se buguea!
    releaseDate?: Date
    
    @IsString()
    @IsNotEmpty()
    posterOne: string
    
    @IsString()
    @IsOptional()
    posterTwo?: string
}