/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TaskLane(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="272px"
      height="205px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TaskLane")}
      {...rest}
    >
      <View
        width="272px"
        height="205px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(235,236,240,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="13px"
        fontWeight="400"
        color="rgba(94,108,132,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84.39%"
        bottom="5.85%"
        left="2.94%"
        right="66.18%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="カードを追加"
        {...getOverrideProps(overrides, "\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="15px"
        fontWeight="700"
        color="rgba(104,112,120,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.85%"
        bottom="84.39%"
        left="2.94%"
        right="82.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="TODO"
        {...getOverrideProps(overrides, "TODO")}
      ></Text>
    </View>
  );
}
