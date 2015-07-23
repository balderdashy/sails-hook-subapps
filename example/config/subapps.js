module.exports.subapps = {
  blog: {
    models: {
      user: 'user',
      post: {
        expose: true
      },
    },
    connections: {
      main: 'localDiskDb'
    }
  }
};
