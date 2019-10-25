import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from '../model/create-project.dto';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private readonly model: Model<Project>) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    const res = new this.model(dto);

    return res.save();
  }

  async findAll(): Promise<Project[]> {
    return this.model.find().exec();
  }
}
