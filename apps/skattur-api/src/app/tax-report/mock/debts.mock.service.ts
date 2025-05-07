import { Injectable } from '@nestjs/common';
import { DebtsDto } from '../dto/debts';

@Injectable()
export class DebtsMockService {
  getDebts(): DebtsDto {
    return {
      id: '00000000-0000-0000-0000-000000000000',
      taxReportId: '00000000-0000-0000-0000-000000000000',
      realEstateCharges: {
        yearOfPurchase: 2021,
        destination: 'Bláfjallagata 12',
        lender: 'Íslandsbanki hf.',
        lenderSsn: '491008-0160',
        loanNumber: '56783900123',
        loanDate: '2021-06-15',
        loanTotalNumberOfYears: 30,
        totalPaymentAmountOfYear: 2280000,
        totalPaymentOfNominalValue: 1360000,
        interestChargesAmount: 920000,
        remainingDebtsAmount: 28540000,
      },
      otherDebts: {
        items: [
          {
            description: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
            interestCharges: 39200,
            remainingDebtsAmount: 217000,
          },
          {
            description: 'Aukalán',
            interestCharges: 86000,
            remainingDebtsAmount: 980000,
          },
          {
            description: '0142-26-732645 Varðan',
            interestCharges: 14500,
            remainingDebtsAmount: 62000,
          },
          {
            description: 'Kílómetragjald, Skatturinn',
            interestCharges: 0,
            remainingDebtsAmount: 2370,
          },
          {
            description: 'Þing- og sveitarsjóðsgjöld, Skatturinn',
            interestCharges: 224,
            remainingDebtsAmount: 0,
          },
        ],
      },
      createdAt: new Date().toDateString(),
    };
  }
}
