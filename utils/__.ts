import { TranslationKey } from "~/lib/interfaces";
import { NamedValue, useI18n } from "vue-i18n";

export const __ = (key: TranslationKey, replace?: NamedValue<any>) => {
  //const { t } = useI18n();

  return key; //t(key, replace);
};

declare global {
  interface String {
    round(length?: number): string;
  }
}

String.prototype.round = function (length: number = 100) {
  const string = String(this);
  return string.length > length ? string.substr(0, length) + "..." : string;
};
