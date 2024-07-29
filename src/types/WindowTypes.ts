export type WindowType = {
  processID: string;
  name: string;
  component: JSX.Element;
  hidden?: boolean;
  icons?: {
    scalable?: JSX.Element;
  };
  controlsOnly?: boolean;
  minimized?: boolean;
  zIndex?: number;
};
