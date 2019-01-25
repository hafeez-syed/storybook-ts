import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "./Button";

storiesOf("Button", module)
  .addWithJSX("with background", () => (
    <Button bg="palegoldenrod">Hello world</Button>
  ))
  .addWithJSX("with green background", () => (
    <Button bg="green">Hello green</Button>
  ));
