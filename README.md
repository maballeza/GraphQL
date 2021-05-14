
## Description
A simple script gathering upcoming deliveries for the fictitious company, [*Adventure Works*](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver15&tabs=ssms).
### Requirements 
Use of Node package manager npm and installation of [SQL Server client for Node](https://www.npmjs.com/package/msnodesqlv8) is required:
```CMD
> npm install msnodesqlv8
```
To run the script use:
```CMD
> npm run start
```
#### Partial Output
```SQL
{
    SalesOrderID: 75084,
    DueDate: 2014-07-12T00:00:00.000Z { nanosecondsDelta: 0 },
    ShipToAddressID: 24109,
    Freight: 3,
    AccountNumber: '10-4030-011078',
    Status: 5,
    Comment: null
  }
```

### Next Steps
Attach to and run queries against an appropriate GraphQL schema endpoint to test individual resolver functions.