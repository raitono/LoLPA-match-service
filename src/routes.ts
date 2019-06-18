import * as Router from 'koa-router';

import { MatchV4Controller } from './controllers/v4/match.controller';

const v4Router: Router = new Router({ prefix: '/v4' });
const matchv4Router: Router = new Router({ prefix: '/match' });

matchv4Router.get('/:name/latest', MatchV4Controller.latestByName);

v4Router.use(
    matchv4Router.routes(),
    matchv4Router.allowedMethods(),
);

export { v4Router };
