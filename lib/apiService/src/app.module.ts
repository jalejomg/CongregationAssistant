import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishersModule } from './publishers/publishers.module';

@Module({
  imports: [PublishersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
