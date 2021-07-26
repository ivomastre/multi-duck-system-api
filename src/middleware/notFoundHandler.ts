import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (request, response, _) => {
  return response.status(404).json({
    status: 'error',
    message: `Could not found [${request.method}] ${request.path}`,
  });
};

export default notFoundHandler;
