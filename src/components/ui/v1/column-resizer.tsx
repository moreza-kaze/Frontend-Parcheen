import { Header } from "@tanstack/react-table";
import { User } from "./Columns";

export const ColumnResizer = ({
  header,
}: {
  header: Header<User, unknown>;
}) => {
  if (header.column.getCanResize() === false) return <></>;

  return (
    <div
      {...{
        onMouseDown: header.getResizeHandler(),
        onTouchStart: header.getResizeHandler(),
        className: `absolute top-0 left-0 cursor-col-resize w-px h-full hover:bg-gray-800  hover:w-4 `,
        style: {
          userSelect: "none",
          touchAction: "none",
          // cursor:"pointer"
          cursor: "url('/public/resizeimage.JPG'), auto"
        },
      }}
    />
  );
};