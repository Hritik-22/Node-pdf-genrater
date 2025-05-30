🧾 Certificate Generator API (Node.js)
This API allows you to generate a custom certificate (e.g., for events like marathons) and saves the generated PDF in a folder named certificates.

📌 Required Fields (POST Request via Postman)
Send a POST request to /api/certificate/generate with the following JSON body:

{
  "register_id": 12297918,
  "gmail": "yadavrhr@gmail.com",
  "phone": "9910892371",
  "address": "Anand Farm, Sector 22",
  "city": "Gurugram",
  "pinCode": "122016",
  "state": "Haryana",
  "country": "India",
  "title": "Certificate of Half Marathon",
  "recipient": "This Certificate is Presented to",
  "name": "Rajesh Yadav",
  "gender": "Male",
  "blood_group": "B+",
  "content": "The certificate of achievement is awarded to individuals who have demonstrated outstanding performance in their field. Here’s an example text for a certificate.",
  "dob": "25-09-2002"
}
🗂️ Output
The API generates a certificate file (PDF or image) and stores it in the certificates/ folder.

Each file is uniquely named using the register_id or user name.

📬 Endpoint
POST /api/certificate/generate
