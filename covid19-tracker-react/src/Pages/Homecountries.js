import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Homecountries = ({ country }) => {
  const [conf, setConf] = useState("");
  const [rec, setRec] = useState("");
  const [dea, setDea] = useState("");

  useEffect(() => {
    async function dataonecountry() {
      let data = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      //  console.log(data.data)
      setConf(data.data.confirmed.value);
      setRec(data.data.recovered.value);
      setDea(data.data.deaths.value);
    }

    dataonecountry();
  }, [{ country }]);

  return (
    <tr>
      <td>
        <Link className="link-country" to={{pathname: `/country/${country}`}}>
        
        {country}</Link>

        </td>

      <td> {conf.toLocaleString('de-DE')}</td>
      <td> {rec.toLocaleString('de-DE')}</td>
      <td> {dea.toLocaleString('de-DE')}</td>
    </tr>
  );
};

export default Homecountries;
