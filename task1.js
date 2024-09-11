const scriptURL = 'https://script.google.com/macros/s/AKfycbxre2HjhJzrt_kMSmmVqHsPthvYVunOKX1n4vMycRvQ-FLZeIt9xYIX24-q3d8n14Lj-g/exec" name="post-job'


const form = document.forms['post-job']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
