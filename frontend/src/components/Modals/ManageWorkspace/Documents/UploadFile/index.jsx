import { CloudArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import System from "../../../../../models/system";

export default function UploadFile({
  workspace,
  fetchKeys,
  setLoading,
  setLoadingMessage,
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function checkProcessorOnline() {
      const online = await System.checkDocumentProcessorOnline();
      setReady(online);
    }
    checkProcessorOnline();
  }, []);

  return (
    <div>
      <div
        className={`w-[560px] border-2 border-dashed rounded-2xl bg-zinc-900/50 p-3 ${
          ready ? "" : "cursor-not-allowed"
        } hover:bg-zinc-900/90`}
      >
        {ready === false ? (
          <div className="flex flex-col items-center justify-center h-full">
            <CloudArrowUp className="w-8 h-8 text-white/80" />
            <div className="text-white text-opacity-80 text-sm font-semibold py-1">
              Document Processor Unavailable
            </div>
            <div className="text-white text-opacity-60 text-xs font-medium py-1 px-20 text-center">
              We can't process your files right now because the document
              processor is offline. Please try again later.
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <CloudArrowUp className="w-8 h-8 text-white/80" />
            <div className="text-white text-opacity-80 text-sm font-semibold py-1">
              File upload is currently disabled
            </div>
            <div className="text-white text-opacity-60 text-xs font-medium py-1">
              Contact your administrator for more information
            </div>
          </div>
        )}
      </div>
    </div>
  );
}