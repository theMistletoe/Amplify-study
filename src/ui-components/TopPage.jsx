/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MarketingFooter from "./MarketingFooter";
import Features4x1 from "./Features4x1";
import HeroLayout1 from "./HeroLayout1";
import { Flex, View } from "@aws-amplify/ui-react";
export default function TopPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1450px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TopPage")}
      {...rest}
    >
      <MarketingFooter
        width="1440px"
        height="400px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="72.41%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MarketingFooter")}
      ></MarketingFooter>
      <Features4x1
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="40.9%"
        bottom="27.59%"
        left="0%"
        right="0%"
        padding="40px 140px 40px 140px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Features4x1")}
      ></Features4x1>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="1440px"
        height="500px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="6.41%"
        bottom="59.1%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
      <Flex {...getOverrideProps(overrides, "NavBar")}></Flex>
    </View>
  );
}
