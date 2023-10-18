import "./widget.scss";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({ type }) => {
  let data;

  //temporary


  switch (type) {
    case "user":
      data = {
        title: "Earning",
        dollar1:"$198k",
        Money: "37.8%",
        title1:" month",
        icon: (
          <AttachMoneyTwoToneIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        icon1:(
          <ArrowUpwardTwoToneIcon
          className="icon1"
          style={{
            color:"green"
          }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        dollar1:"2.4k",
        Money: "2%",
        title1:"month",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "black",
            }}
          />
        ),
        icon1:(
          <ArrowDownwardTwoToneIcon
          className="icon1"
          style={{
            color:"red",
            
          }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Balance",
        dollar1:"$2.4k",
        Money: "2%",
        title1:"month",
        
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green", borderRadius:"10%"}}
          />
        ),
        icon1:(
          <ArrowDownwardTwoToneIcon
          className="icon1"
          style={{
            color:"red"
          }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "TotalScore",
        dollar1:"$89k",
        Money: "11%",
        title1:"week",
        
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        icon1:(
          <ArrowUpwardTwoToneIcon
          className="icon1"
          style={{
            color:"green"
          }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="counter">
        <span className="icon">
        {data.icon}
        </span>
        </span>
       
      </div>
      <div className="right">
        <div className="percentage">
           <span className="title"> {data.title}</span> 
           <span className="dollar"><p style={{fontWeight:"bold"}}>{data.dollar1}</p></span>
        </div>
        <div className="icon2">
        <span className="icon1">{data.icon1}</span>
        <span className="money">{data.Money} {data.title1}</span>

        </div>
      </div>
    </div>
  );
};

export default Widget;