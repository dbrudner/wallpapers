function apiRoutes(app, wallpapers) {

    app.get('/api', function(req, res) {
        res.json(wallpapers);
    })

    app.get("/api/:wallpapers?", function(req, res) {
        var papers = req.params.wallpapers;

        if (papers) {
            papers;

            for (var i = 0; i < wallpapers.length; i++) {
                if (papers === wallpapers[i].routeName) {
                    res.json(wallpapers[i]);
                }
            }
            res.json(false);
        }
    });

    app.post("/api/new", function(req, res) {
        var newwallpaper = req.body;
        newwallpaper.routeName = newwallpaper.name.replace(/\s+/g, "").toLowerCase();
        wallpapers.push(newwallpaper);
        res.json(newwallpaper);
    });
}

module.exports = apiRoutes