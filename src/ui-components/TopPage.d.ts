/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MarketingFooterProps } from "./MarketingFooter";
import { Features4x1Props } from "./Features4x1";
import { HeroLayout1Props } from "./HeroLayout1";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopPageOverridesProps = {
    TopPage?: PrimitiveOverrideProps<ViewProps>;
    MarketingFooter?: MarketingFooterProps;
    Features4x1?: Features4x1Props;
    HeroLayout1?: HeroLayout1Props;
    NavBar?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type TopPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopPageOverridesProps | undefined | null;
}>;
export default function TopPage(props: TopPageProps): React.ReactElement;
