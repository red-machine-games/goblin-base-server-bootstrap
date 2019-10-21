if(args.theMessage.gameOver){
    let finalMessage = args.theMessage.send || { gameIsOver: true };
    PvpMessageHandler(
        { gameIsOver: true, battleJournal: args.theMessage.battleJournal || { theDefault: 'entry' } },
        finalMessage, finalMessage
    );
} else {
    let aMessageForA = args.isA ? undefined : args.theMessage.send,
        aMessageForB = args.isA ? args.theMessage.send : undefined;
    if(args.theMessage.modify){
        _.each(args.theMessage.modify, (v, k) => args.theModel[k] = v);
        PvpMessageHandler(args.theModel, aMessageForA, aMessageForB);
    } else {
        PvpMessageHandler(undefined, aMessageForA, aMessageForB);
    }
}