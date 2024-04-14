import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthModule } from './jwt/jwt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'selleo',
      synchronize: true,
      entities: [User],
    }),
    UserModule,
    JwtAuthModule,
  ],
})
export class AppModule {}
