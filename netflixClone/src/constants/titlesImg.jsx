
const arrayInfo1 = [
  {
      "id": 1,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcL-TCuDYQy8AZpOBDHD4avuNv0n8fn0YgJBLGRNz3XOCci_CiFdY9adbW_lwrsd6-ypnIv1YETxOvYwy5IRxEGQ6YpU4D3vpHIFcInxbBeDX2Nx5LpVcST5sum8mxitU_3.jpg?r=73f"
  },
  {
      "id": 2,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcuxRYkNaMi6oo0rLjqNrRh_7wTMwpvDuECSb4ZHG1tBMEKiOQaQ25HTUpm7ks3mXnL9twDB2SYqZBeFE-ZYcfyTQ64M4yw_wVdS01dUlnZ_HR5yNAAJqi8AIW_iaSihENz4RRYyGwSMro9M9-atmCGz-5bC2u_meQPeCq6bLLrD5QVufihkBPoRcWXdLfn76cqNTkUo9uEEXUhip2W-GGLXhZPDnn55MdJl_lCDTrV0WXckxXIjGEO_LTgydpEVGh1be7-dX6EBaLEDFWmaRgm6p7KNEU_L6vO4HgNF3AitSyzUyeVRDo9Rcy3849HwT5P8ytayky_jFPygP_npfT4spkooXGZ7yYVx6V2Dwq7lhCXlKfx7Sg.jpg?r=b42"
  },
  {
      "id": 3,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzk4K0uD_1vfW5p7cQ1mxLyP2GBKESgBu-cd6mCNbIMHpsWnh-0Xxg2oQF6n-o5-VJib0ifKZcm8BMZCNazouZtPTtSvBvVbzM.jpg?r=e8f"
  },
  {
      "id": 4,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeVZvN5Dh5MuZdlTD-gyjaAinDXSyw6uHZ8y40cFQ0Ad0g_7UTfY4wvfTexY7TBgbI312HgeZ6z-FVKeCsBMmKyeL8WxSRT9RE8B3E4jpGsNVxHMtovfAX_fl8FXo1C7107b.jpg?r=6fa"
  },
  {
      "id": 5,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5gdXZW-JWwRwlGmpvTTYcMx3s2dfTgvNbHhOaP5mgfDCGGGIIlmh9dsW8JRALCM1oviFa8-YCWEGQYBwQc1Q4C9SRtJaEGI0lGmW3h1aYUdPBhdnTmggx2VanHCt_duhnBkQgCirJOjedTmhV4STgzSJkFH5StBu2dbxC0uNUI3yFDbgcOY94siPtyd-rEEB6Fd8KF_sgmqnUwEXxSMz6PozUfqgDZmUBD5-fU0YQGgz0fn0aNwEop8ai35X4qyqPsInJbrgM6NajUptw70p_IRqYY88r5rIQuWLwCCzDyWPlYzPV67V4d3snsZGzWNxbGg-RGFPp1YBX-2814k8QimsrDQxbZ8ePZyjV1jWuXUihMfxAQkw.jpg?r=ae3"
  },
  {
      "id": 6,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a"
  },
  {
      "id": 7,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQQvyJAq_XToh1h6pu_rPlRmMB_5SZndT2B1Z3JF0Xc54ZzMC972fM-OJTG6VvMXUmKIObIkFiw9UYNfWfEc9XGYEdFvUO0eKW0.jpg?r=8c5"
  },
  {
      "id": 8,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTYzunp2WJ-_N58A6KZnOLfNXkPgUr2Rd7uTg4uWytcwgZwemUheny5rzAyQONMDt_ELPbe6RQdjyRySgNqkXOWSZbUryT5z62g.jpg?r=bf4"
  },
  {
      "id": 9,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBISxr3fDmuGfG6eBRHp0ONj1VvA5VC8kyxdu0CkSsqioD6_Ert5wcGHpsNILhCjEi0NjZd_qqVWBiybJt0DTCL1qTuNoQWMy0.jpg?r=bed"
  },
  {
      "id": 10,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZPzKTokuXZ22HKNdO1G8U3pYJZMqCpUQhIHTA-EWn7zFajsiFDF9VbbQhs1f3R2LrczjTZfgq8UEfNQIV8Xc0XzKooIAHajiRNp7lg8K77ls8oaAYRRlYZmThfmjhxAong.jpg?r=8f2"
  }
]
const arrayInfo2 = [
  {
      "id": 11,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcfWu80zKMtgKtV-mohY0RKAfeWXBeOAB0L_Dg_V6o-PROm3lez2EjtWYSjwfjBap-U8l43z4kEJAu8xa3Lqt0uoMb_eDJriCK0QRhRCj2j7mBECflXGtj6yVKH5NKh3B2wp.jpg?r=ec4"
  },
  {
      "id": 12,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRs_bnLAFDDFhUQePsGoejmlJsovcqR2lP7PKfQIUNXZE3Wd9IPEOvU9rtHOU_hQPjHriyQ1ZIC6wEGTK8pvTiFa6mcmm9Larvw.jpg?r=48e"
  },
  {
      "id": 13,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfY2AhH31FJHqXvTWgijzOSTMBVoDQPFU2AiFibYUIPTlKlaFcQRsO66eEFdgo1OFvcMvTkGqtUTLcY0eQ059VVNT5vmRDZfqv03YFC-CsL_9QLZp9bvkE0D9pSpTLRsg6Fq.jpg?r=868"
  },
  {
      "id": 14,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622"
  },
  {
      "id": 15,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf9WsjTLiow8u8_2i5p5Fl9MEqxFH57urJt54KGY1PvvmWDaUC4j5n49oQixg32n_KfKjId7r9yWXaogM6U8udcFROrIn1NQ2rw.jpg?r=999"
  },
  {
      "id": 16,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZQ7Qv9Hz2YsteTtaqvRNQyQSi1vVQu4kg8UbIp10FINIfVPaQ6dtCI0tLnGmFn-OuR64NxbOYnGq4x7_jbZrUc_ZZFaWQT8Xiw.jpg?r=2ae"
  },
  {
      "id": 17,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWT3w_iZ-X_qW2Df_Tf0jlq0QAOQE4ZoVIMcHQPXQqK_nFXox_GAqKQuEs4J6KumvhvCDQtGBVFpeatw6e40JwZzghAMpQMp-I4.jpg?r=90e"
  },
  {
      "id": 18,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRu1fSMMdqkpUrqmdOvuA0EQi8uDp808UCcnDkbfNJlNAu3MQIdCmZE7MNIyB55YUDlC4uHKO0e7VwhkWdmj5_L2zWwhIfnWMvE.jpg?r=d48"
  },
  {
      "id": 19,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXmyB-9IGoD2Nqjf_fupk6LjGopB2ffJSGdjcF9zzSYFvIZTO4HJBAcHNcajel3Uk8GA4DBd4vRgXvBjt7s6IEh5jzZ7JzjcdPT5NQLumwtu3QZMFlC_benDKLHazLyX387g.jpg?r=ab4"
  },
  {
      "id": 20,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUzk4K0uD_1vfW5p7cQ1mxLyP2GBKESgBu-cd6mCNbIMHpsWnh-0Xxg2oQF6n-o5-VJib0ifKZcm8BMZCNazouZtPTtSvBvVbzM.jpg?r=e8f"
  }
]
const arrayInfo3 = [
  {
      "id": 21,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622"
  },
  {
      "id": 22,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWQgH8Dk6heEPlX5rw5EEp-cagZnsRioXiIesDak451_n3onLg7kSx4g1y8iTUVX82b9bq3X7xiUBJJTWhlkX_Fcq4u4Q7sxoPahdUWyQlwZ7e2Ev7xkqYQOsq7unvopu4Il.jpg?r=575"
  },
  {
      "id": 23,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWZ-7WIe4mcv1rPaFEw6vBAfbrxsOB3vXsZtlulPhh_aB3WGL9CxsyM30mh8vlJ5mySdXYjnfMp7CL9gcncAd9Ll_RO95ViygwwuuY19ba_zCAL99q4ZvRLae1POFon-87m5.jpg?r=aca"
  },
  {
      "id": 24,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABduvScqoCQX6JdcofjGnloW1OJg-RNoh3_1T3tYW6pHNy9MnLqMSrbH_RHL7h2G02WLUkXj5gZXc9W3bsyEWaiLablDxAh6YJHY-JF6qxiHFODAGhSCEt8Jqi1YZJf8l5E0R.jpg?r=390"
  },
  {
      "id": 25,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQn74_kFespK84uDdt3-AnzX4Zwivp1KfNiqK0BtOIbLF9ekjNyCEcm8MMQAxYFMMdUHojkQpPca4uX3ylOKrbYIZcvfre-qSHrNrypV6OMnL_PG4JHGwO72mo-QshIohysW.jpg?r=6dd"
  },
  {
      "id": 26,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQs3xch7ti8zIFy_16kGEyJmz-CROeszR3Iht_rBInIg-kCFcPpXZ1vTszbtikFmLi0sEa571-I6zdOllk_3L4nngtor6Dqob3A.jpg?r=05d"
  },
  {
      "id": 27,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYDPSE3wNRth6-sXis-S-dhXipvhZckLIGOS8lbiF7hZcH4P3TPG4U9ilgz0zKrMc9Eke7HYB6zndTixNvRnZlqeTRXvl7L6X8aaCd2u1VEFo4KJ8ravs-3KF0mItnzD3-tB.jpg?r=1ab"
  },
  {
      "id": 28,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZOLYlloxTHEXZcNvrkwe5yfLe802mjKpv4LGEsxORWkfGBdVZA5Z7BpmgU_xb_Vl4X6-xrZt3GF7ewWEprtuAFHx3DyHYB50r8yyuACdkJBhjIYYn20yNO2vzKHNw4Xqul9.jpg?r=c42"
  },
  {
      "id": 29,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXeqJom1iL73oTDDaJaaVc5D0sn_CHBCuqF_yEor5hMXeLgkXvZITzaoc5fke-GWT82-GmjJMVvGUAhikZbBq_U0dPILXRg767t-wanTETBbtnbyaC55WRrTB9jwdOKrWv9U.jpg?r=fb3"
  },
  {
      "id": 30,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvfO-BIApbCDShMHj9ymsEIzNBUADvJbM5eGWmPAoMwSdxylDM0fowxgMxMXMXCYoCAouzmW97regmfYjkqr_PBZejBbZjzlii3mlirfQRmhhTYWSwnZayiwcl0-MPHbtd1.jpg?r=471"
  }
]
const arrayInfo4 = [
  {
      "id": 31,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY9AAmp6v87gYKtXxlNSaROfGeC9bXieXLLkQsafjGuURU5eJT3TqRhntdnDxcTnlXIB8fdCGDH3-5YLVK_IR0adt2E-aZlbsXch74x-cOBac__zPa5Z7tdcmcNRbDkb1xn0.jpg?r=c19"
  },
  {
      "id": 32,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABer_Z_0vqMOUtlaWwOlvmgLNoW2xCi2wORckYcrmA49SwJxLEVHn-Yr2hfvyfpAGHv82yzpA577ftmXodBbtOJ243GBo17ncdtsg64re9F8DxH3OgsyOJyQdNVZ8eFjv5lfb.jpg?r=2cf"
  },
  {
      "id": 33,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSvoDHx-xEgucZoQsZfXAhN_7RpA5EA-VhgWNxyxe6oJBPNEDRJWg1L2HoqJ3co2qO36OIdeEHTG5cplvrgaJbpJ48QJdmHd6fw.jpg?r=190"
  },
  {
      "id": 34,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR1LfqnOBMNbMBfTEuNeBjwVsOLPGESIAeFcsK-oEB1ZjILRPT3NoVCDx1OCWq8PCX3m9RDqTPEcVkNIB5Mw-5nEt6mX9jDN_qY.jpg?r=f5c"
  },
  {
      "id": 35,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTnr6rmAY6xUoerU1KEbXegV6N3MQLxx7Upzd3dBe9GGegR4JTzq-5C9696ZaebTbcNa2rTFd4ZFrHTSFZmRVHqZ9xf3utWfkcQ.jpg?r=301"
  },
  {
      "id": 36,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYQQPFquLQCHp-rwHerr7mSzQ8OFosPY_s_KPJqx0n5TTP_PnmrXd9mektLFQJmthNYcNzw33LNu4eb0x98Hfl6tzon06ounUUQ.jpg?r=069"
  },
  {
      "id": 37,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUKmfU2dfqQVjrPAdfMhlSkgAzjVP-MvG_DBowH0D5_8oa_4GVMAMWCVtYjP90yk_Nym6CB2I2ckvr2JHjAU8X3dHz70djyez5Y.jpg?r=a6d"
  },
  {
      "id": 38,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbFkozr2MwXDnQKK6SkRyaYCGY1xXulj7Vt8El2pk4kTPPfD-qpfuF7WvJ9FuZJDL1R4yePwXDiSF8JQ-d-QJzBzemaBHGSESEU.jpg?r=919"
  },
  {
      "id": 39,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfxCpGTxm1GNjFz3w5wAPaUI7rWfLOtmVyrVIoNSNWKVNiBVA8UizkG0KrS81BFdtlK8Uv2ARRemM0y6PfY59r1TSP0ULEfV178.jpg?r=c1c"
  },
  {
      "id": 40,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTiFrZ9HyMx38axc29hI7TK7nfrmwd0l1Cdipj_Y994WRr0DkFQW0GwJMkkC3iJilUsFCwt0DJDMkrrg2Ix3peAnbZD-hYdWUGM.jpg?r=fe3"
  }
]
const arrayInfo5 = [
  {
      "id": 41,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCwEqrHQIV6nlmKLIKKzZgKkZawmztea-QNZSShCrJJOL62xyxMYDpkXgQGKiiRnt63mSeNKAtO2d8ur3Ve-Gr6bJSD5LoP2uJgK42Q8q06z29SzEFlUfnoAZWvFlCmSzcr.jpg?r=83a"
  },
  {
      "id": 42,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZnYd6T_lPzJaA8XuyENDyN2scNGdh3TwNFz-qSBfoR5cTUrVwgsZmnOYhnvwyaxQYVhGUI6zqdYB_NT2pHVQTNWxorsI8eubr1kRudSIcTV3zR5c54wt4CavZBHNzklTVAc.jpg?r=e93"
  },
  {
      "id": 43,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXUF2AcIqqNVLHVbZAKSUC3lHTWLS6OuqC73thkciCDcKfjC5N9plyC9OI7TZb9If2wZYrbekuVxyP0C5As1gfpLcxlJtEeupwQ.jpg?r=2ed"
  },
  {
      "id": 44,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbZSEGoQlpMXXjUk7zk5kj_rcMY-9vEfybJN8zI1URdUKIpfAR_Pq48PHSNPChv66as-bT-5eUoxUCX-JAtPJwlai9bTHjaVByA.jpg?r=aed"
  },
  {
      "id": 45,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdeavpdbfMItMm3B7mVeBPcWyNTWvn5SN9ydJKnzwmcGjvHuVUfykPfrbBhxo_H1k19DQdY2P3CAb9HiK4A3KWAp39e77rhYu90.jpg?r=c47"
  },
  {
      "id": 46,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a"
  },
  {
      "id": 47,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBISxr3fDmuGfG6eBRHp0ONj1VvA5VC8kyxdu0CkSsqioD6_Ert5wcGHpsNILhCjEi0NjZd_qqVWBiybJt0DTCL1qTuNoQWMy0.jpg?r=bed"
  },
  {
      "id": 48,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWF0v5SGIKDdkZYExbnbJiPiO7vzloeV9FOMFj516gW4P8cWDoU8cvio7ikvTXHeVxrbCYG_akjCdIwgrZwbEpWC0vvpivF_bm-UeR60fM9-LIVsD0OVbrrLqZrWtRkfV0o_.jpg?r=43b"
  },
  {
      "id": 49,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ9_FnrsujjA4_3mHOPbgeZiEI4xZ3Fm26KNtbA35ROW-szD1ZX1G0GGFbGdxPv5G3tHLwHByllHJoy3i-VOIXc2VTbtNeNHjQPD6HNHAQYg_JjdaFzKYvYY7LXAaM3jfCic.jpg?r=622"
  }
]
const arrayInfo6 = [
  {
      "id": 50,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYyN8h9tZ9KjyFqe8L7C1cwY9JOVxFFMUx-T7zy880BoRbRks9en_4mRuUMfpybM6AzI-Kgo0LoIoj9LBlFw9cIGYZ2HA1prtC94IIfGcvd9c4mo-RzIAGf1doqOkXvsp-fi.jpg?r=981"
  },
  {
      "id": 51,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeD2uZCHULtiRnkWdNFEwUgELSU-wCc19fHf_vk78ednXF4fXZPBsEGnjSVl_1HFkOunWE1L7aenSeb7tplQ3ynXAlE9wI6h7eCupAa1o42odzm7qi89f8Rm3upTHkTShykI.jpg?r=623"
  },
  {
      "id": 52,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZsTO7g3lv0vGrNGY0G4nMoQWFALq0DyF5WrZR35NFbdzHM0GOvCUSKsIt9bF-KKY7hciq2JLQHPwA_I4LNShLQ2nVXcVWiIVPw.jpg?r=044"
  },
  {
      "id": 53,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXzkOFa3CP06kJjnRyrVL52TIYAFCrQMMdpQqt9i4VtyRgGe8pvpdkn_zwkPggLIS1yIhfkQcwnQDdHEC96NJsK0jE5QQnq3q0.jpg?r=981"
  },
  {
      "id": 54,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZw6iTg93RazM-bUoDJe2sM5uNovpJWY7euzqqcIYKbQXUY1QdGJJeqyIPj1sXUzCrvYuRyXLGQoQNrQMf_cYYPjg0Q41KwUXMIZB70O3A4GnGpeYpsjfZBJuNM1Jx1ZVCFt5mauBU488VaJqkdCeDJHyfYLykxOqvbqD1X2fNEd3dGcIvRu2n1XdDG9PrJRfUkzqZB6LBFSor5tqZxZF3f4Jx96eS8v55OSw1Nbnz4H9IJUOJccqkT72hrCwG3xBFMY8Mmo5pUJp3r8Ag0ZgD7dHDZ92VCCR2QKZVadrQJ7kJGKeNSOy5TR.jpg?r=f9a"
  },
  {
      "id": 55,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5gdXZW-JWwRwlGmpvTTYcMx3s2dfTgvNbHhOaP5mgfDCGGGIIlmh9dsW8JRALCM1oviFa8-YCWEGQYBwQc1Q4C9SRtJaEGI0lGmW3h1aYUdPBhdnTmggx2VanHCt_duhnBkQgCirJOjedTmhV4STgzSJkFH5StBu2dbxC0uNUI3yFDbgcOY94siPtyd-rEEB6Fd8KF_sgmqnUwEXxSMz6PozUfqgDZmUBD5-fU0YQGgz0fn0aNwEop8ai35X4qyqPsInJbrgM6NajUptw70p_IRqYY88r5rIQuWLwCCzDyWPlYzPV67V4d3snsZGzWNxbGg-RGFPp1YBX-2814k8QimsrDQxbZ8ePZyjV1jWuXUihMfxAQkw.jpg?r=ae3"
  },
  {
      "id": 56,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU93kw_7C7U8v5Ahq8JM-Z2fpvU8d3RfIEL09Ss_EUIFSop8NokH4p6iiqkkH-xDWw5IOixatlCPnQEokF01X0dtUizxEexncxZarxEITlnka-YdVN1oWIOcN2gTxVyEtJYd.jpg?r=b29"
  },
  {
      "id": 57,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefHCc-OrKMQbIOALoCimPzA6vVkydpGjQO0KVRBhYPoAvLVrmXvcBfn0sW32b1wnToW8ztYZyx4dCd7zC1ChkvzA_ThLKgXdlGH3dhduV26pbsIphJix5eczJsowGRF-4j_.jpg?r=13a"
  },
  {
      "id": 58,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkpEemKDoatoKVFYy9hRjPT0IyBeq2ZhruPyTKFte3XkzNw6laYZ1GwsHTeXb26J7mxP9pHZ3a8X8YQuTafOQFgEN9ZLNg8Tbu1ER_T78NNyY0xp9QF6xpsR-J0SClzO3Nn.jpg?r=8b0"
  },
  {
      "id": 59,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUrUDBtnwKdjYgsixCE4kat40FBfYRRUkS9VA_T1zLb3Gt81qVQTbd7dPRvsXtrBoqOFMooLb8Om5l7JQG1g-QPBPuqJlkSo2Bu3xbvtoJQNQhEF1cKyVMzmOsoMLPMs6si3.jpg?r=a51"
  }
]
const arrayInfo7 = [
  {
      "id": 60,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRIko2twnNGWYlU9XiKPpuuBuT3WNlDHfqqEEdvmZgX4_70LKAjPo3fKWJW3jUY_KNf0Sn3IPy82WI3-NKkIkiz7MCUj-hQODo8.jpg?r=aba"
  },
  {
      "id": 61,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXWa5QZJ-pOR6C8v2s9yCjzWKSYcMWQtyPqD5LAoE2BQowsF7364J3pIfA0N5Nix28TCEqxy_3nU3JU2L4PIRxCsnKiLpMd9HDI.jpg?r=18a"
  },
  {
      "id": 62,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeCfiwZIElMqJ_azwQ1cNat4fQQMYJ2ni9vl2ovrZlRoSz5ZLDHIpi3pseJk3b0vffpHdOUUpC_y6mXXCT_0o9cKEhy6z2HMHsO2rrGGQg4SDNSu9Y2H_Ep6QB0WF45QFPLw.jpg?r=893"
  },
  {
      "id": 63,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeVZvN5Dh5MuZdlTD-gyjaAinDXSyw6uHZ8y40cFQ0Ad0g_7UTfY4wvfTexY7TBgbI312HgeZ6z-FVKeCsBMmKyeL8WxSRT9RE8B3E4jpGsNVxHMtovfAX_fl8FXo1C7107b.jpg?r=6fa"
  },
  {
      "id": 64,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCnJLB4jDAIAJ4NDUGL9A5SB3T5kURBWiWoo01RdanFXxabJt9T-XGL65rhkEBZbGwK0dNuGTr_5F8D9t_9II7wD-EjSRHzqB9Jq9NLeyJn9g3WpK2xKpVOSaD1LAobALju.jpg?r=4f8"
  },
  {
      "id": 65,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTQC7h7VtGWqmsndpX_YMCFoRqMOk8yqAlRXdNLpV7btLkfWouYfXqVkgxzpVWuPq9qSuHcDZWqOci8Z7GHfSz3WefnmZ2SdWQo.jpg?r=2f5"
  },
  {
      "id": 66,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaVTtx4g0yOO68PZwAdPLM85eXEvVKcnFL14koUxflhhfoS7PrOwBPMlMG9RUdCBVme-7qtpN__T-WfgAipRjH9hthRs5VKxYz3JNUW04RT1UNEG5CkkGIHM6_DO9fYT0313.jpg?r=4a2"
  },
  {
      "id": 67,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXcNehnN7rDkr1cmaMR-uibh1w3YbH3zxnOmrg1Y48MGyUk6aioMWQ9ZQ1P63fDH4-tvLq6yxu8KjPJ7FqWoVFS9wxiYviusMhQ.jpg?r=2b5"
  },
  {
      "id": 68,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUEcO0mtl2MTQ-ufNdyUyjQWWP-3IoVYOkOKnBMJmL3hhzRktZqcB57hxFPiSb8DLi6kWE8cB14wR4z5AMoLIUP__PZ1d2d9KHQ.jpg?r=ac7"
  },
  {
      "id": 69,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfU6KKmfwhTMqefqmD5x8BaTgt-qlnE40NJpKJfHqOGn2nPCmfp3czIS2K3MwH9yk6whQTwmQTLYMvNFjnCXo87lkW-fYZC38hiCdQ8Q_ctc10-fEd2B1c7usRfbxFuRBxeu.jpg?r=58b"
  },
  {
      "id": 70,
      "url": "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXyzXxdVO3Dzc-GqGNa44Pv8YdyDt0PEc7dLbp1X7YY3igwPheCFawCVegikQkSmzzBW2oYcNQhcOWYNkoTW5VL70OIg206-Ku8EisWwnV3GAIQyBnoxnJ8GTopgE-GnLQV_.jpg?r=730"
  }
]
export const imgsArrays = [
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

export function getImgById(paramsid) {
    const id = parseInt(paramsid)
    const array = imgsArrays.map(a=>a.array).flat()
    const img = array.find((item) => item.id === id)
    return img
}