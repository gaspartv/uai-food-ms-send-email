import { Module } from '@nestjs/common';
import { AppConsumer } from './app.consumer';
import {MongooseModule} from "@nestjs/mongoose";
import {env} from "./configs/env";
import { Email, EmailSchema } from "./schemas/email.schemas";
import { AppRepository } from "./app.repository";

@Module({
  imports: [
    MongooseModule.forRoot(env.DATABASE_URL),
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }])
  ],
  providers: [AppConsumer, AppRepository],
})
export class AppModule {}
