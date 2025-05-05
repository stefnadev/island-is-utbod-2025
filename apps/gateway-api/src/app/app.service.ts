import { Injectable } from '@nestjs/common';
import { Recipe } from './models/recipe.model';

@Injectable()
export class AppService {
  getData(): Recipe {
    return {
      creationDate: new Date(),
      description: 'test',
      id: '1',
      ingredients: ['test'],
      title: 'test',
    };
  }
}
