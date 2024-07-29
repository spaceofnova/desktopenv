import React from "react";
import "./index.css";
export default function Browser() {
  const [tab, setTab] = React.useState<any>({
    id: "1",
    title: "Google",
    url: "https://www.google.com/webhp?igu=1",
  });

  return (
    <div className="browser-container">
      <div className="tabs">
        <button
          onClick={() =>
            setTab({
              id: "1",
              title: "Google",
              url: "https://www.google.com/webhp?igu=1",
            })
          }
        >
          Google
        </button>
        <button
          onClick={() =>
            setTab({
              id: "1",
              title: "Example",
              url: "https://example.com",
            })
          }
        >
          Example
        </button>
        <input
          type="text"
          placeholder="Search"
          id="search"
          style={{ width: "100%", margin: 2 }}
          defaultValue={tab.url}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setTab({
                id: "2",
                title: "New Tab",
                url: (document.getElementById("search") as HTMLInputElement)
                  .value,
              });
            }
          }}
        />
      </div>
      <div className="browser-content">
        {tab && (
          <iframe
            src={tab.url}
            style={{ width: "100%", height: "100%", border: "none" }}
            frameBorder={0}
          />
        )}
      </div>
    </div>
  );
}
