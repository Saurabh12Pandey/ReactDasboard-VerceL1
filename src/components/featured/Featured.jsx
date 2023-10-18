import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import {Circle} from 'rc-progress';
const Featured = () => {
  return (
    <div className="featured">
       <h1 className="title" style={{fontWeight:"bold", color:"black"}}>Customers</h1>
      <div className="top">
       
        <p style={{position:"relative", top:"2px" ,right:"5px"}}>Customer that buy product</p>
        
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart"> 
          <Circle 
            percent={25}
            strokeColor={"red"}
            strokeWidth={25}
            trailColor="blue"
            trailWidth={20}
            strokeLinecap="square"
            gapDegree={135}
            gapPosition="left"       
           />
            <p className="name">65% </p>   
        </div>
      </div>
      <h3 className="name1" style={{position:"relative", bottom:"230px", margin:"90px", left:"22px"}}>Total Customer</h3>
    </div>
  );
};

export default Featured;