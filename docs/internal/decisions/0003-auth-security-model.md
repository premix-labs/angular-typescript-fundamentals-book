# 0003 Auth And Security Scope

## Status

Accepted

## Decision

- no authentication, authorization, password, token or user account
- frontend validation is usability, not a security boundary
- external responses are runtime-validated
- no secret is stored in Angular environment files or browser storage
- untrusted text is rendered through normal Angular binding, never injected as HTML
- development mock mode is explicit and cannot be enabled accidentally in production

## Consequences

- final SPA is a learning client, not a publicly secured production app
- auth, CORS, XSRF policy and token lifecycle belong in a dedicated follow-up
