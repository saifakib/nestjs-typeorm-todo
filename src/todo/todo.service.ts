// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { User } from '../user/user.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const { userId, title } = createTodoDto;

      // Find the user by ID
      const user = await this.userRepository.findOne({ where: {id: userId }});

      if (!user) {
        throw new Error('User not found');
      }

      // Create a new Todo and associate it with the user
      const todo = new Todo();
      todo.title = title;
      todo.user = user;

      return await this.todoRepository.save(todo);
    } catch (err) {
      throw err;
    }
    
  }

  async findAll(page: number, limit: number): Promise<Todo[]> {
    try {
      const skip = (page - 1) * limit;
  
      const todo = await this.todoRepository.find({
        relations: {
          user: true,
        },
        skip, 
        take: limit
      });
      
      return todo;
    } catch(err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<Todo> {
    try {
      const todo = await this.todoRepository.findOne({
        where: { id: id},
        relations: {
          user: true,
        },
      });
      if (!todo) {
        throw new Error('Todo not found');
      }
      return todo;
    } catch(err) {
      throw err;
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    try {
      const todo = await this.todoRepository.preload({
        id,
        ...updateTodoDto,
      });
    
      if (!todo) {
        throw new Error('Todo not found');
      }

      return await this.todoRepository.save(todo);
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const todo = await this.findOne(id);
      if (!todo) {
        throw new Error('Todo not found');
      }
      await this.todoRepository.remove(todo);
    } catch (err) {
      throw new Error()
    }
    
  }
}
