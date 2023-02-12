/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Note } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteDetailUIOverridesProps = {
    NoteDetailUI?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<HeadingProps>;
    text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteDetailUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: Note;
} & {
    overrides?: NoteDetailUIOverridesProps | undefined | null;
}>;
export default function NoteDetailUI(props: NoteDetailUIProps): React.ReactElement;
