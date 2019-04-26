export default (editor, opts) => {
  let bm = editor.BlockManager;

  const styleContainer = `
    .container,.container-fluid {
      min-height: 75px;
    }`

  bm.add('button', {
    label: 'button',
    category: 'Basic',
    attributes: {class:'fa fa-edit'},
    content: `<button class="btn btn-primary" type="submit">Button</button>`
  });
}