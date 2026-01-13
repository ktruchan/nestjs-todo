import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

export class Todo {
  id!: number;
  title!: string;
  description?: string;
  isDone!: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  public findAll(): Todo[] {
    return this.todos;
  }

  public create(dto: CreateTodoDto): Todo {
    const newTodo = {
      id: this.todos.length + 1,
      ...dto,
      isDone: false,
    };
    this.todos.push(newTodo);

    return newTodo;
  }
}
