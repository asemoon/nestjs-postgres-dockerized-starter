import { Resolver, Query } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './company.model';

@Resolver()
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}

  @Query(() => [Company])
  async companies() {
    return this.companiesService.findAll();
  }
}
