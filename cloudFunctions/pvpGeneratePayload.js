if(args.isA){
    PvpResponse({ some: 'payload a', aPayload: args.fromObject });
} else if(args.isBot){
    PvpResponse({ some: 'payload b', alsoBot: true });
} else {
    PvpResponse({ some: 'payload b', aPayload: args.fromObject });
}