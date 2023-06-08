//? DTO: Data Transfer Object

//? DTO: Data Transfer Object

//! ojo: Decoradores a importar con MAYUSCULA INICIAL
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class updateMovieDTO {
    @IsString()
    @IsOptional()
    title?: string
    
    @IsString()
    @IsOptional()
    nameCode?: string
    
    @IsOptional()
    @IsString()//@IsDate()
    releaseDate?: Date
    
    @IsString()
    @IsOptional()
    posterOne?: string
    
    @IsString()
    @IsOptional()
    posterTwo?: string
    
    @IsBoolean()
    @IsOptional()
    isNewlyReleased?: Boolean
    
    @IsBoolean()
    @IsOptional()
    isComingSoon?: boolean
}