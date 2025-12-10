import React from "react";
import { useEffect, useRef, useState } from "react";
import InquiryPopup from "./InquiryPopup";

export default function AutoPopupTrigger() {
  const [showPopup, setShowPopup] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    console.log(" AutoPopupTrigger Mounted");

    if (localStorage.getItem("enquiryFormSubmitted")) return;

    const startIdleTimer = () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }

      idleTimer.current = setTimeout(() => {
        console.log("USER IDLE → OPENING POPUP");
        setShowPopup(true);
        localStorage.setItem("enquiryPopupShown", "yes");
      }, 5000); //5 second idle
    };

    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ];

    events.forEach((event) => window.addEventListener(event, startIdleTimer));

    startIdleTimer();

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      events.forEach((event) =>
        window.removeEventListener(event, startIdleTimer)
      );
    };
  }, []);

  return (
    <InquiryPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
  );
}
