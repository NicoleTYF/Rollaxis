---
name: Add a package
about: Use this template for tracking dependency additions.
title: 'Dependencies: Add [PACKAGE]'
---

# Summary

Install the necessary packages for <!-- DEPENDENCY NAME -->. This includes the following precautions:

When you install it, verify thatMake sure there are no dependency incompatibility errors, and that the codebase still runs without errors.

# Check GitHub Security Advisories

Check the dependency against the [GitHub Security Advisory Database](https://github.com/advisories). If it shows unresolved advisories, reply to this issue with the link to the advisory and ask to close the issue.

# Add the package

If all goes well, go ahead and make the installation locally:

1. Make the necessary changes to package.json.
2. Delete the "node_modules" folder in your project.
3. Run `npm install` in the terminal.
4. Verify that there are no dependency incompatibility errors. If any do come up, feel free to bring it up in the angular Slack channel.

# Verify dependency security

After installing the dependency locally, run `npm audit`. Verify that no new advisories come up. If there are, reply with snippets of the audit report.

Example advisory:

```
quill  <=1.3.7
Severity: moderate
Cross-site Scripting in quill - https://github.com/advisories/GHSA-4943-9vgg-gr5r
No fix available
node_modules/quill
  ngx-quill  *
  Depends on vulnerable versions of quill
  node_modules/ngx-quill

2 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
```

# Testing

If the audit passes, run the app with `npm run start:dev` and verify that:

1. There are no build errors.
2. There are no browser console errors.
