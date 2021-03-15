import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import {
  Presence,
  PhysicalStore,
  AcceptingCryptos,
} from './companies.interface';

export type CompanyDocument = Company & Document;

@Schema({ collection: 'companies' })
export class Company {
  @Prop()
  companyName: string;

  @Prop()
  description: string;

  @Prop()
  hqCountry?: string;

  @Prop({ type: { physical: Boolean, online: Boolean } })
  presence: Presence;

  @Prop({ type: [{ country: String, state: String, address: String }] })
  physicalStores?: PhysicalStore[];

  @Prop()
  website: string;

  @Prop()
  logoUrl: string;

  @Prop()
  categories: string[];

  @Prop()
  keywords: string[];

  @Prop({ type: { landingPage: String, cryptos: [String] } })
  acceptingCryptos: AcceptingCryptos;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
