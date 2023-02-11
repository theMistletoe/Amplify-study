/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskLaneOverridesProps = {
    TaskLane?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "\u30AB\u30FC\u30C9\u3092\u8FFD\u52A0"?: PrimitiveOverrideProps<TextProps>;
    TODO?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TaskLaneProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TaskLaneOverridesProps | undefined | null;
}>;
export default function TaskLane(props: TaskLaneProps): React.ReactElement;
