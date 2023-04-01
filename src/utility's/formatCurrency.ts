const CURRENY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export function formatCurrency(number: number) {
  return CURRENY_FORMATER.format(number);
}
