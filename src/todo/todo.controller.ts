import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Todo, TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('todo')
@UseGuards(AuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoService.create(createTodoDto);
  }
}
