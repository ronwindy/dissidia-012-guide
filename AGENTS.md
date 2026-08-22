# Agent Instructions

## Version Control

- **Git:** Never perform `git commit` or `git push` commands without explicit user acceptance for each specific action. Do not use `SafeToAutoRun: true` for these commands.

## Testing & Verification

- **Browser Testing:** Do not use browser testing or browser automation tools unless explicitly prompted by the user. Let the user do all verification themselves.

## Script Execution & Safety

- **Pre-execution Explanation:** Whenever you intend to create or run a script (or execute shell commands) that requires user approval, provide a brief but sufficient explanation covering:
  - The purpose and actions of the script/command.
  - Potential security issues, file/system modifications, or side effects.
  - Why it is safe to run, giving the user sufficient confidence to approve execution.

## Strict Communication Protocol

CRITICAL: Do not answer quickly without carefully analyzing the questions or requests first. Only answer or give suggestions if you are at least 97% confident in what your responses exactly match what the user needs. In case there is not enough information, the requests or questions are not clear in context, or there are too many responses that suit the context, you should ask follow-up questions to clarify exactly what the requirements are, and respond when there is enough context.