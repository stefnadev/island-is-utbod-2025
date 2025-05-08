import { Injectable } from '@nestjs/common';
import { UserRepository } from './db/repositories/user.repository';
import { UserDto } from './dto/user';

@Injectable()
export class ThjodskraService {
  constructor(private userRepository: UserRepository) {}

  async getUserBySsn(ssn: string): Promise<UserDto | null> {
    const user = await this.userRepository.findBySsn(ssn);
    if (!user) {
      return null;
    }
    return UserDto.getFromModel(user);
  }
}
