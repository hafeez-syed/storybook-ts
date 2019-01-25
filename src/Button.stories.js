import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text } from "@storybook/addon-knobs/react";

import { Button } from "./Button";
import { wInfo } from "./utils";

storiesOf("Button", module)
  .addWithJSX(
    "with pale golden background",
    wInfo(`
    description

    ~~~js
    <Button>Click here</Button>
    ~~~
    
    `)(() => <Button bg={text("bg", "palegoldenrod")}>Hello world</Button>)
  )
  .addWithJSX(
    "with green background",
    wInfo(`
    description
    
    ~~~js
    <Button>Click here</Button>
    ~~~
    
    `)(() => <Button bg={color("bg", "green", "group1")}>Hello green</Button>)
  );
