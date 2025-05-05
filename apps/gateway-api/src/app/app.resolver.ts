import { Query } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => Recipe)
  getData() {
    return this.appService.getData();
  }
}
