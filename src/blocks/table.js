export default (editor, opts) => {
  let bm = editor.BlockManager;

  const styleContainer = `
    .container,.container-fluid {
      min-height: 75px;
    }`

  bm.add('table', {
    label: 'table',
    category: 'Basic',
    attributes: {class:'fa fa-table'},
    content: `<table class="table">
                <thead>
                <tr>
                  <th>#</th>
                  <th>first</th>
                  <th>second</th>
                  <th>third</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>###</td>
                  <td>###</td>
                  <td>###</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>###</td>
                  <td>###</td>
                  <td>###</td>
                </tr>
                </tbody>
              </table>`
  });
}