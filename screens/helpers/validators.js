export function nameValidator(name) {
  if (!name) return "Name can't be empty."
  return ''
}
export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Not a valid email address.'
  return ''
}
export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  return ''
}
export function roleValidator(role) {
  if (!role) return "Name can't be empty."
  if (role != 'donor' && role != 'receiver') return 'Not a valid role.'
  return ''
}