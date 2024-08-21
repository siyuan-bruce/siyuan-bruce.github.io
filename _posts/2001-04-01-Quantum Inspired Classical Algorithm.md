---
title: Quantum-inspired Classical Algorithm Source Code
tags: Econometrics
mathjax: true
author: Siyuan JIN
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
---

This note works for breaking down and summarizing the source code from Xanadu library.


```python
def ls_probs(m, n, A):

    r"""Function generating the length-squared (LS) probability distributions for sampling matrix A.

    Args:
        m (int): number of rows of matrix A
        n (int): row n of columns of matrix A
        A (array[complex]): most general case is a rectangular complex matrix

    Returns:
        tuple: Tuple containing the row-norms, LS probability distributions for rows and columns,
        and Frobenius norm.
    """

    # populates array with the row-norms squared of matrix A
    row_norms = np.zeros(m)
    for i in range(m):
        row_norms[i] = np.abs(la.norm(A[i, :]))**2

    # Frobenius norm of A
    A_Frobenius = np.sqrt(np.sum(row_norms))

    LS_prob_rows = np.zeros(m)

    # normalized length-square row probability distribution
    for i in range(m):
        LS_prob_rows[i] = row_norms[i] / A_Frobenius**2

    LS_prob_columns = np.zeros((m, n))

    # populates array with length-square column probability distributions
    # LS_prob_columns[i]: LS probability distribution for selecting columns from row A[i]
    for i in range(m):
        LS_prob_columns[i, :] = [np.abs(k)**2 / row_norms[i] for k in A[i, :]]

    return row_norms, LS_prob_rows, LS_prob_columns, A_Frobenius
```

#### What is the Frobenius norm?
Frobenius norm is a matrix norm that is defined as the square root of the sum of the absolute squares of the matrix elements. It is a generalization of the Euclidean norm to matrices. 

#### why LS_prob_rows and LS_prob_columns have different shapes?
LS_prob_rows is a vector, while LS_prob_columns is a matrix. The reason is that the probability of selecting a column from a row is different from the probability of selecting a row from the matrix. In this scenario, the column probability is always selecting from a row, while the row probability is selecting from the whole matrix.

```python
def sample_C(A, m, n, r, c, row_norms, LS_prob_rows, LS_prob_columns, A_Frobenius):

    r"""Function used to generate matrix C by performing LS sampling of rows and columns of matrix A.

    Args:
        A (array[complex]): rectangular, in general, complex matrix
        m (int): number of rows of matrix A
        n (int): number of columns of matrix A
        r (int): number of sampled rows
        c (int): number of sampled columns
        row_norms (array[float]): norm of the rows of matrix A
        LS_prob_rows (array[float]): row LS probability distribution of matrix A
        LS_prob_columns (array[float]): column LS probability distribution of matrix A
        A_Frobenius (float): Frobenius norm of matrix A

    Returns:
        tuple: Tuple containing the singular values (sigma), left- (w) and right-singular vectors (vh) of matrix C,
        the sampled rows (rows), the column LS prob. distribution (LS_prob_columns_R) of matrix R and split running
        times for the FKV algorithm.
    """

    tic = time.time()
    # sample row indices from row length_square distribution
    rows = np.random.choice(m, r, replace=True, p=LS_prob_rows)
    print(rows)
    columns = np.zeros(c, dtype=int)
    # sample column indices
    for j in range(c):
        # sample row index uniformly at random
        i = np.random.choice(rows, replace=True)
        # sample column from length-square distribution of row A[i]
        columns[j] = np.random.choice(n, 1, p=LS_prob_columns[i])
    print("Column")
    print(columns)
    toc = time.time()
    rt_sampling_C = toc - tic

    # building the lenght-squared distribution to sample columns from matrix R
    R_row = np.zeros(n)
    LS_prob_columns_R = np.zeros((r, n))

    for s in range(r):
        R_row[:] = A[rows[s], :] * A_Frobenius / (np.sqrt(r) * np.sqrt(row_norms[rows[s]]))
        R_row_norm = np.abs(la.norm(R_row[:]))**2
        LS_prob_columns_R[s, :] = [np.abs(k)**2 / R_row_norm for k in R_row[:]]

    tic = time.time()
    # creates empty array for R and C matrices. We treat R as r x c here, since we only need columns later
    R_C = np.zeros((r, c))
    C = np.zeros((r, c))

    # populates array for matrix R with the submatrix of A defined by sampled rows/columns
    for s in range(r):
        for t in range(c):
            R_C[s, t] = A[rows[s], columns[t]]

        # renormalize each row of R
        R_C[s,:] = R_C[s,:] * A_Frobenius / (np.sqrt(r) * np.sqrt(row_norms[rows[s]]))

    # creates empty array of column norms
    column_norms = np.zeros(c)

    # computes column Euclidean norms
    for t in range(c):
        for s in range(r):
            column_norms[t] += np.abs(R_C[s, t])**2

    # renormalize columns of C
    for t in range(c):
        C[:, t] = R_C[:, t] * (A_Frobenius / np.sqrt(column_norms[t])) / np.sqrt(c)

    toc = time.time()
    rt_building_C = toc - tic

    tic = time.time()
    # Computing the SVD of sampled C matrix
    w, sigma, vh = la.svd(C, full_matrices=False)

    toc = time.time()
    rt_svd_C = toc - tic

    return w, rows, sigma, vh, LS_prob_columns_R, rt_sampling_C, rt_building_C, rt_svd_C
```

