if(clientParams.makeTurn){
    args.battleModel.currentTurn++;
    PveActResponse(false, args.battleModel, { okay: true, currentTurn: args.battleModel.currentTurn });
} else if(clientParams.gameOver){
    PveActResponse(true, null, { okay: true, gameOver: true });
}