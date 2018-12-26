import { Get, Post, Controller, Param, Body, Delete, Query ,Header, UsePipes} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from '../Entity/photo.entity';
import { ValidationPipe } from './photo.pipes';  //New import pipes 
import { CreatePhotoDto } from '../DTO/photo.otd' //New import DTO

@Controller('photo')
export class PhotoController {
    //constructor取得PhotoService
    constructor(private readonly PhotoService: PhotoService) { }

    @Get()
    @Header('Content-Type', 'application/json')
    findAll(@Query() query):Promise<Photo[]>{
        console.log(query.log );
        return this.PhotoService.findByQuery(query);
    }

    /*Get() {
        return this.PhotoService.findAll();
    }*/

    //取得單筆資料
    @Get('user/:id')
    async Gets(@Param() user) {
        console.log(user.id);
        return this.PhotoService.findById(user.id);
    }

    //解發並產生fakeuser資料
    @Get('fakeuser')
    async fakeuser() {
        console.log("Create FakeUser");
        return this.PhotoService.FakeUser();
    }

    //範例裡新增及變更都用Post，以id欄位作為識別
    @Post()
    @UsePipes(ValidationPipe)   //增加UsePipes
    savePhoto(@Body() photo: CreatePhotoDto) {        
        if (photo.id) {
            this.PhotoService.updatePhoto(photo);                        
            return `photo id: #${photo.id} updatePhoto OK`;
        } else {
            this.PhotoService.insertPhoto(photo);            
            return 'insertPhoto OK';
        }
    }
    //刪除資料
    @Delete()
    deletePhone(@Body () id: string ){
        this.PhotoService.deletePhoto(id);        
        return `deletePhoto OK`;
    }
    
}