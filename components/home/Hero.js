"use client";

import { useState } from "react";
import { C } from "../data/constants";

export default function Hero() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Ask anything. This is your decision intelligence layer."
    }
  ]);

  function handleSubmit() {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "This is a placeholder response. Next step is API integration."
      }
    ];

    setMessages(newMessages);
    setInput("");
  }

  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px" }}>
      
      {/* CHAT WINDOW */}
      <div
        style={{
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          padding: 16,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          background: "#0B0B0D"
        }}
      >
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? C.amber : "#1A1A1D",
                color: "#fff",
                padding: "10px 12px",
                borderRadius: 10,
                maxWidth: "75%",
                fontSize: 14,
                lineHeight: 1.4
              }}
            >
              {m.content}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a decision, problem, or prompt..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              background: "#111",
              color: "#fff"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "12px 16px",
              background: C.amber,
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
