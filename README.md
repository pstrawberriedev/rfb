# fe-app
Boilerplate for a React-ready, front-end JS App via Webpack; intentionally "minimal".  
Served via Express, Webpack dev build handled by webpack-dev-middleware.  

### The skinny

**Styles**  
Opinionated styles using LESS with webpack-extract-text.  
Includes a CSS reset with ``box-sizing:border-box``. No grid/bootstrap; no autoprefixer.

**Utility Libraries**  
Includes lodash & moment

**Flow**  
- develop in ``/src``
- JS entry: ``/src/app.js``
- LESS webpack entry: ``/src/styles/index.js``
- HTML: ``/src/index.html``
- Images: ``/src/images``
- ``npm start`` for development
- ``npm run build`` to build into ``/dist``

~ gfhl
