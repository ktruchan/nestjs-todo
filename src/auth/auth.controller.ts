import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public login(
    @Body() loginDto: Record<string, string>,
  ): Promise<{ access_token: string }> {
    return this.authService.login(loginDto.username, loginDto.password);
  }
}
