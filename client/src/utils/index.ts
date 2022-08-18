import { CFX_NUI_EVENT } from "../config";
import { Args } from "../types";

export function SendReactMessage<Action extends string, Data>(
  action: Action,
  data: Data
) {
  SendNUIMessage({
    action,
    data,
  });
}

export function OnReactEvent<Action extends string, Callback extends Function>(
  action: Action,
  cb: Callback
) {
  on(`${CFX_NUI_EVENT}:${action}`, cb);
}

export function isEmpty<T extends unknown>(arr: T[] | []): arr is [] {
  return Array.isArray(arr) && !arr.length;
}

export function getArg(args: Args) {
  const [arg1] = args;
  return arg1;
}
