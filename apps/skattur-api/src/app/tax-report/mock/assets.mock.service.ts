import { Injectable } from '@nestjs/common';
import { AssetsDto } from '../dto/assets';

@Injectable()
export class AssetMockService {
  getAssets(): AssetsDto {
    return {
      id: '00000000-0000-0000-0000-000000000000',
      taxReportId: '00000000-0000-0000-0000-000000000000',
      realEstates: {
        items: [
          {
            number: '210-9876',
            address: 'Bláfjallagata 12',
            appraisal: 52000000,
          },
        ],
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
          },
        ],
      },
      createdAt: new Date().toDateString(),
    };
  }
}
