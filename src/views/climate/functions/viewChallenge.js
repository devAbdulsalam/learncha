import useWindowSize from "../../games/imago_quad/useWindowSize";

const viewChallenge = (challengeID) => {
    console.log('Viewing Challenge...');
    window.location.href = `/climate/challenge/challenge_ID=${challengeID}`;
    // const stateObj = { id: challengeID };
    // window.history.replaceState(stateObj, `Climate Challenge ${challengeID}`, `/climate/challenge/challenge_ID=${challengeID}`);
    // const query = getQuery();
    // processQuery(query);
  }

  export default viewChallenge;