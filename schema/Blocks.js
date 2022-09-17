cube(`Blocks`, {
  sql: `SELECT * FROM evmos.blocks`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [timestamp]
    },
    
    number: {
      sql: `number`,
      type: `sum`
    },
    
    transactionCount: {
      sql: `transaction_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    hash: {
      sql: `hash`,
      type: `string`
    },
    
    parentHash: {
      sql: `parent_hash`,
      type: `string`
    },
    
    nonce: {
      sql: `nonce`,
      type: `string`
    },
    
    sha3Uncles: {
      sql: `sha3_uncles`,
      type: `string`
    },
    
    logsBloom: {
      sql: `logs_bloom`,
      type: `string`
    },
    
    transactionsRoot: {
      sql: `transactions_root`,
      type: `string`
    },
    
    stateRoot: {
      sql: `state_root`,
      type: `string`
    },
    
    receiptsRoot: {
      sql: `receipts_root`,
      type: `string`
    },
    
    miner: {
      sql: `miner`,
      type: `string`
    },
    
    extraData: {
      sql: `extra_data`,
      type: `string`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  }
});
