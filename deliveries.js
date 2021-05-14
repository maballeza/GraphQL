const sql = require("msnodesqlv8");

const connectionString = "server=localhost;Database=AdventureWorks;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT TOP 10 oh.SalesOrderID, oh.DueDate, oh.ShipToAddressID, oh.Freight, oh.AccountNumber, oh.Status, oh.Comment FROM AdventureWorks.Sales.SalesOrderHeader oh ORDER BY oh.DueDate DESC";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});