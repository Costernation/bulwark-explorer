
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'hhtps://explorer.elliotproject.org',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'elliot-coin'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'elliexplorer',
    'user': 'elli',
    'pass': 'elli'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '61318',
    'user': 'elli',
    'pass': 'elli',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
