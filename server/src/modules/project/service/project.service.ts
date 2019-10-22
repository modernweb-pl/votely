import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../model/create-project.dto';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {
  private readonly projects: Project[] = [];

  create(project: CreateProjectDto) {
    const res = {
      id: this.projects.length + 1,
      ...project,
    };

    this.projects.push(res);

    return res;
  }

  getAll(): Project[] {
    return this.projects;
  }
}
