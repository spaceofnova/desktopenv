export type WindowType = {
  processID: string;
  name: string;
  component: JSX.Element;
  version?: string;
  id?: string;
  license?: string;
  hidden?: boolean;
  icons?: {
    scalable?: JSX.Element;
  };
  controlsOnly?: boolean;
  minimized?: boolean;
  zIndex?: number;
};
