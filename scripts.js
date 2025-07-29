
function toggleLanguage(lang) {
  const it = document.querySelectorAll('.it');
  const en = document.querySelectorAll('.en');
  it.forEach(el => el.style.display = lang === 'it' ? 'block' : 'none');
  en.forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
}
window.onload = () => toggleLanguage('it');
