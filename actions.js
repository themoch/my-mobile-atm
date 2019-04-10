export const WITHDRAW_CASH = 'WITHDRAW_CASH';
export const GET_STATEMENT = 'GET_STATEMENT';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export function withdrawCash(amount) {
  return {
    type: WITHDRAW_CASH,
    amount,
  };
}

export function getStatement(transactions) {
  return {
    type: GET_STATEMENT,
    transactions
  }
}
