var sql = require('mssql/msnodesqlv8');

const config = {
    database: 'SampleDB',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000
    },
    options: {
        trustedConnection: true
    }
};

sql.connect(config).then(() => {
    return sql.query`
        SELECT TOP 10 
            oh.SalesOrderID, 
            oh.DueDate, 
            oh.ShipToAddressID, 
            oh.Freight, 
            oh.AccountNumber, 
            oh.Status,
            oh.Comment
        FROM AdventureWorks.Sales.SalesOrderHeader oh 
        ORDER BY oh.DueDate 
        DESC;`
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.dir(err)
});