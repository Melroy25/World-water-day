fetch('https://sjec.ac.in/green-initiatives')
  .then(r => r.text())
  .then(t => {
    const matches = [...t.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log(matches.filter(m => m.includes('upload')));
  });
