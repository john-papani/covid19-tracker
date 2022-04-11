import React from "react";

const Allnumbers = ({ cases, death, recovered }) => {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <div className="line1">Cases</div>
          <div className="line2">{cases.toLocaleString('de-DE')}</div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div className="line1"> Deaths</div>
          <div className="line2">{death.toLocaleString('de-DE')}</div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div className="line1"> Recovered</div>
          <div className="line2"> {recovered.toLocaleString('de-DE')}</div>
          <div className="line2" style={{ fontWeight: 'bold'  }}> General  API Problem 😕 </div>
        </div>
      </div>
    </div>
  );
};
export default Allnumbers;
