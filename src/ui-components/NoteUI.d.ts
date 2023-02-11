/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Note } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUIOverridesProps = {
    NoteUI?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    text?: PrimitiveOverrideProps<TextProps>;
    buttons?: PrimitiveOverrideProps<FlexProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
    delete?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: Note;
} & {
    overrides?: NoteUIOverridesProps | undefined | null;
}>;
export default function NoteUI(props: NoteUIProps): React.ReactElement;
