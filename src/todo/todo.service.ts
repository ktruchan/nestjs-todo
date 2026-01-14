import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class Todo {
  id!: number;
  title!: string;
  description?: string;
  isDone!: boolean;
}

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  private todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo?.id) {
      throw new NotFoundException('Nie znaleziono zadania');
    }
    return this.todoRepository.findOneBy({ id });
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    const newTodo = this.todoRepository.create(dto);
    return this.todoRepository.save(newTodo);
  }
}
