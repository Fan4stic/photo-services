module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  }
};