#### What is difference between row sampling and columns sampling?
The difference is that the column sampling is always selecting from a row, while the row sampling is selecting from the whole matrix. But the columns is a vector for indices conditional on a random sampled row.


#### R_row
R_row is refreshed in each iteration.

#### LS_prob_columns_R
The number of sampled row is r. LS_prob_columns_R works to build a matrix with r rows and n columns. Each row is the length-square probability distribution of the columns of the sampled row. This procedure is renormalized to make the sum of the row equal to 1.

#### R_C
R_C is the matrix of the sampled rows and columns. It is r x c. 

#### what is right-singular vector of one matrix
left-singular vector: $$A^H u_i = \sigma_i v_i$$
right-singular vector: $$A v_i = \sigma_i u_i$$

```python

def uvl_vector(l, A, r, w, rows, sigma, row_norms, A_Frobenius):

    r""" Function to reconstruct right-singular vector of matrix A

    Args:
        l (int): singular vector index
        A (array[complex]): rectangular, in general, complex matrix
        r (int): number of sampled rows from matrix A
        w (array[complex]): left-singular vectors of matrix C
        rows (array[int]): indices of the r sampled rows of matrix A
        row_norms (array[float]): row norms of matrix A
        A_Frobenius (float): Frobenius norm of matrix A

    Returns:
        tuple: Tuple with arrays containing approximated singular vectors :math: '\bm{u}^l, \bm{v}^l'
    """

    m, n = A.shape
    u_approx = np.zeros(m)
    v_approx = np.zeros(n)
    # building approximated v^l vector
    factor = A_Frobenius / ( np.sqrt(r) * sigma[l] )
    for s in range(r):
        v_approx[:] += ( A[rows[s], :] / np.sqrt(row_norms[rows[s]]) ) * w[s, l]
    v_approx[:] = v_approx[:] * factor

    u_approx = (A @ v_approx) / sigma[l]

    return u_approx, v_approx
```

#### What is v_approx?
v_approx is accumulation of sampled rows of matrix A that is normalized and constructed by $$A \times u $$.
u_approx is construced by $$A^H \times v$$.


