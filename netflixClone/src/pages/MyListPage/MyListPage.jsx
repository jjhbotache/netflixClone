import DashboardFooter from "../../components/DashboardComponents/DashboardFooter/DashboardFooter";
import DashboardNav from "../../components/DashboardComponents/DashboardNav/DashboardNav";
import { MyListPageContainer } from "./MyListPageStyledComponents";

export default function MyListPage() {

  const arrayInfo7 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRIko2twnNGWYlU9XiKPpuuBuT3WNlDHfqqEEdvmZgX4_70LKAjPo3fKWJW3jUY_KNf0Sn3IPy82WI3-NKkIkiz7MCUj-hQODo8.jpg?r=aba",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXWa5QZJ-pOR6C8v2s9yCjzWKSYcMWQtyPqD5LAoE2BQowsF7364J3pIfA0N5Nix28TCEqxy_3nU3JU2L4PIRxCsnKiLpMd9HDI.jpg?r=18a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeCfiwZIElMqJ_azwQ1cNat4fQQMYJ2ni9vl2ovrZlRoSz5ZLDHIpi3pseJk3b0vffpHdOUUpC_y6mXXCT_0o9cKEhy6z2HMHsO2rrGGQg4SDNSu9Y2H_Ep6QB0WF45QFPLw.jpg?r=893",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeVZvN5Dh5MuZdlTD-gyjaAinDXSyw6uHZ8y40cFQ0Ad0g_7UTfY4wvfTexY7TBgbI312HgeZ6z-FVKeCsBMmKyeL8WxSRT9RE8B3E4jpGsNVxHMtovfAX_fl8FXo1C7107b.jpg?r=6fa",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCnJLB4jDAIAJ4NDUGL9A5SB3T5kURBWiWoo01RdanFXxabJt9T-XGL65rhkEBZbGwK0dNuGTr_5F8D9t_9II7wD-EjSRHzqB9Jq9NLeyJn9g3WpK2xKpVOSaD1LAobALju.jpg?r=4f8",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTQC7h7VtGWqmsndpX_YMCFoRqMOk8yqAlRXdNLpV7btLkfWouYfXqVkgxzpVWuPq9qSuHcDZWqOci8Z7GHfSz3WefnmZ2SdWQo.jpg?r=2f5",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaVTtx4g0yOO68PZwAdPLM85eXEvVKcnFL14koUxflhhfoS7PrOwBPMlMG9RUdCBVme-7qtpN__T-WfgAipRjH9hthRs5VKxYz3JNUW04RT1UNEG5CkkGIHM6_DO9fYT0313.jpg?r=4a2",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXcNehnN7rDkr1cmaMR-uibh1w3YbH3zxnOmrg1Y48MGyUk6aioMWQ9ZQ1P63fDH4-tvLq6yxu8KjPJ7FqWoVFS9wxiYviusMhQ.jpg?r=2b5",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUEcO0mtl2MTQ-ufNdyUyjQWWP-3IoVYOkOKnBMJmL3hhzRktZqcB57hxFPiSb8DLi6kWE8cB14wR4z5AMoLIUP__PZ1d2d9KHQ.jpg?r=ac7",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfU6KKmfwhTMqefqmD5x8BaTgt-qlnE40NJpKJfHqOGn2nPCmfp3czIS2K3MwH9yk6whQTwmQTLYMvNFjnCXo87lkW-fYZC38hiCdQ8Q_ctc10-fEd2B1c7usRfbxFuRBxeu.jpg?r=58b",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXyzXxdVO3Dzc-GqGNa44Pv8YdyDt0PEc7dLbp1X7YY3igwPheCFawCVegikQkSmzzBW2oYcNQhcOWYNkoTW5VL70OIg206-Ku8EisWwnV3GAIQyBnoxnJ8GTopgE-GnLQV_.jpg?r=730",
  ]

  return(
    <>
      <DashboardNav />
      <MyListPageContainer>
        <h1>My list</h1>
        <div className="my-list">
          {arrayInfo7.map((item, index) => (
            <img src={item} alt="my list" key={index} />
          ))}
        </div>
      </MyListPageContainer>
      <DashboardFooter/>
    </>
  )
};
