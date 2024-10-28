import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

type DroppableProp = {
  children: ReactNode;
  id: string;
  position: { top?: string; bottom?: string; left?: string; right?: string }; // 座標情報のみ
  transform?: string; // transform を追加
};

export const Droppable: FC<DroppableProp> = ({
  children,
  id,
  position,
  transform,
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        position: "absolute",
        ...position,
        transform,
        bgcolor: isOver ? "lightGreen" : undefined,
        padding: 1,
        borderRadius: "8px",
        width: "fit-content",
        overflowX: "auto",
      }}
    >
      {children}
    </Box>
  );
};
