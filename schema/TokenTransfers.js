cube(`TokenTransfers`, {
  sql: `SELECT * FROM evmos.token_transfers`,
  
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
    
    blockNumber: {
      sql: `block_number`,
      type: `sum`
    }
  },
  
  dimensions: {
    tokenAddress: {
      sql: `token_address`,
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
    
    transactionHash: {
      sql: `transaction_hash`,
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
