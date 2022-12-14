cube(`Transactions`, {
  sql: `SELECT * FROM evmos.transactions`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [blockTimestamp]
    },
    
    value: {
      sql: `value`,
      type: `sum`
    },

    gas: {
      sql: `gas`,
      type: `sum`
    },

    averageGas: {
      sql: `gas`,
      type: `avg`
    },
    
    gasPrice: {
      sql: `gas_price`,
      type: `sum`
    },
    
    blockNumber: {
      sql: `block_number`,
      type: `sum`
    },
    
    receiptEffectiveGasPrice: {
      sql: `receipt_effective_gas_price`,
      type: `sum`
    },

    fromAddressesCount: {
      sql: `from_address`,
      type: 'countDistinct'
    }
  },
  
  dimensions: {
    hash: {
      sql: `hash`,
      type: `string`
    },
    
    fromAddress: {
      sql: `from_address`,
      type: `string`
    },
    
    toAddress: {
      sql: `to_address`,
      type: `string`
    },
    
    input: {
      sql: `input`,
      type: `string`
    },

    callsign: {
      sql: `substring(input, 1, 10)`,
      type: `string`
    },
    
    receiptContractAddress: {
      sql: `receipt_contract_address`,
      type: `string`
    },
    
    receiptRoot: {
      sql: `receipt_root`,
      type: `string`
    },
    
    blockHash: {
      sql: `block_hash`,
      type: `string`
    },
    
    blockTimestamp: {
      sql: `block_timestamp`,
      type: `time`
    }
  }
});
