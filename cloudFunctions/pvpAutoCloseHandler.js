var theResult = { loserIs: args.lagA > args.lagB ? args.playerA : args.playerB };
appendBattleJournalPvp(theResult, true, !!args.opponentIsBot);
PvpAutoDefeatResponse(theResult, theResult);