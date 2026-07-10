const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

export const generateCaptcha = () => {
  let code = ""
  for (let i = 0; i < 6; i++) {
    code += CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]
  }
  return code
}
