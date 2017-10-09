exports.handler = (event, context, callback) => {

  try {

    if (event.session.new) {
      // New Session
      console.log("NEW SESSION")
    }

    switch (event.request.type) {

      case "LaunchRequest":
        // Launch Request
        console.log(`LAUNCH REQUEST`)
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Oh hello there Evelyn. How can I help you?", true),
            {}
          )
        )
        break;

      case "IntentRequest":
        // Intent Request
        console.log(`INTENT REQUEST`)

        switch(event.request.intent.name) {
          case "ConnorLocation":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`I think Connor is at his house. Evelyn is at her house and Connor is at his house with Megan and Chris.`, true),
                    {}
                  )
                )
            break;

          case "DaddyLocation":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Daddy is on a work trip Evelyn. But daddy misses you very much. Maybe you can talk to him on the phone later.`, true),
                    {}
                  )
                )
            break;


          case "EvelynBathtime":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Evelyn, you should definitely take a bath. Maybe we can put color in it.`, true),
                    {}
                  )
                )
            break;

           case "KnowMuffinMan":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Yes, I know the muffin man The muffin man The muffin man. He lives on Drury Lane.`, true),
                    {}
                  )
                )
            break;

           case "EvelynBrushTeeth":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Yes Evelyn it's time to brush your teeth. You should brush your teeth two times a day.`, true),
                    {}
                  )
                )
            break;

           case "MommyLove":
            context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Mommy loves you big as the sky, and over the moon Evelyn.`, true),
                    {}
                  )
                )
            break;

          default:
            throw "Invalid intent"
        }

        break;

    case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`)
        break;

    default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

    }

  } catch(error) { context.fail(`Exception: ${error}`) }

}

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }

callback(null, 'Hello from Lambda');
};
