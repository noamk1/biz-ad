import SelectedServices from "./SelectedServices";
import "./style.css";

function Services() {
  return (
    <>
      <div className="bg-dark text-light">
        <div className="container" id="hanging-icons">
          <div className="row py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
             
            </div>
           
            <div className="d-flex flex-column">
             <h1 className="text-center">Services </h1>
            <h4 className="text-center">Choose services that you would like to get from BizAd  </h4>

            </div>


          </div>
        </div>
      </div>
    

      <div className="bg-light p-3">
        <div className="services-sizing container">
          <h1 className="pb-2 border-bottom text-color-red">
            Add Your Service
          </h1>
          <SelectedServices />
        </div>
      </div>

      
    </>
  );
}

export default Services;

