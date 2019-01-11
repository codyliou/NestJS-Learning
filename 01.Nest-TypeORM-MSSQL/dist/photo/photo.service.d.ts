import { Repository } from 'typeorm';
import { Photo } from 'src/Entity/photo.entity';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: Repository<Photo>);
    inFakeUsers: {
        id: string;
        name: string;
        description: string;
        filename: string;
        views: number;
        isPublished: boolean;
    }[];
    findAll(): Promise<Photo[]>;
    findByQuery(param: any): Promise<Photo[]>;
    findById(id: any): Promise<Photo[]>;
    FakeUser(): Promise<{
        id: string;
        name: string;
        description: string;
        filename: string;
        views: number;
        isPublished: boolean;
    }[]>;
    insertPhoto(data: any): Promise<void>;
    updatePhoto(data: any): Promise<void>;
    deletePhoto(id: any): void;
    uploadFile(upfile: any): Promise<{
        name: any;
        type: any;
        size: any;
        filename: any;
        path: any;
        FileFormat: any;
    }>;
    uploadFiles(files: any): Promise<any>;
}
