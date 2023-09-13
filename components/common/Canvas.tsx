import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function Canvas({
  children,
  text,
}: {
  children?: ReactNode;
  text: string;
}) {
  return (
    <>
      <Grid item xs={12} textAlign={"left"}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item xs={12} justifyContent={"center"} display={"flex"}>
        <div
          style={{
            width: "80%",
            minHeight: "100px",
            background: "#F6F6F6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      </Grid>
    </>
  );
}
