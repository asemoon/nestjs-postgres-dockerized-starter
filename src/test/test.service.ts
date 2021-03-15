import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../model/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test) private readonly repo: Repository<Test>,
  ) {}

  public getAll() {
    return this.repo.find();
  }
}
