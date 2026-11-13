Upload index.html and the assets/ directory together to any static web host.
Relative URLs support hosting under a subdirectory. No backend or build step.
Do not set Content-Encoding: gzip on assets/*.bin; the viewer decompresses them.
For local preview: python -m http.server 8000 --directory <this-directory>
Open http://localhost:8000 (opening index.html via file:// cannot fetch meshes).
Only publish this export directory; source OBJs and batch caches are unnecessary.
