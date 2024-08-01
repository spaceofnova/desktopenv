import React from "react";

export const HardwareContext = React.createContext<HardwareContextType>({
  hardware: {
    cpu: 0.5,
    gpu: 0.5,
    memory: 2048,
    display: {
      width: 800,
      height: 600,
      brightness: 100,
    },
  },
  updateBrightness: () => {},
});

export type hardwareJsonType = {
  cpu: number;
  gpu: number;
  memory: number;
  display: {
    width: number;
    height: number;
    brightness: number;
  };
};

export interface HardwareContextType {
  hardware: hardwareJsonType;
  updateBrightness: (brightness: number) => void;
}

export const HardwareProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hardware, setHardware] = React.useState<hardwareJsonType>({
    cpu: 0.5,
    gpu: 0.5,
    memory: 2048,
    display: {
      width: window.screen.width,
      height: window.screen.height,
      brightness: 100,
    },
  });
  const updateBrightness = (brightness: number) => {
    setHardware((prev) => ({
      ...prev,
      display: {
        ...prev.display,
        brightness,
      },
    }));
  };

  return (
    <HardwareContext.Provider value={{ hardware, updateBrightness }}>
      {children}
    </HardwareContext.Provider>
  );
};

export const useHardwareInfo = () => {
  const { hardware } = React.useContext(HardwareContext);

  if (!hardware) {
    throw new Error("HardwareContext not found");
  }

  return {
    ...hardware,
  };
};
