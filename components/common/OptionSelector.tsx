import { Button, Grid, Typography } from "@mui/material";

export default function OptionSelector({
  setValue,
  values,
  title,
  text,
}: {
  setValue: any;
  values: {}[];
  title?: string;
  text?: string;
}) {
  const generateBtn = (newValue: string) => {
    return (
      <Button variant="outlined" onClick={() => setValue(newValue)}>
        {newValue}
      </Button>
    );
  };
  return (
    <>
      <Grid item xs={12} textAlign={"left"} mb={"1rem"}>
        {title && <Typography variant="h5">{title}</Typography>}
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item xs={12} mb={"2rem"}>
        <Grid container justifyContent={"space-evenly"}>
          {values &&
            values.map((val) => {
              return generateBtn(val);
            })}
        </Grid>
      </Grid>
    </>
  );
}
