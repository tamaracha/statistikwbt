import zerorpc
import numpy as np
import scipy.stats as stats

def corgen(cor=0.0,size=1000,epsilon=0.03):
    cov = np.array([[1.0,cor],[cor,1.0]])
    L = np.linalg.cholesky(cov)
    lower, upper = cor-epsilon, cor+epsilon
    uncorrelated = np.random.standard_normal((2, size))
    correlated = np.dot(L, uncorrelated)
    rho=stats.pearsonr(correlated[0],correlated[1])[0]
    while rho>upper or rho<lower:
        uncorrelated = np.random.standard_normal((2, size))
        correlated = np.dot(L, uncorrelated)
        rho=stats.pearsonr(correlated[0],correlated[1])[0]
    #data=[]
    #for i in range(size):
    #    data.append({"x": correlated[0][i], "y": correlated[1][i]})
    #return(data)
    return(correlated)

class HelloRPC(object):
    def hello(self, name):
        return "Hello, %s" % name

s = zerorpc.Server(HelloRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()