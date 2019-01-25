import React from "react";
import { storiesOf } from "@storybook/react";

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
    
    `)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX(
    "with green background",
    wInfo(`
    description
    
    ~~~js
    <Button>Click here</Button>
    ~~~
    
    `)(() => <Button bg="green">Hello green</Button>)
  );
