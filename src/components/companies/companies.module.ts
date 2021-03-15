import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompaniesService } from './companies.service';

import { Company, CompanySchema } from './company.schema';
import { CompaniesResolver } from './companies.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  providers: [CompaniesService, CompaniesResolver],
})
export class CompaniesModule {}
