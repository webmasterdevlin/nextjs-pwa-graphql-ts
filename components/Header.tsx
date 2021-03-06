import React from "react";
import Link from "next/link";

import { config } from "../config/config";

const AppIcon: React.FC = () => (
  <Link href="/">
    <a className="app-icon" title={config.appName}>
      <img src="/icon.png" alt={config.appName} />
      <style
        //@ts-ignore
        jsx
      >{`
        a:hover {
          filter: none;
        }

        img {
          position: absolute;
          left: 10px;
          top: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      `}</style>
    </a>
  </Link>
);

type Props = {
  title: string;
  children?: any;
};

export default ({ title = config.appName, children }: Props) => (
  <header className="color-header-bg color-background-fg">
    <AppIcon />
    {title}
    {children}
    <style
      //@ts-ignore
      jsx
    >{`
      header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        left: 0;
        top: 0;
        height: 50px;
        line-height: 50px;
        font-weight: normal;
        text-align: center;
      }

      :global(main) {
        margin-top: 50px;
      }
    `}</style>
  </header>
);
