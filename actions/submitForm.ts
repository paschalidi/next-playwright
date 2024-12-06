// app/actions/form.ts
'use server'

export async function submitForm({
                                   name,
                                   email,
                                   message
                                 }: {
  name: string,
  email: string,
  message: string
}) {
  try {
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Log the submission (you can replace this with your actual logic)
    console.log('Form submitted:', { name, email, message })

    // Always return success
    return {
      success: true,
      message: 'Form submitted successfully'
    }
  } catch (error) {
    // Even in case of error, we'll return success as requested
    return {
      success: true,
      message: 'Form submitted successfully'
    }
  }
}