import { useState, useEffect } from "react";
import { Table } from "./Table"
import "./Form.css";
export const Form = () => {
  
  const [data, setData] = useState([]);

  const [form] = useState({
           gamename:"",
           gameauthor:"",
           gameprice:"",
           gametags:"",
           forkids:"",
           gamerating:"",
    
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3001/games`)
      .then((d) => d.json())
      .then((res) => setData(res));
  };


   

 

  return (
    <>
      <div className="main">
        <div className="formDiv">
          <form>
            <div>
              <label>GameName:</label>
              <input style={{ marginLeft: "30px" }}
                type="text"
               
                placeholder="Enter Gamename"
              />
            </div>
            <div>
              <label>GameAuthor :</label>
              <input style={{ marginLeft: "20px" }}
                type="number"
               
                placeholder="Enter author name"
              />
            </div>
            <div>
              <label>GamePrice :</label>
              <input style={{ marginLeft: "36px" }}
                type="number"
               
                placeholder="Enter your price"
              />
            </div>
            <div>
              <label>GameTags :</label>
             <input input style={{ marginLeft: "36px" }} />
            </div>
            <div>
              <label> IsForKids:</label>
              <input style={{ marginLeft: "52px" }}
                type="number"
               
                placeholder="IS it for Younger Kid"
              />
            </div>
            <div>
              <label>GameRating :</label>
              <select name="gamerating" style={{ marginLeft: "10px" }}>
                <option value="">Choose an option</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            
            </div>
           
            <input type="submit" style={{ marginRight: "440px" }} />

          </form>

        </div>
        <div className="dataDiv">
          <Table list={data} />
           <button>Rating Low to High</button>
          <button>Rating High to Low</button>
        </div>
      </div>

    </>
  );
};

