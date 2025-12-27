import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponseHelper } from '../common/helpers/api-response.helper';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const users = await this.userService.findAll();

    return ApiResponseHelper.success('Users retrieved successfully', users);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: any) {
    const user = await this.userService.create(body);

    return ApiResponseHelper.success('User created successfully', user);
  }
}
