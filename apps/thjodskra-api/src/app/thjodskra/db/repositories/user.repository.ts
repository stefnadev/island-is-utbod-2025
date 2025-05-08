import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private user: typeof User,
  ) {}

  async findBySsn(ssn: string): Promise<User | null> {
    return this.user.findOne({
      where: {
        ssn,
      },
    });
  }
}
