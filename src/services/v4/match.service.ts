import { Kayn, KaynClass } from 'kayn';

const debug: any = require('debug')('matchprocessor:MatchV4Service');

const kayn = Kayn(process.env.RIOT_API_KEY)();

export class MatchV4Service {
  static async latestByName(name: string) {
    const matches = [];
    const summoner = await kayn.Summoner.by.name(name);
    const matchlist = await kayn.Matchlist.Recent.by.accountID(summoner.accountId);

    await Promise.all(matchlist.matches.map(async (match) => {
      matches.push(await kayn.Match.get(match.gameId));
    }));

    return matches;
  }
}
