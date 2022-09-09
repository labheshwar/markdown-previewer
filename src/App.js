import React from 'react';
import './App.css';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState('');

  return (
    <div>
      <div className='main'>
        <div id='edit-header' className='px-3'>
          <h1>Editor</h1>
        </div>
        <textarea
          id='editor'
          name='text'
          cols='30'
          rows='10'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div id='preview'>
        <div id='prev-header' className='px-3'>
          <h1>Previewer</h1>
        </div>
        <div
          id='previewer'
          dangerouslySetInnerHTML={{ __html: marked(text, { renderer }) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
