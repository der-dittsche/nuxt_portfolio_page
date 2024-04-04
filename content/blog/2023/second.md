---
title: 'End of 2023'
description: 'What I do last Year'
head:
  meta:
    - name: 'keywords'
      content: 'der-dittsche, blog'
    - name: 'author'
      content: 'Sascha Dietrich'
    - name: 'copyright'
      content: '© 2024 der-dittsche'
publishedAt: 2023-12-31 12:00:00
---

### A bit of VueJs

Here's a basic Vue 3 application setup:

```javascript
const { createApp } = Vue
const app = createApp({
  data() {
    return {
      message: 'Hello Vue 3!'
    }
  }
})
app.mount('#app')
```