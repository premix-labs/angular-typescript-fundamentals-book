# Security Review Checklist

- [ ] no real secret/token/password/API key in source, Angular environments, mocks or output
- [ ] environment values are documented as public client configuration
- [ ] external JSON passes runtime validation
- [ ] untrusted text uses normal Angular binding and is not rendered with `innerHTML`
- [ ] Problem Details does not expose stack/SQL/local path in UI
- [ ] frontend validation is not described as security enforcement
- [ ] MSW is development/test-only and cannot silently ship enabled without intent
- [ ] unsafe URL/resource bindings are not constructed from untrusted values
- [ ] dependency audit has no unresolved moderate-or-higher advisory

Auth, authorization, CORS policy, XSRF design and token storage are not implemented in this fundamentals book.
