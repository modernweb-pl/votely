import { Body, Controller, Get, Post, Session, ValidationPipe } from '@nestjs/common';
import { CreateProjectDto } from './model/create-project.dto';
import { Project } from './model/project';
import { ProjectService } from './service/project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  async findAll(@Session() session: Express.Session): Promise<Project> {
    return this.service.find(session.id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) dto: CreateProjectDto,
    @Session() session: Express.Session,
  ) {
    return this.service.create(session.id, dto);
  }
}
