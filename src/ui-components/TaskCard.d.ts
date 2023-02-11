/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskCardOverridesProps = {
    TaskCard?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "\u30BF\u30B9\u30AF\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TaskCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TaskCardOverridesProps | undefined | null;
}>;
export default function TaskCard(props: TaskCardProps): React.ReactElement;
