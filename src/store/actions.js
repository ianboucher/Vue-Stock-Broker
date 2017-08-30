import {http} from '../main.js';

export const loadData = ({commit}) => {
    http.get('data.json').then(response => {
        const data           = response.data;
        const stocks         = data.stocks;
        const funds          = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
            stockPortfolio,
            funds,
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
    })
    .catch(error => {
        console.log(error);
    })
}
