import React from "react";

import "./Draw.css";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "@g-loot/react-tournament-brackets";

import matches from "../../data/matches";

const Draw = () => {
  const WhiteTheme = createTheme({
    textColor: { main: "#000000", highlighted: "#07090D", dark: "#3E414D" },
    matchBackground: { wonColor: "#D4B783", lostColor: "#ffffff" },
    score: {
      background: { wonColor: "#87b2c4", lostColor: "#ffffff" },
      text: { highlightedWonColor: "#000000", highlightedLostColor: "#000000" },
    },
    roundHeader: { backgroundColor: "#D4B783", fontColor: "#000000" },
    connectorColor: "#89634A",
    connectorColorHighlight: "#da96c6",
    svgBackground: "#FAFAFA",
  });

  return (
    <div className="draw-page">
      <SingleEliminationBracket
        matches={matches}
        theme={WhiteTheme}
        options={{
          style: {
            roundHeader: {
              backgroundColor: WhiteTheme.roundHeader.backgroundColor,
              fontColor: WhiteTheme.roundHeader.fontColor,
            },
            connectorColor: WhiteTheme.connectorColor,
            connectorColorHighlight: WhiteTheme.connectorColorHighlight,
          },
        }}
        matchComponent={({
          match,
          onMatchClick,
          onPartyClick,
          onMouseEnter,
          onMouseLeave,
          topParty,
          bottomParty,
          topWon,
          bottomWon,
          topHovered,
          bottomHovered,
          topText,
          bottomText,
          connectorColor,
          computedStyles,
          teamNameFallback,
          resultFallback,
        }) => (
          <div className="draw-match">
            <div
              className={
                topParty.isWinner
                  ? "draw-match-participant winner"
                  : "draw-match-participant"
              }
            >
              <div className="participant-name">
                <span className="name">
                  {topParty.name || teamNameFallback}
                </span>
                <span className="biscuit">
                  {topParty.biscuits || teamNameFallback}
                </span>
              </div>
              <div className="participant-score">
                {topParty.resultText ?? resultFallback(topParty)}
              </div>
            </div>
            <div
              className={
                bottomParty.isWinner
                  ? "draw-match-participant winner"
                  : "draw-match-participant"
              }
            >
              <div className="participant-name">
                <span className="name">
                  {bottomParty.name || teamNameFallback}
                </span>
                <span className="biscuit">
                  {bottomParty.biscuits || teamNameFallback}
                </span>
              </div>
              <div className="participant-score">
                {bottomParty.resultText ?? resultFallback(topParty)}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Draw;
