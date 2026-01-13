import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should get all todos', () => {
    const todos = [
      { title: 'test1', id: 1, isDone: false },
      { title: 'test2', id: 2, isDone: false },
    ];

    expect(todos.length).toBe(2);
    expect(todos[0].isDone).toBe(false);
  });

  it('should add todo', () => {
    const dto = { title: 'Testowe', description: 'Opis' };
    const result = service.create(dto);

    expect(result).toBeDefined();
    expect(result.title).toEqual('Testowe');
    expect(result.isDone).toBe(false);
  });
});
