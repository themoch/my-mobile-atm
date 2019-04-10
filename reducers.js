import {
  WITHDRAW_CASH,
  GET_STATEMENT ,
  GET_TRANSACTIONS,
} from './actions';

const ATM_WITHDRAWAL = 'ATM Withdrawal';

const initialState = {
  originalBalance: 2000,
  statement: [],
  amount: 0,
};

export function myMobileAtm(state = initialState, action) {
  switch(action.type) {
    case WITHDRAW_CASH:
      return Object.assign({}, state, {
        statement: [
          ...state.statement,
          {
            name: ATM_WITHDRAWAL,
            amount: state.amount,
          }
        ]
      });
    case GET_TRANSACTIONS:
      return Object.assign({}, state, {
        statement: [
          ...state.statement
        ]
      });
    case GET_STATEMENT:
      return Object.assign({}, state, {
        statement: [
          ...state.statement
        ]
      });
    default:
      return state;
  }
}
