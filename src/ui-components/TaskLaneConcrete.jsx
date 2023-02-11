/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import TaskLane from "./TaskLane";
import TaskCard from "./TaskCard";
import { View } from "@aws-amplify/ui-react";
export default function TaskLaneConcrete(props) {
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
      {...getOverrideProps(overrides, "TaskLaneConcrete")}
      {...rest}
    >
      <TaskLane
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
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TaskLane")}
      ></TaskLane>
      <TaskCard
        width="256px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20.98%"
        bottom="63.41%"
        left="2.94%"
        right="2.94%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TaskCard34583500")}
      ></TaskCard>
      <TaskCard
        width="256px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.95%"
        bottom="42.44%"
        left="2.94%"
        right="2.94%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TaskCard34583503")}
      ></TaskCard>
      <TaskCard
        width="256px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="62.93%"
        bottom="21.46%"
        left="2.94%"
        right="2.94%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TaskCard34583506")}
      ></TaskCard>
    </View>
  );
}
