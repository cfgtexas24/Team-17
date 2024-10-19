const createForm = async () => {
    const response = await fetch(`https://forms.googleapis.com/v1/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GOOGLE_SCRIPTS_API_KEY}`
      },
      body: JSON.stringify({
        "info": {
          "title": "My new form"
        }
      })
    })
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    
    return response.json()
  }
  
  export { createForm }