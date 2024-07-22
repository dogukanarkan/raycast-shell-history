import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  historyFilePath: string;
  maxLines: string;
  removeDuplicates: boolean;
  rememberShellTag: boolean;
  primaryAction: string;
  showTips: boolean;
}

export const { historyFilePath, maxLines, removeDuplicates, rememberShellTag, primaryAction, showTips } =
  getPreferenceValues<Preferences>();

export enum PrimaryAction {
  PASTE = "Paste",
  Copy = "Copy",
}
