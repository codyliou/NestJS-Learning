import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from 'src/Entity/photo.entity';
import { FakeData } from '../fakedata/fakeuser.mock';


@Injectable()
export class PhotoService {

    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>
    ) { }

    inFakeUsers = FakeData;

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async findByQuery(param): Promise<Photo[]> {
        let sql = 'select * from photo';
        if (param.search){
        sql += " where concat(name,description,filename) LIKE '%" + param.search + "%' ";}
        return await this.photoRepository.query(sql);
    }

    async findById(id): Promise<Photo[]> {
        return await this.photoRepository.findByIds(id);
    }

    async FakeUser() {
        return this.photoRepository.save(this.inFakeUsers);
    }

    async insertPhoto(data){
        const photo = await new Photo();
        photo.name = data.name;
        photo.description = data.description;
        photo.filename = data.filename;
        photo.views = data.views;
        photo.isPublished = data.isPublished;
        await this.photoRepository.save(photo);
    }

    async updatePhoto(data) {
        const updatePhoto = await this.photoRepository.findOne(data.id);
        updatePhoto.name = data.name;
        updatePhoto.description = data.description;
        updatePhoto.filename = data.filename;
        updatePhoto.isPublished = data.isPublished;
        updatePhoto.views = data.views;
        await this.photoRepository.save(updatePhoto);
        }

    deletePhoto(id){
        this.photoRepository.remove(id);
    }
}