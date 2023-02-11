/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TaskLaneProps } from "./TaskLane";
import { TaskCardProps } from "./TaskCard";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskLaneConcreteOverridesProps = {
    TaskLaneConcrete?: PrimitiveOverrideProps<ViewProps>;
    TaskLane?: TaskLaneProps;
    TaskCard34583500?: TaskCardProps;
    TaskCard34583503?: TaskCardProps;
    TaskCard34583506?: TaskCardProps;
} & EscapeHatchProps;
export declare type TaskLaneConcreteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TaskLaneConcreteOverridesProps | undefined | null;
}>;
export default function TaskLaneConcrete(props: TaskLaneConcreteProps): React.ReactElement;
