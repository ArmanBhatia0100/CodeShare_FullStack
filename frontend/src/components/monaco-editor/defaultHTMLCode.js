const defaultHTMLCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Monaco Editor Example</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
    }
    #editor {
      width: 100%;
      height: 100vh;
    }
  </style>
</head>
<body>

<div id="editor"></div>

<!-- Monaco Editor via CDN -->
<script src="https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs/loader.js"></script>
<script>
  require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }});
  require(['vs/editor/editor.main'], function () {
    monaco.editor.create(document.getElementById('editor'), {
      value: [
        'function helloMonaco() {',
        '\tconsole.log("Hello from Monaco Editor!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark'
    });
  });
</script>

</body>
</html>
`

export default defaultHTMLCode;