import { MdInfoOutline } from "react-icons/md";

const installableApps = [
  {
    name: "Example App",
    version: "1.0.0",
    license: "MIT",
    component: <div>Example App</div>,
    description: "This is an example app",
    processID: "com.example.app",
    icons: {
      scalable: <MdInfoOutline />,
    },
  },
];

export default installableApps;
