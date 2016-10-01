function Graph(n){
  this.vNum = n;
  this.vList = [];
  this.adj = [];
  this.visited = [];
}

Graph.prototype.addEdge = function(v,w){
  if(!this.adj[v]) this.adj[v]=[];
  if(this.adj[v].indexOf(w)<0) this.adj[v].push(w);
  if(!this.adj[w]) this.adj[w]=[];
  if(this.adj[w].indexOf(v)<0) this.adj[w].push(v);
};

Graph.prototype.dfs = function(v){
  if(this.visited.indexOf(v)>=0) return false;
  this.visited.push(v);
  console.log(v);
  for(var i = 0; i < this.adj[v].length; i++){
    this.dfs(this.adj[v][i]);
  }
};

var g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.dfs(0);
