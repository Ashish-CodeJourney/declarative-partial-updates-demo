// The Simulation: We use JS to mimic a server 
// streaming the rest of the HTML 3 seconds later.
setTimeout(() => {
  document.body.insertAdjacentHTML('beforeend', `
    
    <template for="activities-section">
      <ul>
        <li>✨ Built a cool streaming demo</li>
        <li>🚀 Posted it on LinkedIn</li>
        <li>🔥 Learned about Declarative Partial Updates</li>
      </ul>
    </template>
    
  `);
}, 3000);
