import * as Koa from "koa";

declare module "koa" {
  interface Context {
    params: { [key: string]: string } | any;
  }

  interface Request {
    body: any;
    params: any;
  }
}

declare namespace MyFramework { }
export = MyFramework;
