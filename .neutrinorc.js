module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        publicPath: '/',
          
        html: {
          title: 'Tic-Tac-FIR | 五子棋',
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
