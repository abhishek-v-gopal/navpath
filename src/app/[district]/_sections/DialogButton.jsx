"use client";

import { useState } from "react";
import EnquiryDialog from "./EnquiryDialog";

export default function DialogButton({ title, subtitle, className, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      <EnquiryDialog open={open} onOpenChange={setOpen} title={title} subtitle={subtitle} />
    </>
  );
}
