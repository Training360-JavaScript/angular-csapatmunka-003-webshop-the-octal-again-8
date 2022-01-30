const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./octal-webshop.json')
const middlewares = jsonServer.defaults({
    static: './static',
    logger: true,
    bodyParser: true,
    noCors: true,
    readOnly: false,
})
const cors = require('cors');


const isAuthorized = (req) => {
    console.log(req);
    return true;
}; 


server.use(middlewares)

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());


server.use((req, res, next) => {
 if (isAuthorized(req)) {
   next() 
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
