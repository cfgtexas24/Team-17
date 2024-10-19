import dotenv from 'dotenv';
dotenv.config();

export const createForm = async () => {
  const response = await fetch(`forms.googleapis.com`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.GOOGLE_SCRIPTS_API_KEY}`
    },
    body: {
        "info": {
            "title": "My new form"
        }
    }  
    })
  return response.json()
}