import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

// o trabalho do controller é receber uma requisição, delegar o
// que for preciso e retornar a resposta
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // o decorador @Get() indica que quando houver uma requisição
  // do tipo GET o método será chamado
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
