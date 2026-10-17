export function ConfirmationNotice({ compact = false }: { compact?: boolean }) {
  return (
    <p className={compact ? "notice notice-compact" : "notice"}>
      Room availability, event arrangements, prices and booking terms are confirmed only after the team replies.
    </p>
  );
}

