import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['teste', 'youuu!!'];

  getAllTasks() {
    return this.tasks;
  }
}
