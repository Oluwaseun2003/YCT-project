import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "inter, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
    ],
    labels: {
      style: {
        fontSize: "14px",
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "inter",
    fontWeight: 500,
    fontSize: "14px",
    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

const GPAAnalyticsChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "GPA",
        data: [3.2, 3.5, 3.8, 3.2, 3.9, 3.6, 3.7], // Replace with your GPA data
      },
    ],
  });

  return (
    <div className="w-full flex items-center gap-7 mt-5 mb-14">
      <div className="flex flex-col bg-shades-white rounded-2xl h-[470px] w-full p-10">
        <div className="mb-4">
          <div>
            <h4 className="font-semibold text-black dark:text-white">
              Hover to check semester GPA
            </h4>
          </div>
          
        </div>

        {/* Chart */}
        <div>
          <div id="chartTwo" className="-ml-5 -mb-9">
            <ReactApexChart
              options={options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPAAnalyticsChart;