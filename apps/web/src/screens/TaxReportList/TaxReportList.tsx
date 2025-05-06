import { TaxReportListResponse } from '@/grapql/graphql';

interface TaxRepostListProps {
  taxReportList: TaxReportListResponse;
}

export const TaxReportList = ({ taxReportList }: TaxRepostListProps) => {
  return (
    <div>
      <h1>Skattframtöl</h1>
      <div>
        {taxReportList.items.map((item) => {
          return (
            <div key={item.year}>
              {item.status} {item.year}
            </div>
          );
        })}
      </div>
    </div>
  );
};
