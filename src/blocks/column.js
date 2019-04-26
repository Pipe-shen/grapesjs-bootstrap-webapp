export default (editor, opts) => {
  let bm = editor.BlockManager;

  const styleCell = `
    .cell {
      min-height: 75px;
    }`

  bm.add('column1', {
    label: 'column1',
    category: 'Column',
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<div class="row">
                <div class="col-xs-12 cell"></div>
              </div>
              <style>
                ${styleCell}
              </style>`
  });

  bm.add('column2', {
    label: 'column2',
    category: 'Column',
    attributes: {class:'gjs-fonts gjs-f-b2'},
    content: `<div class="row">
                <div class="col-xs-6 cell"></div>
                <div class="col-xs-6 cell"></div>
              </div>
              <style>
                ${styleCell}
              </style>`
  });

  bm.add('column3', {
    label: 'column3',
    category: 'Column',
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
}