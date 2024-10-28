import { useDraggable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";
import { DraggableBlockSource } from "./DraggableBlockSource";

type Props = {
  children: ReactNode;
  id: string;
};

export const Draggable: FC<Props> = ({ children, id }) => {
  // useDraggableを使って必要な値をもらう
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id,
    });

  const transformStyle = transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transformStyle,
        height: "fit-content",
      }}
    >
      <DraggableBlockSource isDragging={isDragging} children={children} />
    </div>
  );
};
