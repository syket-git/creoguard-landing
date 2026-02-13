export function TerminalDemo() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-500 sm:text-sm">
            See It In Action
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Beautiful, actionable output
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            CreoGuard provides clear issue reports with line numbers, severity
            levels, and suggested fixes — all in your terminal.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="overflow-hidden rounded-xl border border-border/50 bg-[#0a0a0a] shadow-2xl shadow-emerald-500/5">
          {/* Title Bar */}
          <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="size-2.5 rounded-full bg-[#ff5f57] sm:size-3" />
            <div className="size-2.5 rounded-full bg-[#febc2e] sm:size-3" />
            <div className="size-2.5 rounded-full bg-[#28c840] sm:size-3" />
            <span className="ml-2 font-mono text-[10px] text-white/40 sm:ml-3 sm:text-xs">
              terminal
            </span>
          </div>

          {/* Terminal Content — scrollable on small screens */}
          <div className="overflow-x-auto p-4 sm:p-6">
            <div className="min-w-120 font-mono text-[11px] leading-5 sm:min-w-0 sm:text-sm sm:leading-7">
              {/* Command */}
              <div className="text-white/60">
                <span className="text-emerald-400">$</span> git commit -m
                &quot;feat: add user authentication&quot;
              </div>

              <div className="mt-3 sm:mt-4" />

              {/* Box - Reviewing */}
              <div className="text-emerald-400">
                ╭────────────────────────────────────────────────╮
              </div>
              <div className="text-emerald-400">
                │{"  "}
                <span className="text-white">
                  CreoGuard reviewing 3 staged files...
                </span>
                {"         "}│
              </div>
              <div className="text-emerald-400">
                ╰────────────────────────────────────────────────╯
              </div>

              <div className="mt-2 sm:mt-3" />

              {/* File reviews */}
              <div className="text-white/60">
                {"  "}Reviewing{" "}
                <span className="text-white">src/auth/login.ts</span>{" "}
                ········ <span className="text-emerald-400">done</span>
              </div>
              <div className="text-white/60">
                {"  "}Reviewing{" "}
                <span className="text-white">src/auth/utils.ts</span>{" "}
                ········ <span className="text-emerald-400">done</span>
              </div>
              <div className="text-white/60">
                {"  "}Reviewing{" "}
                <span className="text-white">src/api/routes.ts</span>{" "}
                ········ <span className="text-emerald-400">done</span>
              </div>

              <div className="mt-3 sm:mt-4" />

              {/* Issue Report */}
              <div className="text-white/30">
                {"  "}┌─ src/auth/login.ts ─────────────────────────
              </div>
              <div className="text-white/30">{"  "}│</div>
              <div>
                {"  "}
                <span className="text-white/30">│</span>
                {"  "}
                <span className="text-red-400">✖ CRITICAL</span>{" "}
                <span className="text-white/60">[line 45]</span>{" "}
                <span className="text-white">SQL Injection</span>
              </div>
              <div className="text-white/30">{"  "}│</div>
              <div className="text-white/30">
                {"  "}│{"    "}
                <span className="text-white/40">Current:</span>
              </div>
              <div>
                {"  "}
                <span className="text-white/30">│</span>
                {"    "}
                <span className="text-red-400/70">│ - </span>
                <span className="text-red-300/70">
                  {`const q = \`SELECT * FROM users WHERE id='\${id}'\``}
                </span>
              </div>
              <div className="text-white/30">{"  "}│</div>
              <div className="text-white/30">
                {"  "}│{"    "}
                <span className="text-white/40">Suggested fix:</span>
              </div>
              <div>
                {"  "}
                <span className="text-white/30">│</span>
                {"    "}
                <span className="text-emerald-400/70">│ + </span>
                <span className="text-emerald-300/70">
                  {`const q = 'SELECT * FROM users WHERE id = $1'`}
                </span>
              </div>
              <div>
                {"  "}
                <span className="text-white/30">│</span>
                {"    "}
                <span className="text-emerald-400/70">│ + </span>
                <span className="text-emerald-300/70">
                  await db.query(q, [id])
                </span>
              </div>
              <div className="text-white/30">{"  "}│</div>
              <div className="text-white/30">
                {"  "}└────────────────────────────────────────────────
              </div>

              <div className="mt-3 sm:mt-4" />

              {/* Block Box */}
              <div className="text-red-400">
                ╭────────────────────────────────────────────────╮
              </div>
              <div className="text-red-400">
                │{"  "}
                <span className="text-white">
                  ✖ Commit blocked: 1 critical issue found
                </span>
                {"     "}│
              </div>
              <div className="text-red-400">
                ╰────────────────────────────────────────────────╯
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
