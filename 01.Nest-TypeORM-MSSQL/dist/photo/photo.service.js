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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const photo_entity_1 = require("src/Entity/photo.entity");
const fakeuser_mock_1 = require("../fakedata/fakeuser.mock");
let PhotoService = class PhotoService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
        this.inFakeUsers = fakeuser_mock_1.FakeData;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photoRepository.find();
        });
    }
    findByQuery(param) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = 'select * from photo';
            if (param.search) {
                sql += " where concat(name,description,filename) LIKE '%" + param.search + "%' ";
            }
            return yield this.photoRepository.query(sql);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photoRepository.findByIds(id);
        });
    }
    FakeUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.photoRepository.save(this.inFakeUsers);
        });
    }
    insertPhoto(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const photo = yield new photo_entity_1.Photo();
            photo.name = data.name;
            photo.description = data.description;
            photo.filename = data.filename;
            photo.views = data.views;
            photo.isPublished = data.isPublished;
            yield this.photoRepository.save(photo);
        });
    }
    updatePhoto(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatePhoto = yield this.photoRepository.findOne(data.id);
            updatePhoto.name = data.name;
            updatePhoto.description = data.description;
            updatePhoto.filename = data.filename;
            updatePhoto.isPublished = data.isPublished;
            updatePhoto.views = data.views;
            yield this.photoRepository.save(updatePhoto);
        });
    }
    deletePhoto(id) {
        this.photoRepository.remove(id);
    }
    uploadFile(upfile) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("file Upload...OK");
            return {
                name: upfile.originalname,
                type: upfile.mimetype,
                size: upfile.size,
                filename: upfile.filename,
                path: upfile.path,
                FileFormat: upfile.originalname.split('.').pop()
            };
        });
    }
    uploadFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("file Upload...OK");
            return files;
        });
    }
};
PhotoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(photo_entity_1.Photo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map