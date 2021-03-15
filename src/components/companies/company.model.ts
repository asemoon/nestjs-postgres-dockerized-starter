import { Field, ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Presence as PresenceI,
  PhysicalStore as PhysicalStoreI,
  AcceptingCryptos as AcceptingCryptosI,
} from './companies.interface';

@ObjectType()
class Presence {
  @Field(() => Boolean)
  physical: boolean;

  @Field(() => Boolean)
  online: boolean;
}

@ObjectType()
class PhysicalStore {
  @Field(() => String)
  country: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  address: string;
}

@ObjectType()
class AcceptingCryptos {
  @Field(() => String)
  landingPage: string;

  @Field(() => [String])
  cryptos: string[];
}
@ObjectType()
export class Company {
  @Field(() => ID)
  id: string;

  @Field()
  companyName: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  hqCountry?: string;

  @Field(() => Presence)
  presence: PresenceI;

  @Field(() => [PhysicalStore])
  physicalStores?: PhysicalStoreI[];

  @Field(() => String)
  website: string;

  @Field(() => String)
  logoUrl: string;

  @Field(() => [String])
  categories: string[];

  @Field(() => [String])
  keywords: string[];

  @Field(() => AcceptingCryptos)
  acceptingCryptos: AcceptingCryptosI;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
