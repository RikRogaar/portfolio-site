import { createTheme, NextUIProvider } from "@nextui-org/react"
import { Terminal, useEventQueue, textLine, textWord, commandWord, buttonWord, anchorWord } from 'crt-terminal';
import { ContainerStyled } from './styled-components/Container.styled'

const bannerText = `
pages/index
Hi, welcome to my portfolio.

To get started, checkout sections by typing
'cd about' or 'cd projects'

Checkout all commands by typing 'help'
`;

const helpText = `
'help' - shows this message,
'cd about' - shows about me,
'cd projects' - shows my projects,
'cd ..' to go back
`;

const aboutText = `
pages/about
My name is Rik Rogaar and I'm 17 years old with a passion for development.
I'm currently at Bit Academy in Groningen, specializing in web development.
I'm a very curious person and I love to learn new things and put myself in new situations.
I've been programming for about 4 years now and I'm always looking for new challenges.
My passion for development started when I was 13 years old and started to script maps for cod4.
I took a few years off and started again when I was 15 years old.

My skills:
 - Html/Css | Master
 - Bootstrap | Advanced
 - NextUi | Competent
 - Javascript | Advanced
 - Php | Advanced
 - Mysql | Advanced
 - Twig | Beginner
 - React | Beginner
 - Git | Competent

`

const projectsText = `
pages/projects

Clicking on the links will open the project in the same tab.
Checkout some of my projects:

`

const indexText = `
/index

Hi, welcome to my portfolio!

Get started by typing 'cd about' or 'cd projects'!

To see all commands, type 'help'
`;

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
});

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
            banner={[textLine({ words: [textWord({ characters: indexText })] })]}
            onCommand={(command) => {
              switch(command) {
                case 'help':
                  print([
                    textLine({ words: [textWord({ characters: helpText })] }),
                  ])
                  break;
                case 'cd about':
                  clear();
                  print([
                    textLine({ words: [textWord({ characters: aboutText })] }),
                    textLine({ words: [
                        anchorWord({
                            characters: '- Github',
                            href: 'https://github.com/RikRogaar',
                        }),
                    ]}),
                  ])
                  break;
                case 'cd projects':
                  clear();
                  print([
                    textLine({ words: [
                        textWord({ characters: projectsText }),
                    ]}),
                    textLine({ words: [
                        anchorWord({
                            characters: '- Portofolio',
                            onClick: () => {
                                alert("You're already here!");
                            }
                        }),
                    ]}),
                    textLine({ words: [
                        anchorWord({
                            characters: '- Web trainee project',
                            target: '_blank',
                            href: 'https://storied-faloodeh-59efb5.netlify.app/',
                        }),
                    ]}),
                    textLine({ words: [
                        anchorWord({
                            characters: '- React swipe project',
                            target: '_blank',
                            href: 'https://keen-souffle-2a2119.netlify.app/',
                        }),
                    ]}),
                    textLine({ words: [
                        anchorWord({
                            characters: '- Twig project',
                            onClick: () => {
                                alert('This project is temporarily not available');
                            }
                        }),
                    ]}),

                  ])
                  break;
                case 'cd ..':
                  clear();
                  print([
                    textLine({ words: [textWord({ characters: bannerText })] }),
                  ])
                  break;
                case 'test':
                    clear();
                    print([
                        print([
                            textLine({
                                words: [
                                    textWord({ characters: 'This is a button: ' }),
                                    buttonWord({
                                        characters: 'Click me!',
                                        onClick: () => {
                                            alert('You clicked me!');
                                        }
                                    })
                                ]
                            }),
                          ])
                    ])
                    break;
                default:
                  print([
                    textLine({
                      words: [
                        textWord({ characters: 'Could not find command: ' }),
                        commandWord({ characters: command, prompt: '' }),
                      ],
                    }),
                  ])
              }
            }}

          />
        </div>
        </ContainerStyled>
      </NextUIProvider>
  );
}

export default App;
