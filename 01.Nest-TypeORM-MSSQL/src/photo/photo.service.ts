import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from 'src/Entity/photo.entity';
import { FakeData } from '../fakedata/fakeuser.mock';
import { MailerProvider } from '@nest-modules/mailer';



@Injectable()
export class PhotoService {

    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>) { }
        @Inject('MailerProvider') private readonly mailerProvider: MailerProvider
        
    inFakeUsers = FakeData;

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async findByQuery(param): Promise<Photo[]> {
        let sql = 'select * from photo';
        if (param.search) {
            sql += " where concat(name,description,filename) LIKE '%" + param.search + "%' ";
        }
        return await this.photoRepository.query(sql);
    }

    async findById(id): Promise<Photo[]> {
        return await this.photoRepository.findByIds(id);
    }

    async FakeUser() {
        return this.photoRepository.save(this.inFakeUsers);
    }

    async insertPhoto(data) {
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

    deletePhoto(id) {
        this.photoRepository.remove(id);
    }

    //單筆上傳,限定只回傳originalname,mimetype,size,filename,path
    async uploadFile(upfile) {
        console.log("file Upload...OK");
        return {
            name: upfile.originalname,
            type: upfile.mimetype,
            size: upfile.size,
            filename: upfile.filename,
            path: upfile.path,
            FileFormat: upfile.originalname.split('.').pop() //取得副檔名
        };       
    }

    //多筆上傳,直接將上傳的資作Return
    async uploadFiles(files) {
        this.mailerProvider.sendMail({
            to: 'cody@brightideas.com.tw', // sender address
            //from: 'noreply@nestjs.com', // list of receivers
            subject: 'Testing Nest MailerModule ✔', // Subject line
           // text: 'welcome test02', // plaintext body
            html: '<b>welcome Html</b>' // HTML body content
          })
        console.log("file Upload...OK,AND Email");
        return files        
    }
}