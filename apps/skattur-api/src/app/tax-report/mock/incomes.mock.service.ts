import { Injectable } from '@nestjs/common';
import { IncomesDto } from '../dto/incomes';

@Injectable()
export class IncomesMockService {
  getIncomes(): IncomesDto {
    return {
      id: '00000000-0000-0000-0000-000000000000',
      taxReportId: '00000000-0000-0000-0000-000000000000',
      salaries: {
        items: [
          {
            description: 'Norðurljós Software ehf',
            amount: 9360000,
          },
          {
            description: 'Mús & Merki ehf.',
            amount: 900000,
          },
        ],
      },
      benefits: {
        items: [
          {
            description: 'Dagpeningar',
            amount: 120000,
          },
        ],
      },
      compensations: {
        items: [
          {
            company: 'Norðurljós Software ehf',
            compensations: {
              items: [
                {
                  description: 'Íþróttastyrkur',
                  amount: 75000,
                },
                {
                  description: 'Stafsmenntunarstyrkur',
                  amount: 130000,
                },
              ],
            },
          },
        ],
      },
      createdAt: new Date().toDateString(),
    };
  }
}
