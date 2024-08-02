import { useNetworkState } from "@uidotdev/usehooks";
import { MdWifi, MdWifiOff } from "react-icons/md";

export default function Network() {
  const { online } = useNetworkState();
  return <div>{online ? <MdWifi size={24} /> : <MdWifiOff size={24} />}</div>;
}
