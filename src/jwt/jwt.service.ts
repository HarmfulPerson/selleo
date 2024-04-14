import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(user: User): Promise<{ token: string }> {
    const payload = { email: user.email, sub: user.uid };
    return { token: this.jwtService.sign(payload) };
  }

  getJwtSecret(): string {
    return process.env.JWT_SECRET;
  }
}
