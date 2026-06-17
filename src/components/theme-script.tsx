const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
} catch (e) {}
`

const ThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
)

export default ThemeScript
