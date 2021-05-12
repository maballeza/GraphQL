
## Description
A simple script gathering upcoming deliveries for the fictitious company, [*Adventure Works*](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver15&tabs=ssms).
### Requirements 
Use of Node package manager npm and installation of [SQL Server client for Node](https://www.npmjs.com/package/mssql) is required:
```CMD
> npm install msnodesqlv8@^2
```
To run the script use:
```CMD
> npm run start
```
#### Produced Output
```SQL
> deliveries@1.0.0 start
> node deliveries

{
  recordsets: [
    [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  ],
  recordset: [
    {
      SalesOrderID: 75084,
      DueDate: [Date],
      ShipToAddressID: 24109,
      Freight: 3,
      AccountNumber: '10-4030-011078',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75085,
      DueDate: [Date],
      ShipToAddressID: 29000,
      Freight: 0.4235,
      AccountNumber: '10-4030-011927',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75086,
      DueDate: [Date],
      ShipToAddressID: 14951,
      Freight: 0.1988,
      AccountNumber: '10-4030-028789',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75087,
      DueDate: [Date],
      ShipToAddressID: 28126,
      Freight: 0.8748,
      AccountNumber: '10-4030-011794',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75088,
      DueDate: [Date],
      ShipToAddressID: 15932,
      Freight: 2.849,
      AccountNumber: '10-4030-014680',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75089,
      DueDate: [Date],
      ShipToAddressID: 19770,
      Freight: 1.5118,
      AccountNumber: '10-4030-019585',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75090,
      DueDate: [Date],
      ShipToAddressID: 27023,
      Freight: 1.8745,
      AccountNumber: '10-4030-027686',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75091,
      DueDate: [Date],
      ShipToAddressID: 26947,
      Freight: 2.0118,
      AccountNumber: '10-4030-020601',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75092,
      DueDate: [Date],
      ShipToAddressID: 16624,
      Freight: 1.2493,
      AccountNumber: '10-4030-026564',
      Status: 5,
      Comment: null
    },
    {
      SalesOrderID: 75093,
      DueDate: [Date],
      ShipToAddressID: 21837,
      Freight: 3.9148,
      AccountNumber: '10-4030-016170',
      Status: 5,
      Comment: null
    }
  ],
  output: {},
  rowsAffected: []
}
```

### Next Steps
Attach to and run queries against an appropriate GraphQL schema endpoint to test individual resolver functions; additionally, modify the script to enable proper retrieval of SQL timestamps.