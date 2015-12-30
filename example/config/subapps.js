module.exports.subapps = {
  // Config for the "blog" subapp, a Sails app living in subapps/blog
  blog: {
    models: {
      // Map the parent user model to the user model in the blog app
      user: 'user',
      // Allow the "post" model to be accessible in parent code as `sails.models.post`
      post: {
        expose: true
      },
    },
    // Map the "main" connection in the blog app (see /example/subapps/blog/config/models.js)
    // to the localDiskDb connection in the parent app.
    connections: {
      main: 'localDiskDb'
    }
  }
};
