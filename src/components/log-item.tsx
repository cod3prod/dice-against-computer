import { memo } from "react";

const LogItem = memo(function LogItem({ log }: { log: string }) {
  return <li className="animate-slide-in-from-left">{log}</li>;
}, (prevProps, nextProps) => {
  return prevProps.log === nextProps.log;
});

export default LogItem;
