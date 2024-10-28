import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import ArgBox from "../../components/ArgBox";
import ProblemBox from "../../components/ProblemBox";
import PropositionBox from "../../components/PropositionBox";
import Triangle from "../../components/Triangle";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../../components/Droppable";
import { Draggable } from "../../components/Draggable";
import { useState } from "react";

function Step03LFD() {
  const argumentation =
    "「ダイヤモンドは高価である．したがってダイヤモンドは宝石である．なぜならば宝石は高価だからである．」";
  const step = 3;
  const sentence =
    "作成した所与命題と導出命題を使って言語的三角ロジックを組み立ててください．";

  const propositions = [
    { id: "proposition1", text: "ダイヤモンドであるならば高価である" },
    { id: "proposition2", text: "宝石であるならば高価である" },
    { id: "proposition3", text: "ダイヤモンドであるならば宝石である" },
  ];

  const sizePX = 200; // 三角形のサイズ
  const color = "#808080"; // 三角形の色

  // 各ドロップエリアのテキスト状態を管理
  const [dropText, setDropText] = useState({
    top: "結論",
    left: "根拠",
    right: "論拠",
  });

  // ドロップ処理
  const handleDragEnd = (event: {
    active: { id: string };
    over: { id: string } | null;
  }) => {
    const { active, over } = event;
    if (over) {
      const proposition = propositions.find((p) => p.id === active.id);
      if (proposition) {
        setDropText((prev) => ({
          ...prev,
          [over.id]: proposition.text, // ドロップエリアに応じたテキストを更新
        }));
      }
    }
  };

  return (
    <div>
      <ProblemBox step={step} sentence={sentence} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "20px" }}
        >
          <ArgBox argumentation={argumentation} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DndContext onDragEnd={handleDragEnd}>
              {/* 三角ロジック */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: `${sizePX + 100}px`,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: `${sizePX}px`,
                    height: `${sizePX}px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* 三角形の描画 */}
                  <Triangle sizePX={sizePX} color={color} />

                  {/* ドロップエリアの作成 */}
                  <Droppable
                    id="top"
                    position={{ top: "0%", left: "50%" }}
                    transform="translate(-50%, -50%)"
                  >
                    <Paper
                      sx={{
                        padding: "4px",
                        backgroundColor: "#2196f3",
                        width: 200,
                      }}
                    >
                      <Typography variant="body1">{dropText.top}</Typography>
                    </Paper>
                  </Droppable>

                  <Droppable
                    id="left"
                    position={{
                      bottom: `-${sizePX / 20}px`,
                      left: `calc(30% - ${sizePX / 2}px)`,
                    }}
                    transform="translate(-50%, 50%)"
                  >
                    <Paper
                      sx={{
                        padding: "4px",
                        backgroundColor: "#f44336",
                        width: 200,
                      }}
                    >
                      <Typography variant="body1">{dropText.left}</Typography>
                    </Paper>
                  </Droppable>

                  <Droppable
                    id="right"
                    position={{
                      bottom: `-${sizePX / 20}px`,
                      right: `calc(30% - ${sizePX / 2}px)`,
                    }}
                    transform="translate(50%, 50%)"
                  >
                    <Paper
                      sx={{
                        padding: "4px",
                        backgroundColor: "#4caf50",
                        width: 200,
                      }}
                    >
                      <Typography variant="body1">{dropText.right}</Typography>
                    </Paper>
                  </Droppable>
                </Box>
              </Box>

              {/* 命題 */}
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                  alignContent: "center",
                  justifyContent: "center",
                  height: "fit-content",
                }}
              >
                <Stack spacing={1} sx={{ alignItems: "center" }}>
                  {propositions.map((prop) => (
                    <Draggable key={prop.id} id={prop.id}>
                      <PropositionBox proposition={prop.text} />
                    </Draggable>
                  ))}
                </Stack>
              </Paper>
            </DndContext>
          </Box>

          <Box sx={{ p: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="primary" href="/lfd02">
              ← もどる
            </Button>
            <Button variant="contained" color="primary" href="/lfd03">
              次へ →
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Step03LFD;
