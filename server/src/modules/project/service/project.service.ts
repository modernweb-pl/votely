import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from '../model/create-project.dto';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private readonly model: Model<Project>) {}

  async create(userId: string, dto: CreateProjectDto): Promise<Project> {
    const filter = { userId };
    const doc = { userId, ...dto };

    return this.model.findOneAndUpdate(filter, doc, { new: true, upsert: true });
  }

  async find(userId: string): Promise<Project> {
    return this.model.findOne({ userId }).lean();
  }
}
