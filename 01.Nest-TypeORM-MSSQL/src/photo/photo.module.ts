import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from '../Entity/photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Photo])],//forFeature 是用於存取相關的entity。
    providers: [PhotoService], // import PhotoService
    controllers: [PhotoController]
})  // import PhotoController
export class PhotoModule {}
