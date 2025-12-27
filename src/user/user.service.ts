import { Injectable } from '@nestjs/common';
import { prisma } from '../lib/prisma';

@Injectable()
export class UserService {
  findAll = async () => {
    return await prisma.user.findMany();
  };

  create = async (data: { usr_email: string; usr_name: string }) => {
    return await prisma.user.create({ data });
  };
}
