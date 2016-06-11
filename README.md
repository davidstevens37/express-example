# Example Express Application

this repo demonstrates a simple express app archetecture using template layouts with handlebars

make sure you're using node 4+
`node -v`

`npm install`  

`npm start` or `node src/index.js`

navigate to:
- `localhost:3000`


the default layout is defined in `/src/index.js`. 

anytime a `res.render(templatename)` is called, it will by default extend the base template (`/src/templates/layouts/main.hbs`) and place the content from the template into the `{{{body}}}` tag of the layout.


`/src/handlers/`
- containes route handlers

`/src/routes.js`
- defines routes, methods and handlers that respond to the reqeust

