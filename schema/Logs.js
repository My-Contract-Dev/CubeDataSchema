cube(`Logs`, {
  sql: `SELECT * FROM evmos.logs`,
  
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
    
    blockNumber: {
      sql: `block_number`,
      type: `sum`
    }
  },
  
  dimensions: {
    transactionHash: {
      sql: `transaction_hash`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    },
    
    topic0: {
      sql: `topic0`,
      type: `string`
    },
    
    topic1: {
      sql: `topic1`,
      type: `string`
    },
    
    topic2: {
      sql: `topic2`,
      type: `string`
    },
    
    topic3: {
      sql: `topic3`,
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
