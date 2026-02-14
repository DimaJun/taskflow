import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

@Global()
@Module({
  providers: [UserService, PrismaService],
  exports: [UserService]
})
export class UserModule {}
