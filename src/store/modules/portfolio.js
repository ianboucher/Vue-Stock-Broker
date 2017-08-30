const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(item => item.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id       : stockId,
                quantity : quantity,
            });
        }

        state.funds -= stockPrice * quantity;
    },

    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(item => item.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += stockPrice * quantity;
    },

    'SET_PORTFOLIO'(state, portfolio) {
        state.funds  = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    // Returns an array of stocks with the info from this module (id & quantity)
    // added to the name and price from the stocks module, to create a list of
    // stocks in our portfolio.
    //
    // here we inject the getters for the 'stocks' module so that we can
    // access properties of the stocks stored there and save to 'record'
    stockPortfolio (state, getters) {
        console.log(state);
        return state.stocks.map(stock => {
            const record = getters.stocks.find(item => item.id == stock.id);
            return {
                id       : stock.id,
                quantity : stock.quantity,
                name     : record.name,
                price    : record.price,
            }
        });
    },

    funds (state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}
