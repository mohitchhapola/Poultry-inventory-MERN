import React from "react";
/* import loaderImg from "../../assets/loader.gif"; */
import ReactDOM from "react-dom";
import "./loader.css"; 

const Loader = () => {
    return ReactDOM.createPortal(
      <div className="spinner-container"> 
        <div className="spinner"> 
          <div className="spinner"> 
            <div className="spinner"> 
              <div className="spinner"> 
                <div className="spinner"> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("loader")
    );
  };
  
export default Loader;