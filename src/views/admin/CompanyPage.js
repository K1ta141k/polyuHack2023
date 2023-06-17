import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import axios from "axios";
import { isMobile } from "react-device-detect";

// components
import { Oval } from "react-loader-spinner";
import MyCardProfile from "components/MyCards/MyCardProfile.js";
import MyKPICard from "../../components/MyCards/MyKPICard";
import MyESGCard from "components/MyCards/MyESGCard";
import "react-circular-progressbar/dist/styles.css";
import MyESGKPI from "components/MyCards/MyESGKPI";
import MyActions from "components/MyCards/MyActions";
import MyStocksCard from "components/MyCards/MyStocksCard";
import MyBarChart from "components/MyCards/MyBarChart";

const apple_esg = {
  Company: "Apple",
  Steps: [
    "Since 2020, we have been carbon neutral for our corporate operations. Building on this achievement, we set an ambitious and urgent goal to make carbon neutral products by 2030.",
    "With Apple Trade In, you can exchange your old device for credit toward your next purchase, or get an Apple Gift Card you can use anytime. If eligible, your device can have a second life with another owner. If not, we’ll recycle it free of charge. ",
    "We’re committed to transitioning our entire manufacturing supply chain to 100% renewable electricity generated from solar, wind, and other renewable projects.",
    "With Conservation International (CI) and Goldman Sachs, we have created the $200 million Restore Fund to make investments in natural climate solutions while seeking to generate a financial return.",
    "We design our products to have a lighter environmental footprint. The 24‑inch iMac is evidence. Not only is its enclosure made with low-carbon aluminum, but it also uses recycled plastic, recycled tin, and recycled rare earth elements.",
    "Power adapters use the largest amounts of certain materials, including plastic, copper, tin, and zinc. Since removing them from iPhone and Apple Watch packaging, we’ve avoided mining a significant amount of materials from the earth, and we’ve eliminated the emissions that come from processing and transporting them.",
  ],
  Name: "2021 Annual Report and News",
  Year: 2021,
  E: 69,
  S: 75,
  G: 82,
  ESG: 76,
};

const test_stocks = [
  {
    index: "2023-02-03",
    close: 154.50,
  },
  {
    index: "2023-02-06",
    close: 151.73,
  },
  {
    index: "2023-02-07",
    close: 154.65,
  },
  {
    index: "2023-02-08",
    close: 151.92,
  },
  {
    index: "2023-02-09",
    close: 150.87,
  },
  {
    index: "2023-02-10",
    close: 151.01,
  },
];

const test_quarterly = [
  {
    quarter: 'Q4-2022',
    incomeBeforeTax: 117.15,
    netIncome: 30.0,
  },
  {
    quarter: 'Q3-2022',
    incomeBeforeTax: 90.15,
    netIncome: 20.72,
  },
  {
    quarter: 'Q2-2022',
    incomeBeforeTax: 82.96,
    netIncome: 19.44,
  },
  {
    quarter: 'Q1-2022',
    incomeBeforeTax: 97.28,
    netIncome: 25.01,
  },
  {
    quarter: 'Q4-2021',
    incomeBeforeTax: 123.94,
    netIncome: 34.63,
  },
  {
    quarter: 'Q3-2021',
    incomeBeforeTax: 83.36,
    netIncome: 20.55,
  },
  {
    quarter: 'Q2-2021',
    incomeBeforeTax: 81.43,
    netIncome: 21.74,
  },
  {
    quarter: 'Q1-2021',
    incomeBeforeTax: 89.58,
    netIncome: 23.63,
  },
];

