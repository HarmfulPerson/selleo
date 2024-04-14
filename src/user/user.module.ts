import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtAuthModule } from 'src/jwt/jwt.module';
import { JwtAuthService } from 'src/jwt/jwt.service';
import { JwtMiddleware } from 'src/jwt/jwt.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtAuthModule],
  providers: [UserService, JwtAuthService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET });
  }
}
