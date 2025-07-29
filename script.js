function toggleLanguage(lang) {
  const it = document.querySelectorAll('.it');
  const en = document.querySelectorAll('.en');
  it.forEach(el => el.style.display = lang === 'it' ? 'inline' : 'none');
  en.forEach(el => el.style.display = lang === 'en' ? 'inline' : 'none');
}
window.onload = () => toggleLanguage('it');
