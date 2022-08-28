import * as React from "react";
// import { storiesOf } from "@storybook/react";
import Tag from "../components/Tag";


export default {
    /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
    title     : "Tag",
    component : Tag,
};

export const Hello = () =>  <Tag key={"0"} name="hello" />;
export const world = () =>  <Tag key={"1"} name="world" />;