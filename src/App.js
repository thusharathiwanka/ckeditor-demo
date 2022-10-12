// import BalloonBlockEditorComponent from './components/BalloonBlockEditor';
// import BalloonEditorComponent from './components/BalloonEditor';
// import ClassicEditorComponent from './components/ClassicEditor';
import DocumentEditorComponent from './components/DocumentEditor';
// import InlineEditorComponent from './components/InlineEditor';

import './App.css';

function App() {
  return (
    <div className="App" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* <ClassicEditorComponent /> */}
      {/* <InlineEditorComponent /> */}
      {/* <BalloonEditorComponent /> */}
      {/* <BalloonBlockEditorComponent /> */}
      <DocumentEditorComponent />
    </div>
  );
}

export default App;
