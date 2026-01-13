import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    //TODO::: Weryfikacja użytkownika (np. sprawdzenie w bazie danych)
    if (username === 'test' && password === 'password') {
      const payload = { username, sub: 1 }; // sub to standardowe pole JWT dla ID użytkownika
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }

    throw new UnauthorizedException('Nieprawidłowe dane logowania');
  }
}
