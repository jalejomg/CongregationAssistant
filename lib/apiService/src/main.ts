import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  process.send('ready');

  process.on('message', (chunk: Buffer) => {
    const data = chunk.toString();
    
    if(data === 'SIGINT') {
      process.exit(0);
    }
  });
}
bootstrap();
