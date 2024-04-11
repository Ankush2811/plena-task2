/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

@Controller('token-info')
export class TokenInfoController {
  @Get(':key')
  getTokenInfo(@Param('key') key: string) {
    const mockTokenInfo = {
      token: 'mock-token',
      expiration: '2024-12-31',
      userId: '123456',
    };
    if (isValidKey(key)) {
      return mockTokenInfo;
    } else {
      throw new HttpException(
        'Invalid or expired key',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

function isValidKey(key: string): boolean {
 
  return key === 'valid_key';
}
