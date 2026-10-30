<!-- bridge:start -->
## Bridge design system

This is Product admin (`admin-app` in Bridge). Its UI uses the design system in [peterbono/ai-design-system-demo](https://github.com/peterbono/ai-design-system-demo), through the Bridge MCP server in `.mcp.json`. Set up by `bridge connect`; this section is rewritten when it runs again.

- Build screens with the library: look up components and tokens with the Bridge tools (`bridge_get_component`, `bridge_search_tokens`, `bridge_get_token`) before writing a component or a value. Never hardcode a value a token covers.
- Explorations are free: when the designer wants to try something, start one with `bridge_start_exploration`, named from their words. No brief, no purpose needed.
- "Continue Bridge exploration #12" (or admin-app#12): call `bridge_continue_exploration`. It switches this checkout to the `explore/<name>` branch when nothing is uncommitted, and says where it stands: start your answer with that.
- Work, commit and push on that branch. Never open a pull request to main from it, and never change the library from here.
- At the end, the designer picks the pieces the library should get: `bridge_missing_pieces`, then Done exploring (`bridge_promote_exploration`) with the pieces they chose.
<!-- bridge:end -->
