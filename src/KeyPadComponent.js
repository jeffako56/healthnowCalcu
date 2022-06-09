import React from "react";

export default function KeyPadComponent({ clear, onClick }) {
  return (
    <container
      class="grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        padding: "10px",
        margin: "5px",
      }}
    >
      <button class="grid-item" onClick={(e) => onClick(`C`)}>
        {clear}
      </button>
      <button class="grid-item" onClick={(e) => onClick("CE")}>
        CE
      </button>
      <none class="grid-item"></none>
      <button class="grid-item" onClick={(e) => onClick("÷")}>
        ÷
      </button>
      <button class="grid-item" onClick={(e) => onClick("7")}>
        7
      </button>
      <button class="grid-item" onClick={(e) => onClick("8")}>
        8
      </button>
      <button class="grid-item" onClick={(e) => onClick("9")}>
        9
      </button>
      <button class="grid-item" onClick={(e) => onClick("x")}>
        ×
      </button>
      <button class="grid-item" onClick={(e) => onClick("4")}>
        4
      </button>
      <button class="grid-item" onClick={(e) => onClick("5")}>
        5
      </button>
      <button class="grid-item" onClick={(e) => onClick("6")}>
        6
      </button>
      <button class="grid-item" onClick={(e) => onClick("-")}>
        -
      </button>
      <button class="grid-item" onClick={(e) => onClick("1")}>
        1
      </button>
      <button class="grid-item" onClick={() => onClick("2")}>
        2
      </button>
      <button class="grid-item" onClick={() => onClick("3")}>
        3
      </button>
      <button class="grid-item" onClick={() => onClick("+")}>
        +
      </button>

      <button class="zero" onClick={() => onClick("0")}>
        0
      </button>

      <button class="grid-item" onClick={() => onClick(".")}>
        ●
      </button>
      <button class="grid-item" onClick={() => onClick("=")}>
        =
      </button>
    </container>
  );
}
