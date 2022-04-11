import React, { useEffect, useState } from "react";
import axios from "axios";
import Homecountries from "./Homecountries";
import Allnumbers from "./Allnumbers";

const Homepage = () => {
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [death, setDeath] = useState("");
  const [dataa, setDataa] = useState([]);
  const [lastupdate, setLastupdate] = useState("");
  /* const conf = async () => {
             let conf1 = await fetch(`https://covid19.mathdro.id/api/`)
             console.log(conf1)

         }*/
  useEffect(() => {
    async function numbers() {
      let conf1 = await axios.get(`https://covid19.mathdro.id/api/`);
      setLastupdate(conf1.data.lastUpdate);
      setConfirmed(conf1.data.confirmed.value);
      setDeath(conf1.data.deaths.value);
      setRecovered(conf1.data.recovered.value);
    }

    numbers();
  }, []);
  useEffect(() => {
    async function allcountries() {
      let conf1 = await axios.get(`https://covid19.mathdro.id/api/countries`);
      // console.log(conf1.data)
      setDataa(conf1.data.countries);
    }

    allcountries();
  }, []);

  return (
    <div className="Homepage">
      <Allnumbers cases={confirmed} death={death} recovered={recovered} />
<div className="tip-home">
  <p>TIP:
     Press any country to see statistics!🙂
  </p>
</div>
      <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
          {dataa.map((country) => (
            <Homecountries key={country.name} country={country.name} />
          ))}
        </tbody>
      </table>
      <div className="footer-home ">Last Update: {lastupdate} </div>
    </div>
  );
};

export default Homepage;
