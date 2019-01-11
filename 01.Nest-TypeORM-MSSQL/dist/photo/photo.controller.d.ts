import { PhotoService } from './photo.service';
import { Photo } from '../Entity/photo.entity';
import { CreatePhotoDto } from '../DTO/photo.otd';
export declare class PhotoController {
    private readonly PhotoService;
    constructor(PhotoService: PhotoService);
    findAll(query: any): Promise<Photo[]>;
    Gets(user: any): Promise<Photo[]>;
    fakeuser(): Promise<{
        id: string;
        name: string;
        description: string;
        filename: string;
        views: number;
        isPublished: boolean;
    }[]>;
    savePhoto(photo: CreatePhotoDto): string;
    deletePhone(id: string): string;
    UploadedFile(upfile: any): Promise<{
        name: any;
        type: any;
        size: any;
        filename: any;
        path: any;
        FileFormat: any;
    }>;
    uploadFiles(files: any): Promise<any>;
}
