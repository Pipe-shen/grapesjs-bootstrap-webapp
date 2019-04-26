export default (editor, opts) => {
  let bm = editor.BlockManager;

  const styleContainer = `
    .container,.container-fluid {
      min-height: 75px;
    }`

  const category = 'Container'

  bm.add('container', {
    label: 'container',
    category: category,
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<div class="container" data-gjs-type="${category}">
                <div class=""></div>
              </div>
              <style>
                ${styleContainer}
              </style>`
  });

  bm.add('container-fluid', {
    label: 'container-fluid',
    category: category,
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<div class="container-fluid" data-gjs-type="${category}">   
                <div class=""></div>            
              </div>
              <style>
                ${styleContainer}
              </style>`
  });

}