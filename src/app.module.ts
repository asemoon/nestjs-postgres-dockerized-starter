import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TestModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
