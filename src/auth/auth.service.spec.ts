import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('test_token'), // Mockujemy metodę signAsync
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('powinien być zdefiniowany', () => {
    expect(service).toBeDefined();
  });

  it('powinien zwrócić access_token dla poprawnych danych', async () => {
    const result = await service.login('test', 'password');

    expect(result).toEqual({ access_token: 'test_token' });
    expect(jwtService.signAsync).toHaveBeenCalled();
  });

  it('powinien wyrzucić UnauthorizedException dla błędnych danych', async () => {
    await expect(service.login('zly_user', 'zlo_haslo')).rejects.toThrow(
      UnauthorizedException,
    );
  });
});
