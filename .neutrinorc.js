module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'tic-tac-FIR',
          lang: 'zh'
        },

        babel: {
          plugins: [
            ['import', {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: 'css'
            }]
          ]
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
