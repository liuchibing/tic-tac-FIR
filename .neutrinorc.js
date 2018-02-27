module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'tic-tac-FIR'
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
