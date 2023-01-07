import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'

const config = {
  symbol: 'Ksh',
  thousandsSeparator: ',',
  fractionCount: 0,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
}

Vue.use(VueCurrencyFilter, config)
