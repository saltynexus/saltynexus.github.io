---
layout: post
title: WEC-Sim User Defined Random Waves
date: 2024-07-23 08:00:00-1000
description: A method to include user defined random waves in a WEC-Sim simulation
tags: OSWEC Matlab random Fourier 
categories: WEC-Sim
related_posts: false
thumbnail: assets/img/blog_thumbnails/9.jpg
---

This theme supports rendering beautiful math in inline and display modes using [MathJax 3](https://www.mathjax.org/) engine. You just need to surround your math expression with `$$`, like `$$ E = mc^2 $$`. If you leave it inside a paragraph, it will produce an inline expression, just like $$ E = mc^2 $$.

To use display mode, again surround your expression with `$$` and place it as a separate paragraph. Here is an example:

In the [WEC-Sim docs](https://wec-sim.github.io/WEC-Sim/main/index.html), under the **Advanced Features -> Body Features -> Nonlinear Buoyancy and Froude-Kylov Excitation**, there is a note that reads:
> ##### Note
>
> WEC-Sim’s nonlinear buoyancy and Froude-Krylov wave excitation option may be used for regular or irregular waves but not with user-defined irregular waves.
{: .block-note }

$$
\sum_{k=1}^\infty |\langle x, e_k \rangle|^2 \leq \|x\|^2
$$

You can also use `\begin{equation}...\end{equation}` instead of `$$` for display mode math.
MathJax will automatically number equations:

\begin{equation}
\label{eq:cauchy-schwarz}
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\end{equation}

and by adding `\label{...}` inside the equation environment, we can now refer to the equation using `\eqref`.

Note that MathJax 3 is [a major re-write of MathJax](https://docs.mathjax.org/en/latest/upgrading/whats-new-3.0.html) that brought a significant improvement to the loading and rendering speed, which is now [on par with KaTeX](http://www.intmath.com/cg5/katex-mathjax-comparison.php).
