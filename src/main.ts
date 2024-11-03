import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {env} from "./configs/env";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [env.RABBITMQ_URL],
      queue: env.RABBITMQ_RECEIVE,
      queueOptions: {
        durable: true
      },
    },
  });

  await app.listen();
}
bootstrap().then(r => r);
