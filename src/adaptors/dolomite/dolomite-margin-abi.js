module.exports = [{
  "inputs": [{
    "components": [{
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "marginRatio",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "liquidationSpread",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "earningsRate",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Monetary.Value",
      "name": "minBorrowedValue",
      "type": "tuple"
    }, { "internalType": "uint256", "name": "accountMaxNumberOfMarketsWithBalances", "type": "uint256" }],
    "internalType": "struct Storage.RiskParams",
    "name": "riskParams",
    "type": "tuple"
  }, {
    "components": [{
      "internalType": "uint64",
      "name": "marginRatioMax",
      "type": "uint64"
    }, { "internalType": "uint64", "name": "liquidationSpreadMax", "type": "uint64" }, {
      "internalType": "uint64",
      "name": "earningsRateMax",
      "type": "uint64"
    }, { "internalType": "uint64", "name": "marginPremiumMax", "type": "uint64" }, {
      "internalType": "uint64",
      "name": "spreadPremiumMax",
      "type": "uint64"
    }, { "internalType": "uint128", "name": "minBorrowedValueMax", "type": "uint128" }],
    "internalType": "struct Storage.RiskLimits",
    "name": "riskLimits",
    "type": "tuple"
  }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, {
    "indexed": false,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, { "indexed": false, "internalType": "bool", "name": "trusted", "type": "bool" }],
  "name": "LogOperatorSet",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountBalances",
  "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }, {
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
  }, {
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint128",
      "name": "value",
      "type": "uint128"
    }], "internalType": "struct Types.Par[]", "name": "", "type": "tuple[]"
  }, {
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }], "internalType": "struct Types.Wei[]", "name": "", "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }, { "internalType": "uint256", "name": "index", "type": "uint256" }],
  "name": "getAccountMarketWithBalanceAtIndex",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountMarketsWithBalances",
  "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAccountMaxNumberOfMarketsWithBalances",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountNumberOfMarketsWithBalances",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountNumberOfMarketsWithDebt",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }, { "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getAccountPar",
  "outputs": [{
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint128",
      "name": "value",
      "type": "uint128"
    }], "internalType": "struct Types.Par", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }, { "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getAccountParNoMarketCheck",
  "outputs": [{
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint128",
      "name": "value",
      "type": "uint128"
    }], "internalType": "struct Types.Par", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountStatus",
  "outputs": [{ "internalType": "enum Account.Status", "name": "", "type": "uint8" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAccountValues",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "",
    "type": "tuple"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }, { "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getAccountWei",
  "outputs": [{
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }], "internalType": "struct Types.Wei", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info",
    "name": "account",
    "type": "tuple"
  }],
  "name": "getAdjustedAccountValues",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "",
    "type": "tuple"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getEarningsRate",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "address", "name": "autoTrader", "type": "address" }],
  "name": "getIsAutoTraderSpecial",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }],
  "name": "getIsGlobalOperator",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "getIsLocalOperator",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getLiquidationSpread",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "heldMarketId", "type": "uint256" }, {
    "internalType": "uint256",
    "name": "owedMarketId",
    "type": "uint256"
  }],
  "name": "getLiquidationSpreadForPair",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getMarginRatio",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarket",
  "outputs": [{
    "components": [{ "internalType": "address", "name": "token", "type": "address" }, {
      "internalType": "bool",
      "name": "isClosing",
      "type": "bool"
    }, { "internalType": "bool", "name": "isRecyclable", "type": "bool" }, {
      "components": [{
        "internalType": "uint128",
        "name": "borrow",
        "type": "uint128"
      }, { "internalType": "uint128", "name": "supply", "type": "uint128" }],
      "internalType": "struct Types.TotalPar",
      "name": "totalPar",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint96", "name": "borrow", "type": "uint96" }, {
        "internalType": "uint96",
        "name": "supply",
        "type": "uint96"
      }, { "internalType": "uint32", "name": "lastUpdate", "type": "uint32" }],
      "internalType": "struct Interest.Index",
      "name": "index",
      "type": "tuple"
    }, {
      "internalType": "contract IPriceOracle",
      "name": "priceOracle",
      "type": "address"
    }, {
      "internalType": "contract IInterestSetter",
      "name": "interestSetter",
      "type": "address"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "marginPremium",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "spreadPremium",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }], "internalType": "struct Types.Wei", "name": "maxWei", "type": "tuple"
    }], "internalType": "struct Storage.Market", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketCachedIndex",
  "outputs": [{
    "components": [{
      "internalType": "uint96",
      "name": "borrow",
      "type": "uint96"
    }, { "internalType": "uint96", "name": "supply", "type": "uint96" }, {
      "internalType": "uint32",
      "name": "lastUpdate",
      "type": "uint32"
    }], "internalType": "struct Interest.Index", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketCurrentIndex",
  "outputs": [{
    "components": [{
      "internalType": "uint96",
      "name": "borrow",
      "type": "uint96"
    }, { "internalType": "uint96", "name": "supply", "type": "uint96" }, {
      "internalType": "uint32",
      "name": "lastUpdate",
      "type": "uint32"
    }], "internalType": "struct Interest.Index", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "address", "name": "token", "type": "address" }],
  "name": "getMarketIdByTokenAddress",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketInterestRate",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Interest.Rate",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketInterestSetter",
  "outputs": [{ "internalType": "contract IInterestSetter", "name": "", "type": "address" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketIsClosing",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketIsRecyclable",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketMarginPremium",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketMaxWei",
  "outputs": [{
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }], "internalType": "struct Types.Wei", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketPrice",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Price",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketPriceOracle",
  "outputs": [{ "internalType": "contract IPriceOracle", "name": "", "type": "address" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketSpreadPremium",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketTokenAddress",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketTotalPar",
  "outputs": [{
    "components": [{
      "internalType": "uint128",
      "name": "borrow",
      "type": "uint128"
    }, { "internalType": "uint128", "name": "supply", "type": "uint128" }],
    "internalType": "struct Types.TotalPar",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getMarketWithInfo",
  "outputs": [{
    "components": [{ "internalType": "address", "name": "token", "type": "address" }, {
      "internalType": "bool",
      "name": "isClosing",
      "type": "bool"
    }, { "internalType": "bool", "name": "isRecyclable", "type": "bool" }, {
      "components": [{
        "internalType": "uint128",
        "name": "borrow",
        "type": "uint128"
      }, { "internalType": "uint128", "name": "supply", "type": "uint128" }],
      "internalType": "struct Types.TotalPar",
      "name": "totalPar",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint96", "name": "borrow", "type": "uint96" }, {
        "internalType": "uint96",
        "name": "supply",
        "type": "uint96"
      }, { "internalType": "uint32", "name": "lastUpdate", "type": "uint32" }],
      "internalType": "struct Interest.Index",
      "name": "index",
      "type": "tuple"
    }, {
      "internalType": "contract IPriceOracle",
      "name": "priceOracle",
      "type": "address"
    }, {
      "internalType": "contract IInterestSetter",
      "name": "interestSetter",
      "type": "address"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "marginPremium",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "spreadPremium",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }], "internalType": "struct Types.Wei", "name": "maxWei", "type": "tuple"
    }], "internalType": "struct Storage.Market", "name": "", "type": "tuple"
  }, {
    "components": [{ "internalType": "uint96", "name": "borrow", "type": "uint96" }, {
      "internalType": "uint96",
      "name": "supply",
      "type": "uint96"
    }, { "internalType": "uint32", "name": "lastUpdate", "type": "uint32" }],
    "internalType": "struct Interest.Index",
    "name": "",
    "type": "tuple"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Price",
    "name": "",
    "type": "tuple"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Interest.Rate",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getMinBorrowedValue",
  "outputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }],
  "name": "getNumExcessTokens",
  "outputs": [{
    "components": [{ "internalType": "bool", "name": "sign", "type": "bool" }, {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }], "internalType": "struct Types.Wei", "name": "", "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getNumMarkets",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{ "internalType": "uint256", "name": "n", "type": "uint256" }],
  "name": "getRecyclableMarkets",
  "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getRiskLimits",
  "outputs": [{
    "components": [{
      "internalType": "uint64",
      "name": "marginRatioMax",
      "type": "uint64"
    }, { "internalType": "uint64", "name": "liquidationSpreadMax", "type": "uint64" }, {
      "internalType": "uint64",
      "name": "earningsRateMax",
      "type": "uint64"
    }, { "internalType": "uint64", "name": "marginPremiumMax", "type": "uint64" }, {
      "internalType": "uint64",
      "name": "spreadPremiumMax",
      "type": "uint64"
    }, { "internalType": "uint128", "name": "minBorrowedValueMax", "type": "uint128" }],
    "internalType": "struct Storage.RiskLimits",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getRiskParams",
  "outputs": [{
    "components": [{
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "marginRatio",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "liquidationSpread",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Decimal.D256",
      "name": "earningsRate",
      "type": "tuple"
    }, {
      "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
      "internalType": "struct Monetary.Value",
      "name": "minBorrowedValue",
      "type": "tuple"
    }, { "internalType": "uint256", "name": "accountMaxNumberOfMarketsWithBalances", "type": "uint256" }],
    "internalType": "struct Storage.RiskParams",
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "isOwner",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }, { "internalType": "uint256", "name": "number", "type": "uint256" }],
    "internalType": "struct Account.Info[]",
    "name": "accounts",
    "type": "tuple[]"
  }, {
    "components": [{
      "internalType": "enum Actions.ActionType",
      "name": "actionType",
      "type": "uint8"
    }, { "internalType": "uint256", "name": "accountId", "type": "uint256" }, {
      "components": [{
        "internalType": "bool",
        "name": "sign",
        "type": "bool"
      }, {
        "internalType": "enum Types.AssetDenomination",
        "name": "denomination",
        "type": "uint8"
      }, { "internalType": "enum Types.AssetReference", "name": "ref", "type": "uint8" }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }], "internalType": "struct Types.AssetAmount", "name": "amount", "type": "tuple"
    }, { "internalType": "uint256", "name": "primaryMarketId", "type": "uint256" }, {
      "internalType": "uint256",
      "name": "secondaryMarketId",
      "type": "uint256"
    }, { "internalType": "address", "name": "otherAddress", "type": "address" }, {
      "internalType": "uint256",
      "name": "otherAccountId",
      "type": "uint256"
    }, { "internalType": "bytes", "name": "data", "type": "bytes" }],
    "internalType": "struct Actions.ActionArgs[]",
    "name": "actions",
    "type": "tuple[]"
  }],
  "name": "operate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "token",
    "type": "address"
  }, {
    "internalType": "contract IPriceOracle",
    "name": "priceOracle",
    "type": "address"
  }, {
    "internalType": "contract IInterestSetter",
    "name": "interestSetter",
    "type": "address"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "marginPremium",
    "type": "tuple"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "spreadPremium",
    "type": "tuple"
  }, { "internalType": "uint256", "name": "maxWei", "type": "uint256" }, {
    "internalType": "bool",
    "name": "isClosing",
    "type": "bool"
  }, { "internalType": "bool", "name": "isRecyclable", "type": "bool" }],
  "name": "ownerAddMarket",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "uint256[]", "name": "marketIds", "type": "uint256[]" }, {
    "internalType": "address",
    "name": "salvager",
    "type": "address"
  }],
  "name": "ownerRemoveMarkets",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "uint256", "name": "accountMaxNumberOfMarketsWithBalances", "type": "uint256" }],
  "name": "ownerSetAccountMaxNumberOfMarketsWithBalances",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "address", "name": "autoTrader", "type": "address" }, {
    "internalType": "bool",
    "name": "special",
    "type": "bool"
  }],
  "name": "ownerSetAutoTraderSpecial",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "earningsRate",
    "type": "tuple"
  }],
  "name": "ownerSetEarningsRate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ownerSetGlobalOperator",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "marketId",
    "type": "uint256"
  }, { "internalType": "contract IInterestSetter", "name": "interestSetter", "type": "address" }],
  "name": "ownerSetInterestSetter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }, {
    "internalType": "bool",
    "name": "isClosing",
    "type": "bool"
  }],
  "name": "ownerSetIsClosing",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "spread",
    "type": "tuple"
  }],
  "name": "ownerSetLiquidationSpread",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "marketId",
    "type": "uint256"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "marginPremium",
    "type": "tuple"
  }],
  "name": "ownerSetMarginPremium",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "ratio",
    "type": "tuple"
  }],
  "name": "ownerSetMarginRatio",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }, {
    "internalType": "uint256",
    "name": "maxWei",
    "type": "uint256"
  }],
  "name": "ownerSetMaxWei",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Monetary.Value",
    "name": "minBorrowedValue",
    "type": "tuple"
  }],
  "name": "ownerSetMinBorrowedValue",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "marketId",
    "type": "uint256"
  }, { "internalType": "contract IPriceOracle", "name": "priceOracle", "type": "address" }],
  "name": "ownerSetPriceOracle",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "marketId",
    "type": "uint256"
  }, {
    "components": [{ "internalType": "uint256", "name": "value", "type": "uint256" }],
    "internalType": "struct Decimal.D256",
    "name": "spreadPremium",
    "type": "tuple"
  }],
  "name": "ownerSetSpreadPremium",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "uint256", "name": "marketId", "type": "uint256" }, {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }],
  "name": "ownerWithdrawExcessTokens",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }],
  "name": "ownerWithdrawUnsupportedTokens",
  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }, { "internalType": "bool", "name": "trusted", "type": "bool" }],
    "internalType": "struct Types.OperatorArg[]",
    "name": "args",
    "type": "tuple[]"
  }],
  "name": "setOperators",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}];
