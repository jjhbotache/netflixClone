import { useState } from "react";
import { ProfileCreateContainer } from "./ProfileCreateStyledComponents";
import InfiniteSlider from "../../../components/ProfileComponents/InfiniteSlider/InfiniteSlider";

export default function ProfileCreate() {
  const imgs = [
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZEX3QGo9CY-QYp5coxwoY4sG7IipZ4-b_xDtkllL2fSjefwKNz1-pDbVdSLEZKpn3X-pcPquDKaei_SfQhBQG-aAKPSxnkRXNJ3.png?r=438",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWgK2iOBuSWOJ-ovJHR1fDdV-c-rgWy2Olii4sJjjceLFuXrLHAV_mPbt1Q2LGQ5v1HilXIfUxycCqSOKvHJv8y87GkXIpWUCy8J.png?r=a8d",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaeOl2mVjc2BG7twbwecrYFqzH-xeUHR0MXXlfZUhwBiL3bdqn_k49kPd6Y38yDWTWzbI6Mjkx3tsbox50V2Fymf8FvdZLHNSrT5.png?r=d4a",
    "https://occ-0-1472-116.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXrTcV6KUM7rT_zVf_3kE4nFkjtI2IcTwghlVn3IxHnH_4ZVTt3V4AKhLj6fTl9JjCZraUA2hnugtSwxWjufGgxRYRtV1D64nRQ2.png?r=a13",
  ];


  return (
    <ProfileCreateContainer>
      <h1>Create a profile</h1>
      <hr />
      <InfiniteSlider imgArray={imgs} />
    </ProfileCreateContainer>
  );
};
