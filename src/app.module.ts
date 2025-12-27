import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AiModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
