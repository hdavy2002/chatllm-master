import ConnectorImages from "@/components/DataConnectorOption/media";
import { useState } from "react";
import ConnectorOption from "./ConnectorOption";
import YoutubeOptions from "./Connectors/Youtube";

export const DATA_CONNECTORS = {
  "youtube-transcript": {
    name: "YouTube Transcript",
    image: ConnectorImages.youtube,
    description:
      "Import the transcription of an entire YouTube video from a link.",
    options: <YoutubeOptions />,
  },
};

export default function DataConnectors() {
  const [selectedConnector, setSelectedConnector] = useState("youtube-transcript");

  return (
    <div className="flex upload-modal -mt-10 relative min-h-[80vh] w-[70vw]">
      <div className="w-full p-4 top-0 z-20">
        <div className="mt-2 flex flex-col gap-y-2">
          {Object.entries(DATA_CONNECTORS).map(([slug, connector]) => (
            <ConnectorOption
              key={slug}
              slug={slug}
              selectedConnector={selectedConnector}
              setSelectedConnector={setSelectedConnector}
              image={connector.image}
              name={connector.name}
              description={connector.description}
            />
          ))}
        </div>
      </div>
      <div className="xl:block hidden absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-white/20 -translate-x-1/2"></div>
      <div className="w-full p-4 top-0 text-white min-w-[500px]">
        {DATA_CONNECTORS[selectedConnector].options}
      </div>
    </div>
  );
}