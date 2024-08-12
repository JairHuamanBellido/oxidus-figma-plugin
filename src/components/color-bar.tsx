import { cn } from "../utils";

interface Props {
  color: string;
  label: string;
}
export default function ColorBar({ color, label }: Props) {
  return (
    <div className={cn("h-12 p-2 w-full flex justify-between items-center")}>
      <div className="flex items-center space-x-2">
        <div
          style={{
            background: color,
          }}
          className={"w-4 h-4 rounded"}
        ></div>
        <p>{label}</p>
      </div>
      <p>{color}</p>
    </div>
  );
}
