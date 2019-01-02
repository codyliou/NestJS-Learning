import { Module, MulterModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from '../Entity/photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Photo]),  //forFeature 是用於存取相關的entity。
    MulterModule.register({ dest: './upload', }), //MulterModule 是用於上傳檔案及dest目錄。
    ],
    providers: [PhotoService], // import PhotoService 及pipe
    controllers: [PhotoController]
})  // import PhotoController
export class PhotoModule {
}