export default class CompanyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      stocks: test_stocks,
      quarterly: test_quarterly,
    };
  }

  // fetchData() {
  //   axios({ method: "GET", url: `/companyPage/AAPL` })
  //     .then((res) => res.data)
  //     .then((data) => {
  //       this.setState({
  //         stocks: data.price.slice(-36),
  //         quarterly: data.quarterly,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       this.setState({
  //         quarterly: test_quarterly,
  //         stocks: test_stocks,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

  render() {
    return !isMobile ? (
      <StickyContainer>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="flex flex-wrap pb4 w-full xl:w-12/12 mb-12 xl:mb-0">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                  <MyKPICard
                    title="Total Revenue"
                    value="83.36 Bn"
                    date="Sep 25, 2021"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                  <MyKPICard
                    title="Gross Profit"
                    value="35.17 Bn"
                    date="Sep 25, 2021"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                  <MyKPICard
                    title="Operating Income"
                    value="23.79 Bn"
                    date="Sep 25, 2021"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                  <MyKPICard
                    title="Net Income"
                    value="20.55 Bn"
                    date="Sep 25, 2021"
                  />
                </div>
              </div>
              <div className="flex flex-wrap pb4 w-full xl:w-12/12 mb-12 xl:mb-0">
                <div className="w-full xl:w-8/12 px-4">
                  <MyESGCard esg={apple_esg} />
                </div>
                <div className="flex flex-wrap w-full xl:w-4/12">
                  <div className="w-full xl:w-12/12 pb-4">
                    <MyESGKPI title="ESG - Total Score" esg={apple_esg} />
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                <MyActions steps={apple_esg.Steps} />
              </div>
              <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                {this.state.stocks.length ? (
                  <MyStocksCard prices={this.state.stocks} />
                ) : (
                  <Oval
                    heigth="100"
                    width="100"
                    color="grey"
                    ariaLabel="loading"
                  />
                )}
              </div>
              <div className="w-full xl:w-12/12 px-4">
                {this.state.quarterly.length ? (
                  <MyBarChart quarterly={this.state.quarterly} />
                ) : (
                  <></>
                )}
              </div>
              {/* <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              <CardPageVisits />
            </div> */}
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <Sticky topOffset={-10}>
              {({ style }) => (
                <h1 style={style}>
                  <div className="p-4">
                    <MyCardProfile />
                  </div>
                </h1>
              )}
            </Sticky>
          </div>
        </div>
      </StickyContainer>
    ) : (
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap pb4 w-full xl:w-12/12 mb-12 xl:mb-0">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <MyKPICard
                  title="Total Revenue"
                  value="83.36 Bn"
                  date="Sep 25, 2021"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <MyKPICard
                  title="Gross Profit"
                  value="35.17 Bn"
                  date="Sep 25, 2021"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <MyKPICard
                  title="Operating Income"
                  value="23.79 Bn"
                  date="Sep 25, 2021"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <MyKPICard
                  title="Net Income"
                  value="20.55 Bn"
                  date="Sep 25, 2021"
                />
              </div>
            </div>
            <div className="flex flex-wrap pb4 w-full xl:w-12/12 mb-12 xl:mb-0">
              <div className="w-full xl:w-8/12 px-4">
                <MyESGCard esg={apple_esg} />
              </div>
              <div className="flex flex-wrap w-full xl:w-4/12">
                <div className="w-full xl:w-12/12 pb-4">
                  <MyESGKPI title="ESG - Total Score" esg={apple_esg} />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              <MyActions steps={apple_esg.Steps} />
            </div>
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              {this.state.stocks.length ? (
                <MyStocksCard prices={this.state.stocks} />
              ) : (
                <Oval
                  heigth="100"
                  width="100"
                  color="grey"
                  ariaLabel="loading"
                />
              )}
            </div>
            <div className="w-full xl:w-12/12 px-4">
              {this.state.quarterly.length ? (
                <MyBarChart quarterly={this.state.quarterly} />
              ) : (
                <></>
              )}
            </div>
          
            {/* <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                <CardPageVisits />
              </div> */}
          </div>
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <div className="p-4">
            <MyCardProfile />
          </div>
        </div>
      </div>
    );
  }
}
