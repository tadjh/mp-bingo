import { CURRENT_RESOURCE_NAME } from "../config";
import { getArg, isEmpty } from "../utils";
import { Args } from "../types";

const COMMAND_DEBUG = `${CURRENT_RESOURCE_NAME}:debug`;
const COMMAND_DEBUG_ON = `set ${COMMAND_DEBUG} 1`;
const COMMAND_DEBUG_OFF = `set ${COMMAND_DEBUG} 0`;

function shouldDebug() {
  return !!GetConvarInt(COMMAND_DEBUG, 1);
}

function labeledLog(...data: any[]) {
  console.log(`${CURRENT_RESOURCE_NAME.toUpperCase()}:`, ...data);
}

function startDebug() {
  ExecuteCommand(COMMAND_DEBUG_ON);
  labeledLog("debug on");
}

function stopDebug() {
  ExecuteCommand(COMMAND_DEBUG_OFF);
  labeledLog("debug off");
}

function toggleDebug(debug?: boolean) {
  const isDebug = debug !== undefined ? debug : !shouldDebug();
  if (isDebug) return startDebug();
  stopDebug();
}

function isValidInt(num: number) {
  return num === 0 || num === 1;
}

function handleDebug(arg: string) {
  const num = parseInt(arg);
  if (!isValidInt(num)) return;
  const isDebug = Boolean(num);
  toggleDebug(isDebug);
}

export function debug(_source: number, args: Args | []) {
  if (isEmpty(args)) return toggleDebug();
  const arg = getArg(args);
  handleDebug(arg);
}

/**
 * A simple debug console.log function that is dependent on a convar
 * will output a nice prettified message if debug is on
 */
export function debugLog(...data: any[]) {
  if (!shouldDebug()) return;
  labeledLog(...data);
}

RegisterCommand(COMMAND_DEBUG, debug, false);
