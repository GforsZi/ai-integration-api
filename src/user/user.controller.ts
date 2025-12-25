import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  @Get()
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getData(): string {
    return 'hallo';
  }
  @Get('/:id')
  getDataById(@Param('id') id: string): string {
    return `you search data by id: ${id}`;
  }

  @Post()
  @UseInterceptors(FileInterceptor(''))
  storeData(@Body('name') data: any): string {
    console.log(data);

    return `you store "${data}" as data`;
  }
}
