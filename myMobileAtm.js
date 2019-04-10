import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios/index';

import {
  WITHDRAW_CASH,
  GET_STATEMENT,
  GET_TRANSACTIONS,
  withdrawCash,
  getStatement,
} from './actions';
import styles from './styles';

class MyMobileAtm extends Component {
  state = {
    originalBalance: 2000,
    balance: 0,
    statement: [],
    amount: 0,
    transactions: [],
  };

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
  }

  componentDidMount() {
    axios.get('https://app.fakejson.com/q/0Pm3bJKu?token=HbqwPS-BSqOehLpig2ePqg')
      .then(
        (resp) => {
          console.log('getData response', resp.data.transactions);
          this.setState({transactions: resp.data.transactions});
        }
      )
      .catch(
        (err) => {
          console.log('getData Error:', err);
        }
      );
  }

  handleTextChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleWithdraw(e) {
    console.log(e);
    e.preventDefault();
    this.setState({
      transactions: this.state.transactions.push(this.state.inputValue),
      amount: e.target.value,
    }, console.log('values', this.state.transactions));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.total}>
          ${this.state.transactions.length && this.state.transactions.reduce((Acc, trans) => {
          return (Acc - trans.amount).toFixed(2);
        }, this.state.originalBalance)}
        </Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputBox}
            onChangeText={e => this.handleTextChange}
            value={this.state.inputValue}
          />
          <Button
            style={styles.inputButton}
            title={'Withdraw'}
            onPress={e => this.handleWithdraw(e)}
          />
        </View>
        {this.state.transactions && this.state.transactions.map((item, index) => {
          return (
            <Text key={index}>{item.name}... ${item.amount.toFixed(2)}</Text>
          )
        })}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    amount: state.amount,
    transactions: state.transactions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchWithdrawCash: () => dispatch(withdrawCash(amount)),
    dispatchGetStatement: () => dispatch({ type: 'GET_STATEMENT' }),
    dispatchGetTransactions: () => dispatch(getStatement({transactions: this.state.transactions})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMobileAtm)
