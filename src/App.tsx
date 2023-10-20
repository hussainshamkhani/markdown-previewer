import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"
import gfm  from 'remark-gfm'

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading

You can create inline code like this: \`const example = 'Hello, World!'\`

And here's a code block:

\`\`\`
// This is a code block
function exampleFunction() {
  return 'This is a code block example';
}
\`\`\`

You can create a list as well:
- Item 1
- Item 2
- Item 3

> This is a blockquote.

You can include links, like this [freeCodeCamp](https://www.freecodecamp.org/).

And you can add images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

And you can make text **bold** or _italic_ or both: **_bold and italic_**.

~~You can also cross out text~~.

`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultText);

  return (
    <>
    <div>
      <h1 className='welcome'>Welcome to my Markdown Previewer!</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => {setMarkdownText(e.target.value)}}></textarea>
        <div id="preview">
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
