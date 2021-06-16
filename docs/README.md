# Wasm Practice

Turns out, rust wasm isn't that difficult!

# Run Webserver

```
cd docs
python -m http.server
```


# 🛠️ Build Rust

```
wasm-pack build --release --target web --out-dir=docs && rm docs/.gitignore
```
