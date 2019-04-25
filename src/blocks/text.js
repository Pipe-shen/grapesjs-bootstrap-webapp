export default (editor, opts) => {
  let bm = editor.BlockManager;

  bm.add('text', {
    label: 'Text',
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content: {
      type:'text',
      content:'Insert your text here',
      style: {padding: '10px' },
      activeOnRender: 1
    },
  });
}