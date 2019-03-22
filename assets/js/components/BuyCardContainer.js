import { connect } from 'react-redux';

import BuyCardPage from './BuyPage'

import { buyMeal } from '../actions/account_actions'

const mapStateToProps = (state) => ({
    account: state.entities.account,
    error: state.errors.buyError,
    title: "Buy Card"
});

const mapDispatchToProps = dispatch => ({
    action: (account, amount) => dispatch(buyCard(account, amount))
})


export default connect(mapStateToProps, mapDispatchToProps)(BuyCardPage)