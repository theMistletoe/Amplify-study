/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TaskCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TaskCard")}
      {...rest}
    >
      <View
        width="256px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 1px 0px rgba(0.03529411926865578, 0.11764705926179886, 0.25882354378700256, 0.25)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="13px"
        fontWeight="400"
        color="rgba(23,43,77,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="97px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.75%"
        bottom="18.75%"
        left="2.34%"
        right="59.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="タスクタイトル"
        {...getOverrideProps(
          overrides,
          "\u30BF\u30B9\u30AF\u30BF\u30A4\u30C8\u30EB"
        )}
      ></Text>
    </View>
  );
}
