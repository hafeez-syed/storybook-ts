import React from "react";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../src/utils";

storiesOf("Welcome", module).addWithJSX(
  "to my new storybook 🎉",
  wInfo(`Splash page`)(() => <div>Welcome to my new Storybook 🎉 </div>)
);
