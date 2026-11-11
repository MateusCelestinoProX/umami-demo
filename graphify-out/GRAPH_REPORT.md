# Graph Report - umami-demo  (2026-11-10)

## Corpus Check
- 5 files · ~53,508 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 667 nodes · 1316 edges · 32 communities (22 shown, 9 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- webgl-backgrounds.js
- _
- q
- U
- ar
- W
- UmamiDemoApp
- ks
- pt
- it
- .z
- ke
- tn
- .update
- V
- .intersectMeshes
- le
- sr
- .addAttribute
- Ot
- .sub
- .copy
- Umami Analytics // Portfolio Demo Edition
- ct
- zs
- vt
- vercel.json
- oe
- .multiply
- ue
- ji

## God Nodes (most connected - your core abstractions)
1. `_` - 208 edges
2. `requestAnimationFrame()` - 42 edges
3. `U` - 35 edges
4. `V` - 33 edges
5. `getOptimizedDPR()` - 31 edges
6. `UmamiDemoApp` - 30 edges
7. `resize()` - 29 edges
8. `ks` - 25 edges
9. `tn` - 23 edges
10. `W` - 19 edges

## Surprising Connections (you probably didn't know these)
- `j()` --indirect_call--> `v()`  [INFERRED]
  js/ogl.js → js/ogl.js  _Bridges community 17 → community 11_
- `he()` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 21_
- `ke` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 11_
- `sr()` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 17_
- `zs` --calls--> `le()`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 16 → community 24_

## Import Cycles
- None detected.

## Communities (32 total, 9 thin omitted)

### Community 0 - "webgl-backgrounds.js"
Cohesion: 0.06
Nodes (60): buildStrandsPalette(), easePower2InOut(), getOptimizedDPR(), hexToRgb(), hexToRgbArr(), initAcidSquares(), initAntigravity(), initAurora() (+52 more)

### Community 1 - "_"
Cohesion: 0.04
Nodes (41): _, ae(), at, bs(), ce(), dt, Ei, Et (+33 more)

### Community 2 - "q"
Cohesion: 0.07
Nodes (11): As(), br, p(), gr, K, kr, nr, q (+3 more)

### Community 3 - "U"
Cohesion: 0.05
Nodes (16): ai(), ci(), di(), gi(), hi(), ii(), li(), mi() (+8 more)

### Community 4 - "ar"
Cohesion: 0.09
Nodes (7): ar, dr(), kt(), mr, pr(), Ut(), yr

### Community 5 - "W"
Cohesion: 0.07
Nodes (15): be(), gt, Ie(), Ne(), on, or, pn, rn (+7 more)

### Community 6 - "UmamiDemoApp"
Cohesion: 0.12
Nodes (3): MOCK_WEBSITES, SHADER_PRESETS, UmamiDemoApp

### Community 7 - "ks"
Cohesion: 0.10
Nodes (3): ge(), ks, me()

### Community 8 - "pt"
Cohesion: 0.07
Nodes (9): bi(), en, _i(), pt, Se(), Si(), sn, Ti() (+1 more)

### Community 9 - "it"
Cohesion: 0.14
Nodes (3): Ds(), it, St

### Community 10 - ".z"
Cohesion: 0.08
Nodes (4): Gs(), Hs(), qs(), Xs()

### Community 11 - "ke"
Cohesion: 0.11
Nodes (11): er, fr(), A(), E(), m(), v(), ke, tr (+3 more)

### Community 13 - ".update"
Cohesion: 0.13
Nodes (5): cs, Fs(), is, rr, Ys()

### Community 14 - "V"
Cohesion: 0.10
Nodes (3): De(), qi(), V

### Community 15 - ".intersectMeshes"
Cohesion: 0.20
Nodes (3): cr, Ee(), ki()

### Community 17 - "sr"
Cohesion: 0.21
Nodes (9): nn(), sr(), C(), et(), j(), L(), N(), tt() (+1 more)

### Community 21 - ".copy"
Cohesion: 0.22
Nodes (3): he(), ri(), ye()

### Community 22 - "Umami Analytics // Portfolio Demo Edition"
Cohesion: 0.22
Nodes (8): 🏗️ Arquitetura do Sistema, 👤 Autor & Engenharia, ☁️ Deploy Imediato na Vercel, 🌟 Destaques do Projeto, 🚀 Enterprise Web Telemetry, Privacy-First Architecture & Liquid Glass Experience, 🚀 Execução Local Rápida, 🕹️ Funcionalidades Demonstradas, Umami Analytics // Portfolio Demo Edition

### Community 23 - "ct"
Cohesion: 0.29
Nodes (3): ct(), fi(), ve

### Community 24 - "zs"
Cohesion: 0.33
Nodes (3): bt(), Tt(), zs

### Community 25 - "vt"
Cohesion: 0.33
Nodes (3): Es(), Ms(), vt()

### Community 26 - "vercel.json"
Cohesion: 0.33
Nodes (5): cleanUrls, headers, rewrites, $schema, trailingSlash

## Knowledge Gaps
- **44 isolated node(s):** `SHADER_PRESETS`, `MOCK_WEBSITES`, `fe`, `pe`, `Ei` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 169 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_` connect `_` to `webgl-backgrounds.js`, `q`, `U`, `ar`, `W`, `ks`, `pt`, `it`, `.z`, `ke`, `tn`, `.update`, `V`, `.intersectMeshes`, `le`, `sr`, `.addAttribute`, `Ot`, `.sub`, `.copy`, `ct`, `zs`, `vt`, `.computeBoundingSphere`, `oe`, `.multiply`, `ue`, `ji`?**
  _High betweenness centrality (0.706) - this node is a cross-community bridge._
- **Why does `V` connect `V` to `webgl-backgrounds.js`, `_`, `W`, `.update`, `.intersectMeshes`, `sr`, `.sub`, `.copy`, `.computeBoundingSphere`, `ji`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `ks` connect `ks` to `webgl-backgrounds.js`, `_`, `q`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **What connects `SHADER_PRESETS`, `MOCK_WEBSITES`, `fe` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `webgl-backgrounds.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06413730803974707 - nodes in this community are weakly interconnected._
- **Should `_` be split into smaller, more focused modules?**
  _Cohesion score 0.041742286751361164 - nodes in this community are weakly interconnected._
- **Should `q` be split into smaller, more focused modules?**
  _Cohesion score 0.06951219512195123 - nodes in this community are weakly interconnected._