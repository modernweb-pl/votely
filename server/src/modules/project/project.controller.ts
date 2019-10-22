import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateProjectDto } from './model/create-project.dto';
import { Project } from './model/project';
import { ProjectService } from './service/project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {
  }

  @Get()
  async getAll(): Promise<Project[]> {
    return this.projectService.getAll();
  }

  @Post()
  async create(@Body(new ValidationPipe()) dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }
}
