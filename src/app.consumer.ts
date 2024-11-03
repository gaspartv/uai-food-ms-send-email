import { Injectable } from '@nestjs/common';
import { AppRepository } from "./app.repository";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";

class PayloadEmail {
  to: string;
  subject: string;
  businessId: string;
  text?: string;
  html?: string;
}

@Injectable()
export class AppConsumer {
  constructor(private  readonly repository: AppRepository) {}

  private ack(context: RmqContext): void {
    context.getChannelRef().ack(context.getMessage());
  }

  @MessagePattern("email")
    async receiveEmail(@Ctx() context: RmqContext,@Payload() payload: PayloadEmail) {
    console.log("consumer", payload);
    this.ack(context);
  }
}
