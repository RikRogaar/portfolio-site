import { createTheme, NextUIProvider } from "@nextui-org/react"
import Container from "./components/Container"

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      myDarkColor: '#ff4ecd'
    },
    space: {},
    fonts: {}
  }
})

function App() {
  return (
      <NextUIProvider theme={theme}>
        <Container />
      </NextUIProvider>
  );
}

export default App;