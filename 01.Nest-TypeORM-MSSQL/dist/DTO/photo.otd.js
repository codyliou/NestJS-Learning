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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class CreatePhotoDto {
    id(id) {
        throw new Error("Method not implemented.");
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(3, 10, { message: '長度限制於3~10個字元', }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "filename", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreatePhotoDto.prototype, "views", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Boolean)
], CreatePhotoDto.prototype, "isPublished", void 0);
exports.CreatePhotoDto = CreatePhotoDto;
//# sourceMappingURL=photo.otd.js.map