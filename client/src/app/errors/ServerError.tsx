import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServerError() {
  const history = useNavigate();
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h3" color='error' gutterBottom>
{state.error.title}          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
          <Divider />
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}

      <Button
        onClick={() => history("/catalog")}
        variant="contained"
        sx={{ margin: "20px 0px" }}
      >
        Go back to the store
      </Button>
    </Container>
  );
}
