/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MemoUIProps } from "./MemoUI";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemoUICollectionOverridesProps = {
    MemoUICollection?: PrimitiveOverrideProps<CollectionProps>;
    MemoUI?: MemoUIProps;
} & EscapeHatchProps;
export declare type MemoUICollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MemoUIProps;
} & {
    overrides?: MemoUICollectionOverridesProps | undefined | null;
}>;
export default function MemoUICollection(props: MemoUICollectionProps): React.ReactElement;
