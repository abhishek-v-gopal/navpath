"use client";

import { useState } from "react";
import EnquiryDialog from "./EnquiryDialog";

export default function EnquiryTrigger({
  className,
  children,
  title,
  subtitle,
  enquiryType,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <EnquiryDialog
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={subtitle}
        enquiryType={enquiryType}
      />
    </>
  );
}
