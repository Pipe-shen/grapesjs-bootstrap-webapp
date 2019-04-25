import Text from './text'
export default (editor, opts) => {
  let bm = editor.BlockManager;
  let blocks = opts.blocks;

  // const toAdd = name => blocks.indexOf(name) >= 0;

  const styleCell = `
    .cell {
      min-height: 75px;
    }`

  bm.add('column1', {
    label: 'column1',
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<div class="row"><div class="col-xs-12">column1</div></div>`
  });

  bm.add('column2', {
    label: 'column2',
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b2'},
    content: `<div class="row"><div class="col-xs-6">column2</div><div class="col-xs-6">column2</div></div>`
  });

  bm.add('column3', {
    label: 'column3',
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b3'},
    content: `<div class="row">
                <div class="col-xs-4 cell"></div>
                <div class="col-xs-4 cell"></div>
                <div class="col-xs-4 cell"></div>
              </div>
              <style>
                ${styleCell}
              </style>`
  });

  Text(editor, opts)

}