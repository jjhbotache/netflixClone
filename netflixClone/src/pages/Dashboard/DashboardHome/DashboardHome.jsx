import { useNavigate } from "react-router-dom";
import DashboardNav from "../../../components/DashboardNav/DashboardNav";
import DashboardSlider from "../../../components/DashboardSlider/DashboardSlider";
import { CoverFirstDiv, SlidersContainer } from "./DashboardHomeStyledComponents";
import DashboardFooter from "../../../components/DashboardFooter/DashboardFooter";

export default function DashboardHome() {
  const profileId = localStorage.getItem("profileId");
  // if there is no profileId, redirect to /dashboard/profile
  const navigate = useNavigate();
  if (!profileId) navigate("/dashboard/profile");

  const arrayInfo1 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcL-TCuDYQy8AZpOBDHD4avuNv0n8fn0YgJBLGRNz3XOCci_CiFdY9adbW_lwrsd6-ypnIv1YETxOvYwy5IRxEGQ6YpU4D3vpHIFcInxbBeDX2Nx5LpVcST5sum8mxitU_3.jpg?r=73f",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcuxRYkNaMi6oo0rLjqNrRh_7wTMwpvDuECSb4ZHG1tBMEKiOQaQ25HTUpm7ks3mXnL9twDB2SYqZBeFE-ZYcfyTQ64M4yw_wVdS01dUlnZ_HR5yNAAJqi8AIW_iaSihENz4RRYyGwSMro9M9-atmCGz-5bC2u_meQPeCq6bLLrD5QVufihkBPoRcWXdLfn76cqNTkUo9uEEXUhip2W-GGLXhZPDnn55MdJl_lCDTrV0WXckxXIjGEO_LTgydpEVGh1be7-dX6EBaLEDFWmaRgm6p7KNEU_L6vO4HgNF3AitSyzUyeVRDo9Rcy3849HwT5P8ytayky_jFPygP_npfT4spkooXGZ7yYVx6V2Dwq7lhCXlKfx7Sg.jpg?r=b42",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzk4K0uD_1vfW5p7cQ1mxLyP2GBKESgBu-cd6mCNbIMHpsWnh-0Xxg2oQF6n-o5-VJib0ifKZcm8BMZCNazouZtPTtSvBvVbzM.jpg?r=e8f",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeVZvN5Dh5MuZdlTD-gyjaAinDXSyw6uHZ8y40cFQ0Ad0g_7UTfY4wvfTexY7TBgbI312HgeZ6z-FVKeCsBMmKyeL8WxSRT9RE8B3E4jpGsNVxHMtovfAX_fl8FXo1C7107b.jpg?r=6fa",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5gdXZW-JWwRwlGmpvTTYcMx3s2dfTgvNbHhOaP5mgfDCGGGIIlmh9dsW8JRALCM1oviFa8-YCWEGQYBwQc1Q4C9SRtJaEGI0lGmW3h1aYUdPBhdnTmggx2VanHCt_duhnBkQgCirJOjedTmhV4STgzSJkFH5StBu2dbxC0uNUI3yFDbgcOY94siPtyd-rEEB6Fd8KF_sgmqnUwEXxSMz6PozUfqgDZmUBD5-fU0YQGgz0fn0aNwEop8ai35X4qyqPsInJbrgM6NajUptw70p_IRqYY88r5rIQuWLwCCzDyWPlYzPV67V4d3snsZGzWNxbGg-RGFPp1YBX-2814k8QimsrDQxbZ8ePZyjV1jWuXUihMfxAQkw.jpg?r=ae3",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQQvyJAq_XToh1h6pu_rPlRmMB_5SZndT2B1Z3JF0Xc54ZzMC972fM-OJTG6VvMXUmKIObIkFiw9UYNfWfEc9XGYEdFvUO0eKW0.jpg?r=8c5",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTYzunp2WJ-_N58A6KZnOLfNXkPgUr2Rd7uTg4uWytcwgZwemUheny5rzAyQONMDt_ELPbe6RQdjyRySgNqkXOWSZbUryT5z62g.jpg?r=bf4",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBISxr3fDmuGfG6eBRHp0ONj1VvA5VC8kyxdu0CkSsqioD6_Ert5wcGHpsNILhCjEi0NjZd_qqVWBiybJt0DTCL1qTuNoQWMy0.jpg?r=bed",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZPzKTokuXZ22HKNdO1G8U3pYJZMqCpUQhIHTA-EWn7zFajsiFDF9VbbQhs1f3R2LrczjTZfgq8UEfNQIV8Xc0XzKooIAHajiRNp7lg8K77ls8oaAYRRlYZmThfmjhxAong.jpg?r=8f2",
  ]
  const arrayInfo2 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcfWu80zKMtgKtV-mohY0RKAfeWXBeOAB0L_Dg_V6o-PROm3lez2EjtWYSjwfjBap-U8l43z4kEJAu8xa3Lqt0uoMb_eDJriCK0QRhRCj2j7mBECflXGtj6yVKH5NKh3B2wp.jpg?r=ec4",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRs_bnLAFDDFhUQePsGoejmlJsovcqR2lP7PKfQIUNXZE3Wd9IPEOvU9rtHOU_hQPjHriyQ1ZIC6wEGTK8pvTiFa6mcmm9Larvw.jpg?r=48e",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfY2AhH31FJHqXvTWgijzOSTMBVoDQPFU2AiFibYUIPTlKlaFcQRsO66eEFdgo1OFvcMvTkGqtUTLcY0eQ059VVNT5vmRDZfqv03YFC-CsL_9QLZp9bvkE0D9pSpTLRsg6Fq.jpg?r=868",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf9WsjTLiow8u8_2i5p5Fl9MEqxFH57urJt54KGY1PvvmWDaUC4j5n49oQixg32n_KfKjId7r9yWXaogM6U8udcFROrIn1NQ2rw.jpg?r=999",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZQ7Qv9Hz2YsteTtaqvRNQyQSi1vVQu4kg8UbIp10FINIfVPaQ6dtCI0tLnGmFn-OuR64NxbOYnGq4x7_jbZrUc_ZZFaWQT8Xiw.jpg?r=2ae",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWT3w_iZ-X_qW2Df_Tf0jlq0QAOQE4ZoVIMcHQPXQqK_nFXox_GAqKQuEs4J6KumvhvCDQtGBVFpeatw6e40JwZzghAMpQMp-I4.jpg?r=90e",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRu1fSMMdqkpUrqmdOvuA0EQi8uDp808UCcnDkbfNJlNAu3MQIdCmZE7MNIyB55YUDlC4uHKO0e7VwhkWdmj5_L2zWwhIfnWMvE.jpg?r=d48",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXmyB-9IGoD2Nqjf_fupk6LjGopB2ffJSGdjcF9zzSYFvIZTO4HJBAcHNcajel3Uk8GA4DBd4vRgXvBjt7s6IEh5jzZ7JzjcdPT5NQLumwtu3QZMFlC_benDKLHazLyX387g.jpg?r=ab4",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzk4K0uD_1vfW5p7cQ1mxLyP2GBKESgBu-cd6mCNbIMHpsWnh-0Xxg2oQF6n-o5-VJib0ifKZcm8BMZCNazouZtPTtSvBvVbzM.jpg?r=e8f",
  ]
  const arrayInfo3 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWQgH8Dk6heEPlX5rw5EEp-cagZnsRioXiIesDak451_n3onLg7kSx4g1y8iTUVX82b9bq3X7xiUBJJTWhlkX_Fcq4u4Q7sxoPahdUWyQlwZ7e2Ev7xkqYQOsq7unvopu4Il.jpg?r=575",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWZ-7WIe4mcv1rPaFEw6vBAfbrxsOB3vXsZtlulPhh_aB3WGL9CxsyM30mh8vlJ5mySdXYjnfMp7CL9gcncAd9Ll_RO95ViygwwuuY19ba_zCAL99q4ZvRLae1POFon-87m5.jpg?r=aca",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABduvScqoCQX6JdcofjGnloW1OJg-RNoh3_1T3tYW6pHNy9MnLqMSrbH_RHL7h2G02WLUkXj5gZXc9W3bsyEWaiLablDxAh6YJHY-JF6qxiHFODAGhSCEt8Jqi1YZJf8l5E0R.jpg?r=390",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQn74_kFespK84uDdt3-AnzX4Zwivp1KfNiqK0BtOIbLF9ekjNyCEcm8MMQAxYFMMdUHojkQpPca4uX3ylOKrbYIZcvfre-qSHrNrypV6OMnL_PG4JHGwO72mo-QshIohysW.jpg?r=6dd",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQs3xch7ti8zIFy_16kGEyJmz-CROeszR3Iht_rBInIg-kCFcPpXZ1vTszbtikFmLi0sEa571-I6zdOllk_3L4nngtor6Dqob3A.jpg?r=05d",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYDPSE3wNRth6-sXis-S-dhXipvhZckLIGOS8lbiF7hZcH4P3TPG4U9ilgz0zKrMc9Eke7HYB6zndTixNvRnZlqeTRXvl7L6X8aaCd2u1VEFo4KJ8ravs-3KF0mItnzD3-tB.jpg?r=1ab",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZOLYlloxTHEXZcNvrkwe5yfLe802mjKpv4LGEsxORWkfGBdVZA5Z7BpmgU_xb_Vl4X6-xrZt3GF7ewWEprtuAFHx3DyHYB50r8yyuACdkJBhjIYYn20yNO2vzKHNw4Xqul9.jpg?r=c42",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXeqJom1iL73oTDDaJaaVc5D0sn_CHBCuqF_yEor5hMXeLgkXvZITzaoc5fke-GWT82-GmjJMVvGUAhikZbBq_U0dPILXRg767t-wanTETBbtnbyaC55WRrTB9jwdOKrWv9U.jpg?r=fb3",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvfO-BIApbCDShMHj9ymsEIzNBUADvJbM5eGWmPAoMwSdxylDM0fowxgMxMXMXCYoCAouzmW97regmfYjkqr_PBZejBbZjzlii3mlirfQRmhhTYWSwnZayiwcl0-MPHbtd1.jpg?r=471",
  ]
  const arrayInfo4 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY9AAmp6v87gYKtXxlNSaROfGeC9bXieXLLkQsafjGuURU5eJT3TqRhntdnDxcTnlXIB8fdCGDH3-5YLVK_IR0adt2E-aZlbsXch74x-cOBac__zPa5Z7tdcmcNRbDkb1xn0.jpg?r=c19",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABer_Z_0vqMOUtlaWwOlvmgLNoW2xCi2wORckYcrmA49SwJxLEVHn-Yr2hfvyfpAGHv82yzpA577ftmXodBbtOJ243GBo17ncdtsg64re9F8DxH3OgsyOJyQdNVZ8eFjv5lfb.jpg?r=2cf",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSvoDHx-xEgucZoQsZfXAhN_7RpA5EA-VhgWNxyxe6oJBPNEDRJWg1L2HoqJ3co2qO36OIdeEHTG5cplvrgaJbpJ48QJdmHd6fw.jpg?r=190",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR1LfqnOBMNbMBfTEuNeBjwVsOLPGESIAeFcsK-oEB1ZjILRPT3NoVCDx1OCWq8PCX3m9RDqTPEcVkNIB5Mw-5nEt6mX9jDN_qY.jpg?r=f5c",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTnr6rmAY6xUoerU1KEbXegV6N3MQLxx7Upzd3dBe9GGegR4JTzq-5C9696ZaebTbcNa2rTFd4ZFrHTSFZmRVHqZ9xf3utWfkcQ.jpg?r=301",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYQQPFquLQCHp-rwHerr7mSzQ8OFosPY_s_KPJqx0n5TTP_PnmrXd9mektLFQJmthNYcNzw33LNu4eb0x98Hfl6tzon06ounUUQ.jpg?r=069",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUKmfU2dfqQVjrPAdfMhlSkgAzjVP-MvG_DBowH0D5_8oa_4GVMAMWCVtYjP90yk_Nym6CB2I2ckvr2JHjAU8X3dHz70djyez5Y.jpg?r=a6d",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbFkozr2MwXDnQKK6SkRyaYCGY1xXulj7Vt8El2pk4kTPPfD-qpfuF7WvJ9FuZJDL1R4yePwXDiSF8JQ-d-QJzBzemaBHGSESEU.jpg?r=919",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfxCpGTxm1GNjFz3w5wAPaUI7rWfLOtmVyrVIoNSNWKVNiBVA8UizkG0KrS81BFdtlK8Uv2ARRemM0y6PfY59r1TSP0ULEfV178.jpg?r=c1c",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTiFrZ9HyMx38axc29hI7TK7nfrmwd0l1Cdipj_Y994WRr0DkFQW0GwJMkkC3iJilUsFCwt0DJDMkrrg2Ix3peAnbZD-hYdWUGM.jpg?r=fe3",
  ]
  const arrayInfo5 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCwEqrHQIV6nlmKLIKKzZgKkZawmztea-QNZSShCrJJOL62xyxMYDpkXgQGKiiRnt63mSeNKAtO2d8ur3Ve-Gr6bJSD5LoP2uJgK42Q8q06z29SzEFlUfnoAZWvFlCmSzcr.jpg?r=83a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZnYd6T_lPzJaA8XuyENDyN2scNGdh3TwNFz-qSBfoR5cTUrVwgsZmnOYhnvwyaxQYVhGUI6zqdYB_NT2pHVQTNWxorsI8eubr1kRudSIcTV3zR5c54wt4CavZBHNzklTVAc.jpg?r=e93",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXUF2AcIqqNVLHVbZAKSUC3lHTWLS6OuqC73thkciCDcKfjC5N9plyC9OI7TZb9If2wZYrbekuVxyP0C5As1gfpLcxlJtEeupwQ.jpg?r=2ed",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbZSEGoQlpMXXjUk7zk5kj_rcMY-9vEfybJN8zI1URdUKIpfAR_Pq48PHSNPChv66as-bT-5eUoxUCX-JAtPJwlai9bTHjaVByA.jpg?r=aed",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdeavpdbfMItMm3B7mVeBPcWyNTWvn5SN9ydJKnzwmcGjvHuVUfykPfrbBhxo_H1k19DQdY2P3CAb9HiK4A3KWAp39e77rhYu90.jpg?r=c47",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBISxr3fDmuGfG6eBRHp0ONj1VvA5VC8kyxdu0CkSsqioD6_Ert5wcGHpsNILhCjEi0NjZd_qqVWBiybJt0DTCL1qTuNoQWMy0.jpg?r=bed",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWF0v5SGIKDdkZYExbnbJiPiO7vzloeV9FOMFj516gW4P8cWDoU8cvio7ikvTXHeVxrbCYG_akjCdIwgrZwbEpWC0vvpivF_bm-UeR60fM9-LIVsD0OVbrrLqZrWtRkfV0o_.jpg?r=43b",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622",
  ]
  const arrayInfo6 = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYyN8h9tZ9KjyFqe8L7C1cwY9JOVxFFMUx-T7zy880BoRbRks9en_4mRuUMfpybM6AzI-Kgo0LoIoj9LBlFw9cIGYZ2HA1prtC94IIfGcvd9c4mo-RzIAGf1doqOkXvsp-fi.jpg?r=981",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeD2uZCHULtiRnkWdNFEwUgELSU-wCc19fHf_vk78ednXF4fXZPBsEGnjSVl_1HFkOunWE1L7aenSeb7tplQ3ynXAlE9wI6h7eCupAa1o42odzm7qi89f8Rm3upTHkTShykI.jpg?r=623",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZsTO7g3lv0vGrNGY0G4nMoQWFALq0DyF5WrZR35NFbdzHM0GOvCUSKsIt9bF-KKY7hciq2JLQHPwA_I4LNShLQ2nVXcVWiIVPw.jpg?r=044",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXzkOFa3CP06kJjnRyrVL52TIYAFCrQMMdpQqt9i4VtyRgGe8pvpdkn_zwkPggLIS1yIhfkQcwnQDdHEC96NJsK0jE5QQnq3q0.jpg?r=981",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZw6iTg93RazM-bUoDJe2sM5uNovpJWY7euzqqcIYKbQXUY1QdGJJeqyIPj1sXUzCrvYuRyXLGQoQNrQMf_cYYPjg0Q41KwUXMIZB70O3A4GnGpeYpsjfZBJuNM1Jx1ZVCFt5mauBU488VaJqkdCeDJHyfYLykxOqvbqD1X2fNEd3dGcIvRu2n1XdDG9PrJRfUkzqZB6LBFSor5tqZxZF3f4Jx96eS8v55OSw1Nbnz4H9IJUOJccqkT72hrCwG3xBFMY8Mmo5pUJp3r8Ag0ZgD7dHDZ92VCCR2QKZVadrQJ7kJGKeNSOy5TR.jpg?r=f9a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5gdXZW-JWwRwlGmpvTTYcMx3s2dfTgvNbHhOaP5mgfDCGGGIIlmh9dsW8JRALCM1oviFa8-YCWEGQYBwQc1Q4C9SRtJaEGI0lGmW3h1aYUdPBhdnTmggx2VanHCt_duhnBkQgCirJOjedTmhV4STgzSJkFH5StBu2dbxC0uNUI3yFDbgcOY94siPtyd-rEEB6Fd8KF_sgmqnUwEXxSMz6PozUfqgDZmUBD5-fU0YQGgz0fn0aNwEop8ai35X4qyqPsInJbrgM6NajUptw70p_IRqYY88r5rIQuWLwCCzDyWPlYzPV67V4d3snsZGzWNxbGg-RGFPp1YBX-2814k8QimsrDQxbZ8ePZyjV1jWuXUihMfxAQkw.jpg?r=ae3",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU93kw_7C7U8v5Ahq8JM-Z2fpvU8d3RfIEL09Ss_EUIFSop8NokH4p6iiqkkH-xDWw5IOixatlCPnQEokF01X0dtUizxEexncxZarxEITlnka-YdVN1oWIOcN2gTxVyEtJYd.jpg?r=b29",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkpEemKDoatoKVFYy9hRjPT0IyBeq2ZhruPyTKFte3XkzNw6laYZ1GwsHTeXb26J7mxP9pHZ3a8X8YQuTafOQFgEN9ZLNg8Tbu1ER_T78NNyY0xp9QF6xpsR-J0SClzO3Nn.jpg?r=8b0",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUrUDBtnwKdjYgsixCE4kat40FBfYRRUkS9VA_T1zLb3Gt81qVQTbd7dPRvsXtrBoqOFMooLb8Om5l7JQG1g-QPBPuqJlkSo2Bu3xbvtoJQNQhEF1cKyVMzmOsoMLPMs6si3.jpg?r=a51",
  ]
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

  const imgsArrays = [
    {
      title: "We belive you'll love these",
      array: arrayInfo1,
    },
    {
      title: "currently on Netflix",
      array: arrayInfo2,
    },
    {
      title: "continue watching",
      array: arrayInfo3,
    },
    {
      title: "dramatic series",
      array: arrayInfo4,
    },
    {
      title: "Irreverent programs clamed by critics",
      array: arrayInfo5,
    },
    {
      title: "Becase you saw DEATH NOTE ",
      array: arrayInfo6,
    },
    {
      title: "Comedies",
      array: arrayInfo7,
    },
  ]
  return (
    <>
      <DashboardNav />
      <CoverFirstDiv>
        <img
          className="mainImg"
          src="https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR9zC-ofK8psbXWf2BNdL1kpZ6EIDKb7Y4rwUCaxok4DjNIB55s9zN2Z0RacNJ758lvtQAzOUOb7_9Sxo6qaX_R6r-BDyViDfjMc.jpg?r=77e"
          alt="cover"
        />
        <div className="overlayedContent">
          <img
            alt="La sociedad de la nieve"
            className="titleImg "
            src="https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRHVRDZqY2gT_QtOThsEuLd1JoEteSdcZmAXISFUvEUOznCo-gRr25Xx9ilCwilukhFYoKtmD32KsoWPfHS773eCVVA_AKjab1Ql5T_Bmjfp2LswCxvTdqZ9JzQOU5S2M9lVK3KKnof8ogyE3I9mkhTUWSiWbry-_rxHhvBfJ0yJvhPRo2yFQg.png?r=bab"
            title="La sociedad de la nieve"
          />
          <div className="titleText">
            <svg viewBox="0 0 28 30" class="svg-icon svg-icon-top-10-badge">
              <rect x="0" width="28" height="30" rx="3" fill="#e50914"></rect>
              <path
                d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533"
                fill="#FFFFFF"
              ></path>
              <polygon
                fill="#FFFFFF"
                points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206"
              ></polygon>
              <path
                d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842"
                fill="#FFFFFF"
              ></path>
              <polygon
                fill="#FFFFFF"
                points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061"
              ></polygon>
            </svg>
            N.º 1 en películas hoy
          </div>
          <p className="synopsis">
            Cuando un avión se estrella en el remoto corazón de los Andes, los
            sobrevivientes unen fuerzas y pasan a ser su mayor esperanza para
            volver a casa.
          </p>
          <div className="btnsContainer">
            <button className="playBtn" type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ltr-4z3qvp e1svuwfo1"
                data-name="Play"
                aria-hidden="true"
              >
                <path
                  d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="ltr-1vh9doa">Reproducir</span>
            </button>
            <button class="moreInfoBtn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="CircleI" aria-hidden="true" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
              <span class="ltr-1vh9doa">Más información</span>
            </button>
          </div>
        </div>
      </CoverFirstDiv>

      <SlidersContainer >
      {
        imgsArrays.map((object,index)=>{
          return(
              <DashboardSlider key={index} title={object.title} infoArray={object.array}/>
          )
        })
      }
      </SlidersContainer>
      <DashboardFooter />
    </>
  );
}
