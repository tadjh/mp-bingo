import {
  CURRENT_RESOURCE_NAME,
  GET_CLIENT_DATA,
  HIDE_NUI_FRAME,
  SET_VISIBILITY,
} from "./config";
import { OnReactEvent, SendReactMessage } from "./utils";
import { debugLog } from "./utils/debug";

let isOpen = false;

function setNuiFrame(isOpen: boolean) {
  SetNuiFocus(isOpen, isOpen);
  SetNuiFocusKeepInput(true);
  SendReactMessage(SET_VISIBILITY, isOpen);
}

RegisterCommand(
  CURRENT_RESOURCE_NAME,
  () => {
    setNuiFrame(!isOpen);
    debugLog("Show Bingo NUI frame");
  },
  false
);

RegisterNuiCallbackType(HIDE_NUI_FRAME);
RegisterNuiCallbackType(GET_CLIENT_DATA);

OnReactEvent(HIDE_NUI_FRAME, (_data: any, cb: (data: any) => void) => {
  setNuiFrame(false);
  debugLog("Hide NUI frame");
  cb({});
});

OnReactEvent(GET_CLIENT_DATA, (data: any, cb: (data: any) => void) => {
  debugLog("Data sent by React", JSON.parse(data));
  const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
  const retData = [x, y, z];
  cb(retData);
});
