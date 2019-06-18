import * as Router from 'koa-router';

import { MatchV4Service } from '../../services/v4/match.service';

export class MatchV4Controller {
  static async latestByName(ctx:Router.RouterContext) {
    ctx.body = await MatchV4Service.latestByName(ctx.params['name']);
  }
}
