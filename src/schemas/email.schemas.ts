import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Email extends Document {
    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({required: true})
    to: string;

    @Prop({required: true})
    subject: string;

    @Prop({required: true})
    businessId: string;

    @Prop()
    text?: string;

    @Prop()
    html?: string;
}
export const EmailSchema = SchemaFactory.createForClass(Email);
