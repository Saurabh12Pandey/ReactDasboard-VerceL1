import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer:"$45.99",
      amount: 20,
      method: "32 in Stock",  
    },
    {
      customer:"$45.99",
      product: "Playst",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 20,
      method: "32 in Stock",
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Stock</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Total Sales</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div></TableCell>
              <TableCell className="tableCell">
                {row.method}
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;