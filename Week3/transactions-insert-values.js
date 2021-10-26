const accountValues = [
  { account_number: 1001, balance: 3000 },
  { account_number: 1002, balance: 10000 },
  { account_number: 1003, balance: 2800 },
  { account_number: 1004, balance: 7000 },
  { account_number: 1005, balance: 500 },
  { account_number: 1006, balance: 156000 },
  { account_number: 1007, balance: 21000 },
  { account_number: 1008, balance: 5250 },
  { account_number: 1009, balance: 800 },
];

const accountChangeValues = [
  {
    change_number: 101,
    account_number: 1001,
    amount: 1200,
    changed_date: "2021-10-02",
    remark: "Car lease down payment",
  },
  {
    change_number: 102,
    account_number: 1008,
    amount: 400,
    changed_date: "2021-10-02",
    remark: "apple watch",
  },
  {
    change_number: 103,
    account_number: 1002,
    amount: 700,
    changed_date: "2021-10-03",
    remark: "iphone 13",
  },
  {
    change_number: 104,
    account_number: 1004,
    amount: 13,
    changed_date: "2021-10-12",
    remark: "netflix subscription",
  },
  {
    change_number: 105,
    account_number: 1003,
    amount: 150,
    changed_date: "2021-10-04",
    remark: "water park tickets",
  },
  {
    change_number: 106,
    account_number: 1003,
    amount: 100,
    changed_date: "2021-10-22",
    remark: "dinner at Fridays",
  },
  {
    change_number: 107,
    account_number: 1009,
    amount: 1000,
    changed_date: "2021-10-23",
    remark: "rent payment",
  },
  {
    change_number: 108,
    account_number: 1005,
    amount: 200,
    changed_date: "2021-10-23",
    remark: "hotel reservation",
  },
  {
    change_number: 109,
    account_number: 1006,
    amount: 35000,
    changed_date: "2021-10-24",
    remark: "house down payment",
  },
];

module.exports = { accountValues, accountChangeValues };
