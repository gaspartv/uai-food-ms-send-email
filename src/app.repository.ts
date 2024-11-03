import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Email } from "./schemas/email.schemas";
import { Model } from "mongoose";

@Injectable()
export class AppRepository {
  constructor(@InjectModel(Email.name) private emailModel: Model<Email>) {
  }

  async create(emailDto: any) {
    const createEmail = new this.emailModel(emailDto)
    return createEmail.save()
  }
}