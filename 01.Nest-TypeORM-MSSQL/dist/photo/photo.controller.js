"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const photo_pipes_1 = require("./photo.pipes");
const photo_otd_1 = require("../DTO/photo.otd");
let PhotoController = class PhotoController {
    constructor(PhotoService) {
        this.PhotoService = PhotoService;
    }
    findAll(query) {
        console.log(query.log);
        return this.PhotoService.findByQuery(query);
    }
    Gets(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(user.id);
            return this.PhotoService.findById(user.id);
        });
    }
    fakeuser() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Create FakeUser");
            return this.PhotoService.FakeUser();
        });
    }
    savePhoto(photo) {
        if (photo.id) {
            this.PhotoService.updatePhoto(photo);
            return `photo id: #${photo.id} updatePhoto OK`;
        }
        else {
            this.PhotoService.insertPhoto(photo);
            return 'insertPhoto OK';
        }
    }
    deletePhone(id) {
        this.PhotoService.deletePhoto(id);
        return `deletePhoto OK`;
    }
    UploadedFile(upfile) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(upfile);
            return this.PhotoService.uploadFile(upfile);
        });
    }
    uploadFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(files);
            return this.PhotoService.uploadFiles(files);
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "findAll", null);
__decorate([
    common_1.Get('user/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "Gets", null);
__decorate([
    common_1.Get('fakeuser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "fakeuser", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(photo_pipes_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photo_otd_1.CreatePhotoDto]),
    __metadata("design:returntype", void 0)
], PhotoController.prototype, "savePhoto", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhotoController.prototype, "deletePhone", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(common_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "UploadedFile", null);
__decorate([
    common_1.Post('uploads'),
    common_1.UseInterceptors(common_1.FileFieldsInterceptor([
        { name: 'files', maxCount: 3 },
    ])),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "uploadFiles", null);
PhotoController = __decorate([
    common_1.Controller('photo'),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], PhotoController);
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.controller.js.map