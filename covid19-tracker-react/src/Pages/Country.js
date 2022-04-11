import React from "react";
import "../App.css";
import { Bar, Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Country() {
  const { countryname } = useParams();

  const [data, setData] = useState({});

  async function getCountryData(countryname) {
    const res = await fetch("https://pomber.github.io/covid19/timeseries.json");

    const countries = await res.json();
    //console.log(countries[countryname]);
    const country = countries[countryname].filter(
      ({ confirmed }) => confirmed > 0
    );
    const lastUpdateCountry = country[country.length - 1];
    const { confirmed, recovered, deaths, date } = lastUpdateCountry;

    setData({
      lastUpdate: date,
      confirmed,
      recovered: {
        value: recovered,
        percent: Math.round((recovered / confirmed) * 100),
      },
      deaths: {
        value: deaths,
        percent: Math.round((deaths / confirmed) * 100),
      },
      allData: country,
    });
  }

  useEffect(() => {
    getCountryData(countryname);
  }, []);
  console.log(data);

  return (
    <div className="country">
      <h1>Cases and Deaths for {countryname}</h1>
      <div className="pososto-deaths">
        <p>Mortality Rate: {data?.deaths?.percent} %</p>
      </div>
      <Line
        data={{
          labels: data?.allData?.map((data) => data.date),
          datasets: [
            {
              backgroundColor: "red",
              label: "Cases",
              data: data?.allData?.map((data) => data.confirmed),
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Cases " + countryname,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: true,
        }}
        width={100}
        height={20}
      />

      <Bar
        className="bar-country"
        data={{
          labels: data?.allData?.map((data) => data.date),
          datasets: [
            {
              backgroundColor: "green",
              label: "Deaths",
              data: data?.allData?.map((data) => data.deaths),
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Deaths " + countryname,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: true,
        }}
        width={100}
        height={20}
      />

      <footer>Last Update Data: {data.lastUpdate}</footer>
    </div>
  );
}

export default Country;
