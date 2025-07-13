import { CheckCircle2, XCircle } from "lucide-react";
import * as React from "react";

import { StatusMessageProps } from "@/lib/types";

export const StatusMessage: React.FC<StatusMessageProps> = ({
  status,
  message,
}) => {
  if (status === "idle") return null;

  const isSuccess = status === "success";
  const Icon = isSuccess ? CheckCircle2 : XCircle;
  const className = isSuccess
    ? "text-green-700 bg-green-50 border-green-200"
    : "text-destructive bg-destructive/10 border-destructive/20";

  return (
    <div
      className={`p-3 rounded-lg border flex items-center gap-2 ${className}`}
    >
      <Icon className='w-4 h-4' />
      <span className='text-sm font-medium'>{message}</span>
    </div>
  );
};
