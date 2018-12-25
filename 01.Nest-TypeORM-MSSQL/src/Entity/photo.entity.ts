import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn("uuid") id: string; //將id設定為uuid格式

  @Column({ length: 500 ,nullable:true})  //nullable:true  代表該欄位允許Null
  name: string ;  

  @Column('text',{nullable:true}) description: string ;

  @Column({nullable:true}) filename: string ;

  @Column('int',{nullable:true}) views: number ;

  @Column() isPublished: boolean ;
}