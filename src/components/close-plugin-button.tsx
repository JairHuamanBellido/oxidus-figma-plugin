export default function ClosePluginButton() {
  const onClick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };
  return (
    <button
      onClick={onClick}
      className="w-fit border  rounded-md text-sm h-fit p-[6px] flex items-center space-x-2 "
    >
      Close
    </button>
  );
}
