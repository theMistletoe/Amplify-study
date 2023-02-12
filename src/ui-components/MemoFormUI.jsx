/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Memo } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextAreaField } from "@aws-amplify/ui-react";
export default function MemoFormUI(props) {
  const { overrides, ...rest } = props;
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const sendButtonOnClick = useDataStoreCreateAction({
    fields: { content: textAreaFieldValue, noteID: textAreaFieldValue },
    model: Memo,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="653px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="18px 32px 18px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MemoFormUI")}
      {...rest}
    >
      <TextAreaField
        label="memo"
        placeholder="write something..."
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textAreaFieldValue}
        onChange={(event) => {
          setTextAreaFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="send memo"
        onClick={() => {
          sendButtonOnClick();
        }}
        {...getOverrideProps(overrides, "SendButton")}
      ></Button>
    </Flex>
  );
}
