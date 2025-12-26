import { HttpStatus } from '@nestjs/common';
import { ApiResponse } from '../interfaces/api-response.interface';

export class ApiResponseHelper {
  static success<T>(
    message: string,
    data?: T,
    meta?: Record<string, any>,
  ): ApiResponse<T> {
    return {
      success: true,
      message,
      data,
      meta,
    };
  }

  static error(message: string, errors?: any): ApiResponse {
    return {
      success: false,
      message,
      errors,
    };
  }
}
