# JSEnv
![Workflow Status](https://github.com/uxdxdev/jsenv/actions/workflows/deploy-github-pages.yml/badge.svg)

![image](https://github.com/uxdxdev/jsenv/assets/3397660/a5f76a14-3cbc-4644-ae63-fb511757c5cc)

Write code in an online Monaco editor, have it transpiled in the browser automatically, and render the results. 

JSEnv is a development environment running entirely in your browser tab. Dependencies are automatically identified, downloaded, and transpiled for use in your scripts using esbuild-wasm and the unpkg api.

Share your code with a simple link

## Examples

- React + @radix-ui + styled-components [link](http://localhost:3000/jsenv?data=aW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7CmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nOwovLyBmb250cwppbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJzsKLy8gY3NzLWluLWpzCmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJzsKLy8gUmFkaXggaHR0cHM6Ly93d3cucmFkaXgtdWkuY29tLwppbXBvcnQgeyBibHVlLCBncmVlbiB9IGZyb20gJ0ByYWRpeC11aS9jb2xvcnMnOwppbXBvcnQgeyBGYWNlSWNvbiB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1pY29ucyc7CgovLyBzdHlsZWQtY29tcG9uZW50cyBnbG9iYWwgc3R5bGVzIGRvbid0IHdvcmsgaW4gdGhlIHByZXZpZXcgaWZyYW1lCi8vIHNvIHlvdSBuZWVkIHRvIHNldCBzdHlsZXMgb24gdGhlIGJvZHkgZGlyZWN0bHkKZG9jdW1lbnQuYm9keS5zdHlsZSA9IGBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiAnQXRraW5zb24gSHlwZXJsZWdpYmxlJztgOwoKV2ViRm9udC5sb2FkKHsKICBnb29nbGU6IHsKICAgIGZhbWlsaWVzOiBbJ0F0a2luc29uIEh5cGVybGVnaWJsZSddLAogIH0sCn0pOwoKY29uc3QgdGhlbWUgPSB7CiAgY29sb3JzOiB7CiAgICAuLi5ibHVlLAogICAgLi4uZ3JlZW4sCiAgfSwKfTsKCmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYAogIGZvbnQtc2l6ZTogMS41ZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIGNvbG9yOiBwYWxldmlvbGV0cmVkOwpgOwoKY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYCAgCiAgcGFkZGluZzogNGVtOwogIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7CmA7Cgpjb25zdCBDb3VudGVyID0gc3R5bGVkLmRpdmAKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKYDsKCmNvbnN0IENvdW50VmFsdWUgPSBzdHlsZWQuZGl2YAogIGZvbnQtc2l6ZTogMmVtOwpgOwoKY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmAKICBmb250LWZhbWlseTogaW5oZXJpdDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsdWU0fTsKICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibHVlMTF9OwogIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibHVlN307CiAgJjpob3ZlciB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZWVuNX07CiAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JlZW44fTsKICB9CmA7Cgpjb25zdCB1c2VDb3VudGVyID0gKCkgPT4gewogIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7CgogIGZ1bmN0aW9uIGluY3JlbWVudCgpIHsKICAgIHNldENvdW50KGNvdW50ICsgMSk7CiAgfQogIHJldHVybiB7CiAgICBjb3VudCwKICAgIGluY3JlbWVudCwKICB9Owp9OwoKY29uc3QgQ291bnQgPSAoKSA9PiB7CiAgY29uc3QgeyBjb3VudCwgaW5jcmVtZW50IH0gPSB1c2VDb3VudGVyKCk7CiAgcmV0dXJuICgKICAgIDxDb3VudGVyPgogICAgICA8Q291bnRWYWx1ZT57Y291bnR9PC9Db3VudFZhbHVlPgogICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsKICAgICAgICAgIGluY3JlbWVudCgpCiAgICAgICAgICBjb25zb2xlLmxvZygnYnV0dG9uIGNsaWNrZWQnKTsKICAgICAgICB9CiAgICAgIH0+Q2xpY2sgbWU8L0J1dHRvbj4KICAgIDwvQ291bnRlcj4KICApOwp9OwoKY29uc3QgQXBwID0gKCkgPT4gewogIHJldHVybiAoCiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PgogICAgICA8V3JhcHBlcj4KICAgICAgICA8VGl0bGU+CiAgICAgICAgICBIZWxsbyBXb3JsZCEKICAgICAgICAgIDxGYWNlSWNvbiAvPgogICAgICAgIDwvVGl0bGU+CiAgICAgICAgPENvdW50IC8+CiAgICAgIDwvV3JhcHBlcj4KICAgIDwvVGhlbWVQcm92aWRlcj4KICApOwp9OwoKUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOw==)
- React + @mui/joy + emotion [link](http://localhost:3000/jsenv?data=aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsKaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CmltcG9ydCB7IENzc1ZhcnNQcm92aWRlciB9IGZyb20gJ0BtdWkvam95L3N0eWxlcyc7CmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL2pveS9Dc3NCYXNlbGluZSc7CmltcG9ydCBKb3kgZnJvbSAnQG11aS9qb3knOwppbXBvcnQgRW1vdGlvblJlYWN0IGZyb20gJ0BlbW90aW9uL3JlYWN0JzsKaW1wb3J0IEVtb3Rpb25TdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJzsKaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7CgppbXBvcnQgQWNjb3JkaW9uR3JvdXAgZnJvbSAnQG11aS9qb3kvQWNjb3JkaW9uR3JvdXAnOwppbXBvcnQgQWNjb3JkaW9uIGZyb20gJ0BtdWkvam95L0FjY29yZGlvbic7CmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvam95L0FjY29yZGlvbkRldGFpbHMnOwppbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbXVpL2pveS9BY2NvcmRpb25TdW1tYXJ5JzsKCldlYkZvbnQubG9hZCh7CiAgZ29vZ2xlOiB7CiAgICBmYW1pbGllczogWydJbnRlciddLAogIH0sCn0pOwoKZnVuY3Rpb24gQnV0dG9uVXNhZ2UoKSB7CiAgcmV0dXJuIDxCdXR0b24gdmFyaWFudD0ic29saWQiPkhlbGxvIHdvcmxkPC9CdXR0b24+Owp9Cgpjb25zdCBBcHAgPSAoKSA9PiB7CiAgcmV0dXJuICgKICAgIDxDc3NWYXJzUHJvdmlkZXI+CiAgICAgIDxDc3NCYXNlbGluZSAvPgogICAgICA8QWNjb3JkaW9uR3JvdXA+CiAgICAgICAgPEFjY29yZGlvbj4KICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5PkZpcnN0IGFjY29yZGlvbiB0ZXN0PC9BY2NvcmRpb25TdW1tYXJ5PgogICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+CiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbwogICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLgogICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPgogICAgICAgIDwvQWNjb3JkaW9uPgogICAgICAgIDxBY2NvcmRpb24+CiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeT5TZWNvbmQgYWNjb3JkaW9uPC9BY2NvcmRpb25TdW1tYXJ5PgogICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+CiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbwogICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLgogICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPgogICAgICAgIDwvQWNjb3JkaW9uPgogICAgICAgIDxBY2NvcmRpb24+CiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeT5UaGlyZCBhY2NvcmRpb248L0FjY29yZGlvblN1bW1hcnk+CiAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz4KICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvCiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuCiAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+CiAgICAgICAgPC9BY2NvcmRpb24+CiAgICAgIDwvQWNjb3JkaW9uR3JvdXA+CiAgICA8L0Nzc1ZhcnNQcm92aWRlcj4KICApOwp9OwoKUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOw==)
- React + Bulma CSS [link](http://localhost:3000/jsenv?data=aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsKaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MnOwoKY29uc3QgQXBwID0gKCkgPT4gewogIHJldHVybiAoCiAgICA8ZGl2IGNsYXNzbmFtZT0ibWFpbiI+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJidXR0b25zIj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJidXR0b24gaXMtcHJpbWFyeSI+UHJpbWFyeTwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ1dHRvbiBpcy1saW5rIj5MaW5rPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnV0dG9uIGlzLWluZm8iPkluZm88L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJidXR0b24gaXMtc3VjY2VzcyI+U3VjY2VzczwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ1dHRvbiBpcy13YXJuaW5nIj5XYXJuaW5nPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnV0dG9uIGlzLWRhbmdlciI+RGFuZ2VyPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnV0dG9uIGlzLWJsYWNrIj5CbGFjazwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ1dHRvbiBpcy13aGl0ZSI+V2hpdGU8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJidXR0b24gaXMtZGFyayI+RGFyazwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ1dHRvbiBpcy1saWdodCI+TGlnaHQ8L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICApOwp9OwoKUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOw==)
- "Two Sum" solution [link](http://localhost:3000/jsenv?data=dmFyIHR3b1N1bSA9IGZ1bmN0aW9uIChudW1zLCB0YXJnZXQpIHsKICBsZXQgYyA9IHt9OwogIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykgewogICAgbGV0IHIgPSB0YXJnZXQgLSBudW1zW2ldOwogICAgaWYgKHIgaW4gYykgcmV0dXJuIFtjW3JdLCBpXTsKICAgIGNbbnVtc1tpXV0gPSBpOwogIH0KfTsKCmNvbnNvbGUubG9nKHR3b1N1bShbMiwgNywgMTEsIDE1XSwgOSkpOw==)

## Known issues

- The code in the editor is base64 encoded and added to the URL string for persistence, this sharing feature is limited to the max number of characters allowed in the URL string 