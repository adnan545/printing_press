# Setting Up EmailJS for the Contact Form

## Overview
This guide will help you set up EmailJS to handle the contact form submissions on the Perfect Printer website. EmailJS allows you to send emails directly from client-side JavaScript without requiring a server-side implementation.

## Steps to Set Up EmailJS

### 1. Create an EmailJS Account
- Visit [EmailJS website](https://www.emailjs.com/) and sign up for a free account
- The free tier allows up to 200 emails per month

### 2. Create an Email Service
- In your EmailJS dashboard, click on "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account by following the prompts
- Note down the **Service ID** that is generated

### 3. Create an Email Template
- Go to the "Email Templates" section in the dashboard
- Click on "Create New Template"
- Design your email template with the following variables:
  - `{{from_name}}` - The name of the person submitting the form
  - `{{from_email}}` - The email address of the person submitting the form
  - `{{service_type}}` - The type of service requested
  - `{{quantity}}` - The quantity/limit specified
  - `{{message}}` - The message content
  - `{{phone}}` - The phone number provided
- Save the template and note down the **Template ID**

### 4. Get Your Public Key
- Go to the "Account" section in the dashboard
- Copy your **Public Key**

### 5. Update the Website Code
- Open `contact.html` and replace `YOUR_PUBLIC_KEY` with your actual public key
- Open `script.js` and update the following:
  - Replace `YOUR_SERVICE_ID` with your actual service ID
  - Replace `YOUR_TEMPLATE_ID` with your actual template ID

## Testing the Form
1. Fill out the contact form on the website
2. Submit the form
3. Check your email inbox for the submitted message
4. If you don't see the email, check your spam folder

## Troubleshooting
- If emails are not being sent, check the browser console for any error messages
- Verify that all IDs and keys are correctly entered
- Make sure your email template variables match the parameters sent in the code

## Additional Resources
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS SDK Reference](https://www.emailjs.com/docs/sdk/installation/)