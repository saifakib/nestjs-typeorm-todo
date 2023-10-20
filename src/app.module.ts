import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, TodoModule],
})
export class AppModule {}
