import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";

class ErrorBoundaryCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true, error: err };
  }

  componentDidCatch(err) {
    console.error("Error caught in ErrorBoundary:", err); // Logging the error
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <Typography variant="h5" color="error">
            Error:{" "}
            {this.state.error?.message || "An unexpected error occurred."}
          </Typography>
          <Button
            variant="contained"
            onClick={this.handleRetry}
            sx={{ marginTop: "20px" }}
          >
            Try Again
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryCounter;
