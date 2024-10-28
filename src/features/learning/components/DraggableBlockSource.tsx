import { FC, ReactNode } from "react";

type DraggableBlockSourceType = {
  children: ReactNode;
  isDragging?: boolean;
};

export const DraggableBlockSource: FC<DraggableBlockSourceType> = ({
  children,
  isDragging,
}) => {
  return (
    <div
      style={{
        userSelect: "none",
        cursor: isDragging ? "grabbing" : "grab",
        opacity: isDragging ? 0.5 : undefined,
        width: "fit-content",
      }}
    >
      {children}
    </div>
  );
};
