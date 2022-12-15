import { createTheme, NextUIProvider } from "@nextui-org/react"
import Container from "./components/Container"
import { Terminal, useEventQueue, textLine, textWord, commandWord } from 'crt-terminal';
import { ContainerStyled } from './styled-components/Container.styled'

const bannerText = `
pages/index
Hi, welcome to my portfolio.

Checkout commands by typing 'help'
`;

const helpText = `
'help' - shows this message,
'cd about' - shows about me,
'cd projects' - shows my projects,
'cd ..' to go back
`;

const aboutText = `
My name is Rik Rogaar and I'm 18 years old
I'm currently studying Software dev at Bit Academy in Groningen.
`

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      myDarkColor: '#ff4ecd'
    },
    space: {},
    fonts: {},
    terminal: {
      "scrollbar": {
        "width": 0
      }
    }
  }
})

function App() {
  const eventQueue = useEventQueue();
  const { print } = eventQueue.handlers;
  const { clear } = eventQueue.handlers;

  return (
      <NextUIProvider theme={theme}>
        <ContainerStyled>
        <div style={{ width: '1000px', height: '600px' }}>
          <Terminal
            queue={eventQueue}
            banner={[textLine({ words: [textWord({ characters: bannerText })] })]}
            onCommand={(command) => {
              switch(command) {
                case 'help':
                  clear();
                  print(helpText);
                  break;
                case 'cd about':
                  clear();
                  print(aboutText);
                  break;
                case 'cd projects':
                  clear();
                  print('projects');
                  break;
                case 'cd ..':
                  clear();
                  print(bannerText);
                  break;
                default:
                  print(`command not found: ${command}`);
              }
            }}

          />
        </div>
        </ContainerStyled>
      </NextUIProvider>
  );
}

export default App;
print([
  textLine({ words: [textWord({ characters: aboutText })] }),
])