import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { projectModel } from './model/project.schema';
import { ProjectController } from './project.controller';
import { ProjectService } from './service/project.service';

@Module({
  imports: [MongooseModule.forFeature([projectModel])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
