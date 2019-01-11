import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from "./photo/photo.module";
import { MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [TypeOrmModule.forRoot(),PhotoModule,MailerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
