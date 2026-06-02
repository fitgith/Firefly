---
title: Cayley-Hamilton 定理的证明
published: 2026-05-31
tags:
  - 数学
  - 教程
description: Cayley-Hamilton 定理的线性变换版本在很多高代书籍中没有给出严谨证明，来自同伴提供的证明。
---

# 定理内容

线性变换版本：设 $V$ 是域 $F$ 上的有限维线性空间， $T$ 是一个 $V$ 上的线性变换， $f_{T}$ 是 $T$ 的特征多项式，则 $f_{T}(T) = 0$ .
矩阵版本：设 $F$ 是域， $A \in F^{n \times n}$ 是一个 $n \times n$ 矩阵， $f_A$ 是 $A$ 的特征多项式，则 $f_A(A) = 0$ .

# 定理证明

由卿本卿整理.

线性变换版本：定义乘法 $F[x]\times V\to V$ 为

  

$$

(f, \alpha) \mapsto f \alpha = f (T) \alpha .

$$

  

定义形式矩阵乘法 $V^n \times F[x]^{n \times n} \to V^n$ 为

  

$$

(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) A = (\beta_ {1}, \beta_ {2}, \dots , \beta_ {n}), \quad \beta_ {j} = \sum_ {i = 1} ^ {n} A _ {i j} \alpha_ {i}.

$$

  

利用乘法与形式矩阵乘法的定义，不难验证如下的乘法结合律：对任意 $(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})\in V^{n},A,B\in F^{n\times n}$ ，有

  

$$

[ (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) A ] B = (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) (A B).

$$

  

取 V 的有序基 $\mathcal{B}=\{\alpha_{1},\alpha_{2},\cdots,\alpha_{n}\}$ ，设 $A=[T]_{B}$ 是 T 关于 B 的矩阵，则

  

$$

\begin{array}{l} (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) A = (T \alpha_ {1}, T \alpha_ {2}, \dots , T \alpha_ {n}) \\ = \left(x \alpha_ {1}, x \alpha_ {2}, \dots , x \alpha_ {n}\right) = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right) x I _ {n}, \\ \end{array}

$$

  

即 $(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})(xI_{n}-A)=(0,0,\cdots,0)$ .

  

另一方面, 考虑 $xI_{n} - A$ 的伴随阵

  

$B := \mathrm{adj}(xI_n - A) \in F[x]^{n \times n}$ , 则

  

$$

(x I _ {n} - A) B = B (x I _ {n} - A) = \det (x I _ {n} - A) I _ {n} = f _ {T} (x) I _ {n}.

$$

  

于是

  

$$

\begin{array}{l} (0, 0, \dots , 0) = [ (\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}) (x I _ {n} - A) ] B \\ = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right) \left[ \left(x I _ {n} - A\right) B \right] \\ = \left(\alpha_ {1}, \alpha_ {2}, \dots , \alpha_ {n}\right) f _ {T} (x) I _ {n} \\ = \left(f _ {T} \alpha_ {1}, f _ {T} \alpha_ {2}, \dots , f _ {T} \alpha_ {n}\right) \\ = \left(f _ {T} (T) \alpha_ {1}, f _ {T} (T) \alpha_ {2}, \dots , f _ {T} (T) \alpha_ {n}\right). \\ \end{array}

$$

  

因此 $f_{T}(T)\alpha_{1}=f_{T}(T)\alpha_{2}=\cdots=f_{T}(T)\alpha_{n}=0$ ，这推出 $f_{T}(T)=0.$ □

  

矩阵版本：对矩阵 $M \in F^{n \times n}$ ，用 $L_{M}$ 表示左乘 $M$ ，则 $L_{M}$ 是列向量空间 $F^{1 \times n}$ 上的线性变换。由线性变换版本的 Cayley-Hamilton 定理，

  

$$

L _ {f _ {A} (A)} = f _ {A} \left(L _ {A}\right) = f _ {L _ {A}} \left(L _ {A}\right) = 0,

$$

  

故 $f_{A}(A) = 0. \Box$