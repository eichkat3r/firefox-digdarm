function update(el){
  text = el.nodeValue;

  // replace 'Darmstadt' by 'Digitalstadt Darmstadt' if it's not preceded by 'Digitalstadt'
  text = text.replace(/Digitalstadt Darmstadt|chaosdarmstadt|Darmstadt/gi, function(i){
    return {
      'digitalstadt darmstadt': 'Digitalstadt Darmstadt',
      'darmstadt': 'Digitalstadt Darmstadt',
      'chaosdarmstadt': 'chaosdigitalstadt'
    }[i.toLowerCase()];
  });

  // some more replacements
  text = text.replace('Darmstädter', 'Digitalstädter');
  text = text.replace('aus Digitalstadt Darmstadt', 'aus der Digitalstadt Darmstadt');
  text = text.replace('in Digitalstadt Darmstadt', 'in der Digitalstadt Darmstadt');
  text = text.replace('bei Digitalstadt Darmstadt', 'bei der Digitalstadt Darmstadt');
  text = text.replace('von Digitalstadt Darmstadt', 'von der Digitalstadt Darmstadt');
  el.nodeValue = text;
};

var n, walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
while(n=walk.nextNode()) update(n);
