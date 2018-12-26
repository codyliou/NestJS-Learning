import { IsString, IsInt, Length } from 'class-validator';

export class CreatePhotoDto {
    id(id: any): any {
        throw new Error("Method not implemented.");
    }
    @IsString()
    @Length(3, 10, { message: '長度限制於3~10個字元', })
    readonly name: string;

    @IsString()
    readonly description?: string;
    @IsString()
    readonly filename?: string;
    @IsInt()
    readonly views?: number;
    @IsInt()
    readonly isPublished?: boolean;
}