/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Memo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemoUIOverridesProps = {
    MemoUI?: PrimitiveOverrideProps<FlexProps>;
    text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MemoUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    memo?: Memo;
} & {
    overrides?: MemoUIOverridesProps | undefined | null;
}>;
export default function MemoUI(props: MemoUIProps): React.ReactElement;
