import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true // añade props createdAt + updatedAt a class Movie automaticamente
})

export class Movie {
    @Prop({ 
        required: true,
        unique: true,
        trim: true 
    })
    title: string;
    
    @Prop({ 
        required: true,
        unique: true,
        trim: true 
    })
    nameCode: string;

    @Prop({ 
        type: [String], 
        required: true, 
        trim:true 
    })
    genre: string[];
    
    @Prop({ 
        required: false,
        trim: true 
    })
    releaseDate: Date;
    
    @Prop({ 
        required: true,
        trim: true,
        default:false
    })
    isNewlyReleased: boolean; // estreno o no
    
    @Prop({ 
        required: true,
        trim: true,
        default:true
    })
    isComingSoon: boolean; // proximamente en cines
    
    @Prop({ 
        required: true,
        trim: true 
    })
    posterOne: string;
    
    @Prop({ 
        trim: true
    })
    posterTwo: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie)