import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChatModeSelection({ workspace, setHasChanges }) {
  const [chatMode] = useState("query");
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="chatMode" className="block input-label">
          {t("chat.mode.title")}
        </label>
      </div>

      <div className="flex flex-col gap-y-1 mt-2">
        <div className="w-fit flex gap-x-1 items-center p-1 rounded-lg bg-zinc-800 ">
          <input type="hidden" name="chatMode" value={chatMode} />
          <button
            type="button"
            disabled={true}
            className="transition-bg duration-200 px-6 py-1 text-md text-white disabled:bg-[#687280] rounded-md"
          >
            {t("chat.mode.query.title")}
          </button>
        </div>
        <p className="text-sm text-white/60">
          <b>{t("chat.mode.query.title")}</b>{" "}
          {t("chat.mode.query.desc-start")}{" "}
          <i className="font-semibold">{t("chat.mode.query.only")}</i>{" "}
          {t("chat.mode.query.desc-end")}
        </p>
      </div>
    </div>
  );
}