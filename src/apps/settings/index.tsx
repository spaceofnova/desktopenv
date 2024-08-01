import React from "react";
import "./index.css";
import AppearanceModifier from "./pages/Apperance";

const pages = [
  {
    id: 0,
    name: "General",
    component: <div></div>,
  },
  {
    id: 1,
    name: "Appearance",
    component: <AppearanceModifier />,
  },
  {
    id: 2,
    name: "Display",
    component: <div>Display</div>,
  },
];

const Settings = () => {
  const [currentPage, setPage] = React.useState(pages[0]);

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        {pages.map((page) => (
          <button
            onClick={() => setPage(page)}
            key={page.id}
            className={`${page.name === currentPage.name && "active"}`}
          >
            {page.name}
          </button>
        ))}
      </div>
      <div className="settings-content">{currentPage.component}</div>
    </div>
  );
};

export default Settings;
