/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';

import config from '../config';


import { TErrorSources } from '../interface/error.interface';
import handleZodError from '../errors/handleZodErrors';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = 'Something went wrong';

  let error: TErrorSources = [
    { path: '', message: 'Something went wrong!' },
  ];

  //checking errors
  //for zod
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.errorSources;
  } 

  res.status(statusCode).json({
    success: false,
    message,
    error,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
    // error: error,
  });
};
export default errorHandler;
