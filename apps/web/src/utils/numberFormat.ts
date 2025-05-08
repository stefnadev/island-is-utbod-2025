export const parseSalary = (val: string | number | undefined): number => {
  if (!val) return 0;
  return typeof val === 'string'
    ? Number(val.replace(/\./g, '').replace(',', '.')) || 0
    : Number(val);
};