1. Sample $$r$$ row indices $$i_1, i_2, \ldots, i_r$$ from the row distribution $$p(i)$$. For each row index, select the row $$A_{i_s}$$ and renormalize it as $$R_{i_s}=\frac{\|A\|_F}{\sqrt{r}\left\|A_{i_s}\right\|} A_{i_s}$$. This defines an $$r \times n$$ matrix $$R$$ consisting of the rescaled rows $$R_{i_s}$$.
2. Select an index $$s \in\{1,2, \ldots, r\}$$ uniformly at random, then sample a column index $$j$$ from the column distribution $$q_{i_s}(j)$$. Repeat this a total of $$c$$ times to obtain column indices $$j_1, j_2, \ldots, j_c$$. For each column index, select the column $$R_{\cdot, j_t}$$ and renormalize it as $$C_{\cdot, j_t}=$$ $$\frac{\|A\|_F}{\sqrt{c}\left\|R_{\cdot, j_t}\right\|} R_{\cdot, j_t}$$. This defines a matrix $$C$$ consisting of the rescaled columns $$C_{\cdot, j_t}$$.
3. Compute the singular value decomposition of $$C$$.



```python

def sample_me_lsyst(A, b, m, n, samples, rank, r, w, rows, sigma, row_norms, LS_prob_rows, LS_prob_columns, A_Frobenius):

    r""" Function to estimate the coefficients :math: '\lambda_l = \langle v^l \vert A^\dagger \vert b \rangle'

    Args:
        A (array[complex]): rectangular, in general, complex matrix
        m (int): number of rows of matrix A
        n (int): number of columns of matrix A
        samples (int): number of stochastic samples performed to estimate :math: '\lambda_l'
        rank (int): rank of matrix A
        r (int): number of sampled rows from matrix A
        w (array[complex]): left-singular vectors of matrix C
        rows (array[int]): indices of the r sampled rows of matrix A
        sigma (array[float]): singular values of matrix C
        row_norms (array[float]): row norms of matrix A
        LS_prob_rows (array[float]): LS row probability distribution of matrix A
        LS_prob_columns (array[float]): LS column probability distribution of matrix A
        A_Frobenius (float): Frobenius norm of matrix A

    Returns:
        array[float]: Array containing the coefficients :math: '\lambda_l = \langle v^l \vert A^\dagger \vert b \rangle'
    """

    # Number of independent estimates. We take the median of these as the final estimate
    reps = 10

    # creates empty array of matrix elements <v^l|A^dagger|b> for l=1,2,.., k and many repetitions of the estimates
    matrix_elements = np.zeros((reps, rank))

    for i in range(reps):

        # calculate matrix element for l=1,2,.., k
        for l in range(rank):

            # create empty array of sampled matrix elements
            X = np.zeros(samples)

            # sample matrix elements
            for k in range(samples):

                # sample row index from length-square distribution
                sample_i = np.random.choice(m, 1, replace=True, p=LS_prob_rows)[0]
                # sample column index from length-square distribution from previously sampled row
                sample_j = np.random.choice(n, 1, p=LS_prob_columns[sample_i])[0]

                # j-th entry of right singular vector of matrix R
                v_j = 0

                # calculates v_j
                for s in range(r):
                    v_j += A[rows[s], sample_j] * w[s, l] / (np.sqrt(row_norms[rows[s]]))
                    # print(v_j)
                v_j = v_j * A_Frobenius / (np.sqrt(r) * sigma[l])

                # computes sampled matrix element
                X[k] = ((A_Frobenius ** 2 * b[sample_i]) / (A[sample_i, sample_j])) * v_j

            # assigns estimates for each l and repetition
            matrix_elements[i, l] = np.mean(X)

    # creates empty array of matrix elements <v_l|A|b>
    lambdas = np.zeros(rank)

    # take median of all repeated estimates
    for l in range(rank):
        lambdas[l] = np.median(matrix_elements[:, l])

    return lambdas
```

#### Why median not mean?
Using the median instead of the mean provides a more robust estimate, as it is not as sensitive to outliers or extreme values. Therefore, by taking the median of the repeated estimates, the function obtains a more reliable and robust estimate of the coefficients.


#### the way to calculate v_j
To obtain the v_j value, the function needs to calculate the contribution of each sampled row of A to the j-th entry of the l-th right singular vector of C.