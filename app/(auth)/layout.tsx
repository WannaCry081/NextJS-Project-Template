import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  );
}
