/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Text } from "@aws-amplify/ui-react";
export default function NoteDetailUI(props) {
  const { note, overrides, ...rest } = props;
  return (
    <Flex
      gap="23px"
      direction="column"
      width="660px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="30px 21px 30px 21px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteDetailUI")}
      {...rest}
    >
      <Heading
        shrink="0"
        alignSelf="stretch"
        level="1"
        children={note?.title}
        {...getOverrideProps(overrides, "title")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={note?.text}
        {...getOverrideProps(overrides, "text")}
      ></Text>
    </Flex>
  );
}
