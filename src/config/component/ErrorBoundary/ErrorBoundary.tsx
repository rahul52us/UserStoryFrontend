import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box mt={'30vh'}>
          <Heading color={"red.600"} textAlign={'center'}>Something went wrong.</Heading>
          <Text color={"gray.600"} textAlign={'center'}>{this.state.error?.toString()}</Text>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
