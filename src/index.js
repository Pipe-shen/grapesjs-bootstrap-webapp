import grapesjs from 'grapesjs'

// import bootstrapSass from './style/bootstrap-custom.scss'
import commands from './commands'
import panels from './panels'

export default grapesjs.plugins.add('grapesjs-bootstrap-webapp', (editor, opts = {}) => {
  const config = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Basic',
    labelColumn1: '1 Column',
    labelColumn2: '2 Columns',
    labelColumn3: '3 Columns',
    labelColumn37: '2 Columns 3/7',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map',
    ...opts
  };

  editor.BlockManager.add('quote', {
    label: 'Quote',
    category: 'Basic',
    attributes: { class: 'fa fa-quote-right' },
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
  })
  // Add blocks
  /*const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);*/
  commands(editor, config)
  panels(editor, config)
})