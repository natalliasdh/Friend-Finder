var express=require("express");

var app=express();

var PORT=process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, function(){


    console.log("Server is listening on", +PORT);
})