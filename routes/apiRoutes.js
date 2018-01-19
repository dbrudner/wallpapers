function apiRoutes(app, wallpapers) {

    app.get('/api/wallpapers', function(req, res) {
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
}

module.exports = apiRoutes