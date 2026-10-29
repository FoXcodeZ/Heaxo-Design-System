---
name: heaxo-design
description: Use this skill to generate well-branded interfaces and assets for Heaxo (a cache-friendly ECS 3D game engine in C++ with C# scripting and node-based visual scripting), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

**Tech stack — get this right:** Heaxo is a cache-friendly **ECS engine in C++**. **C# is the primary scripting language** with hot-reload; **C++** is for engine-side / perf-critical user code; **node-based visual scripting** is offered for designers. Sample code in any artifact MUST be C# (game logic) or C++ (engine code). **Never use Rust** — it is not part of the stack.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
