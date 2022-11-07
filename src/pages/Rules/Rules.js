import React from "react";

import "./Rules.css";

const Rules = () => {
  return (
    <>
      <div className="main-rules">
        <ol>
          <li>Ogni partecipante può schierare un solo biscotto</li>
          <li>Un biscotto può essere scelto da un solo partecipante</li>
          <li>
            Nel caso in cui un biscotto è stato scelto da più partecipanti,
            verrà data priorità al partecipante "più veloce"
          </li>
          <li>
            I biscotti devono soddisfare i seguenti requisiti:
            <ul>
              <li>Devono essere secchi</li>
              <li>Non devono contenere creme e / o cioccolato</li>
              <li>Possono contenere cacao</li>
              <li>
                Devono essere biscotti "popolari", ovvero che si possono trovare
                comunemente al supermercato
              </li>
            </ul>
          </li>
          <li>In ogni fase del torneo si scontrano due partecipanti</li>
          <li>
            I partecipanti fisseranno in autonomia la data dell'incontro, in
            modo da organizzare la votazione
          </li>
          <li>
            Il partecipante che raccoglie più preferenze dai votanti passa alla
            fase successiva
          </li>
          <li>
            Ad ogni fase è possibile richiedere, da parte di entrambi i
            partecipanti, la degustazione dei biscotti
          </li>
          <li>I biscotti possono essere degustati con bevande</li>
          <li>
            I biscotti vengono valutati mediante i seguenti criteri:
            <ul>
              <li>Bontà del biscotto</li>
              <li>Versatilità</li>
              <li>Inzupposità</li>
              <li>Friabilità</li>
              <li>Parametri a discrezione del partecipante</li>
            </ul>
          </li>
          <li>Il vincitore del Fantabiscotto avrà gloria eterna</li>
          <li>
            Il comitato del Fantabiscotto può intervenire in caso di
            contestazione
          </li>
          <li>Buon Fantabiscotto!</li>
        </ol>
      </div>
    </>
  );
};

export default Rules;
