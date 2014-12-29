### Holy smokes, it's the "plugin" we've all been waiting for.

In your `sails.config.subapps`:

```
module.exports.subapps = {
  blog: {
    connections: {
      main: 'localDiskDb'
    }
  }
};
```

In your app's `subapps/blog/config/models.js`:

```
module.exports.models = {

  connection: 'main',
  migrate: 'alter'

};
```

This will mount a subapp on `/blog` by default, so going to `http://localhost:1337/blog/foo` will load the `/foo` route from the Sails located in `subapps/blog`.  Models in the `blog` app will use the `localDiskDb` connection from the main Sails app.  Probably want to set that connection to use `fileName: "disk.db"` or something, otherwise each subapp will use its own database file.

More info to come.