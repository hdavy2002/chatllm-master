import { useState } from "react";
import ConnectorImages from "@/components/DataConnectorOption/media";
import YoutubeOptions from "./Connectors/Youtube";

const DATA_CONNECTORS = {
  "youtube-transcript": {
    name: "YouTube Transcript",
    image: ConnectorImages.youtube,
    description:
      "Import the transcription of an entire YouTube video from a link.",
    options: <YoutubeOptions />,
  },
};

export default function DataConnectors() {
  const [selectedConnector] = useState("youtube-transcript");

  return (
    <div className="flex upload-modal -mt-10 relative min-h-[80vh] w-[70vw]">
      <div className="w-full p-4 top-0 text-white min-w-[500px]">
        <div className="mb-4">
          <h2 className="text-xl font-bold">{DATA_CONNECTORS[selectedConnector].name}</h2>
          <p className="text-sm text-gray-300">{DATA_CONNECTORS[selectedConnector].description}</p>
        </div>
        {DATA_CONNECTORS[selectedConnector].options}
      </div>
    </div>
  );
}