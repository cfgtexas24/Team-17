import dotenv from 'dotenv';
dotenv.config();

const { GOOGLE_SCRIPTS_API_KEY } = process.env;

export const createForm = async () => {
  const response = await fetch(`forms.googleapis.com`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GOOGLE_SCRIPTS_API_KEY}`
    },
    body: {
        "info": {
            "title": "My new form"
        }
    }  
    })
  return response.json()
}