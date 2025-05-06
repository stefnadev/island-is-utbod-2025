import { Injectable } from '@nestjs/common';
import { TaxReportsBasicCollection } from './dto/tax-report-basic';
import { TaxReportDto, TaxReportStatus } from './dto/tax-report';
import { IncomesDto } from './dto/incomes';
import { AssetsDto } from './dto/assets';
import { DebtsDto } from './dto/debts';

@Injectable()
export class TaxReportService {
  GetTaxReports(): TaxReportsBasicCollection {
    return {
      items: [
        {
          id: 'e42e927b-389b-466b-a393-c6fc13557fb3',
          applicationId: '533f6612-c195-4ce0-aa87-5503ab7f33b0',
          year: 2025,
          status: TaxReportStatus.DRAFT,
        },
        {
          id: 'afed3cd8-18b7-42bc-9d0a-aafa5a9c123f',
          applicationId: '1b8944d3-3e5a-46a3-b490-b1385c778633',
          year: 2024,
          status: TaxReportStatus.SUBMITTED,
        },
        {
          id: 'f559ea87-4bc8-48be-95bf-10031832f870',
          applicationId: '102555c9-1f8f-45d6-9941-b4a0f2c3a7f2',
          year: 2023,
          status: TaxReportStatus.SUBMITTED,
        },
        {
          id: '0ad24a1b-29d6-4060-8682-aa62300600db',
          applicationId: '766da527-f283-40f0-91fa-431833bbb020',
          year: 2023,
          status: TaxReportStatus.DELETED,
        }
      ]
    }
  }

  GetTaxReport(id: string): TaxReportDto {
    return {
      id: id,
      applicationId: '4cd5cd48-f1ca-4a28-b2dd-bc0544ee4203',
      incomes: this.GetIncomes(id),
      assets: this.GetAssets(id),
      debts: this.GetDebts(id),
      year: 2025,
      status: TaxReportStatus.DRAFT,
      createdOn: '2025-05-05 00:00:00',
      modifiedOn: '2025-05-05 00:00:00',
    }
  }

  GetIncomes(taxReportId: string): IncomesDto {
    return {
      id: '957b1530-467f-45ad-966b-cccd139b41b4',
      taxReportId: taxReportId,
      salaries: {
        items: [
          {
            description: 'Norðurljós Software ehf',
            amount: 9360000,
          },
          {
            description: 'Mús & Merki ehf.',
            amount: 900000,
          }
        ]
      },
      benefits: {
        items: [
          {
            description: 'Dagpeningar',
            amount: 120000,
          }
        ]
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
                }
              ]
            }
          }
        ]
      },
      createdOn: '2025-05-05 00:00:00',
      modifiedOn: '2025-05-05 00:00:00',
    }
  }

  GetAssets(taxReportId: string): AssetsDto {
    return {     
      id: '4735071d-bfb7-40c0-80f7-538b0994b1dc',
      taxReportId: taxReportId,
      realEstates: {
        items: [
          {
            number: '210-9876',
            address: 'Bláfjallagata 12',
            appraisal: 52000000,
          }
        ]
      },
      vehicles: {
        items: [
          {
            plateNumber: 'KB-521',
            yearOfPurchase: 2021,
            purchasePrice: 3100000,
          },
          {
            plateNumber: 'JU-329',
            yearOfPurchase: 2012,
            purchasePrice: 430000,
          }
        ]
      },
      createdOn: '2025-05-05 00:00:00',
      modifiedOn: '2025-05-05 00:00:00',
    }
  }

  GetDebts(taxReportId: string): DebtsDto {
    return {
      id: '8d357de3-05fa-4565-ae58-9601769e9e65',
      taxReportId: taxReportId,
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
          }
        ]
      },
      createdOn: '2025-05-05 00:00:00',
      modifiedOn: '2025-05-05 00:00:00',
    }
  }
}
